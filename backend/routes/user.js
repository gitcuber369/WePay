// backend/routes/user.js
const express = require('express');

const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../model/db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../cofig");
const  { authMiddleware } = require("../middleware/middleware");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)

  console.log(req.body);
  console.log(success);

    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    
    res.status(411).json({
        message: "Error while logging in"
    })
})

router.get("/auth", authMiddleware, async (req,res) => {
        const userId = req.body.userId;
        const findUser = await User.findById(userId);
        if (!findUser) {
            return res.status(411).json({
                message : "No such user found"
            });
        }
        return res 
        .status(200)
        .json({ 
            firstName: findUser.firstName , 
            lastName: findUser.lastName
        });
});


const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/update", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)

    console.log(req.body);
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    const updatedUser = await User.findOneAndUpdate(req.body, {
        id: req.userId,
    }, {
        firstName : req.body.firstName, 
        lastName : req.body.lastName,
    }, {
        new : true,
    }
);
    if(!updatedUser) {
        return res.status(411).json({
            message: "User not Found"     
        });
    } else {
        console.log("Upodated user");
        res.status(200).json({
            message: "User updated successfully"
        })
    }
})

router.get("/info", authMiddleware, async (req, res) => {
    try{
        const findUser = await User.findOne({ _id : req.userId});
        if(!findUser) {
            return res.status(404).json({
                message : "user not fond"
            })
        } res.json({
            firstName: findUser.firstName,
            lastName: findUser.lastName
        });
    } catch(error) {
        console.log("Error while finding user" ,error);
    }
})

router.get("/bulk", authMiddleware ,async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;