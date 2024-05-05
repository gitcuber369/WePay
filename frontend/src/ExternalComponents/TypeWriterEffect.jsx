import { TypewriterEffect } from "../components/ui/TypeWrite";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Secure ,",
    },
    {
      text: "seemless",
    },
    {
      text: "solution",
    },
    {
      text: "for",
    },
    {
        text: "all",
    },
    {
        text: "your",
    },
    {
        text: "transactions",
    },
  ];
  return (
    <div className="text-white">
      <TypewriterEffect words={words} />
    </div>
  );
}
