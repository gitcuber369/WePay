import React from "react";
import { Vortex } from "../components/ui/Vortex";

export function VortexDemoSecond() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="Black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full">
      </Vortex>
    </div>
  );
}
