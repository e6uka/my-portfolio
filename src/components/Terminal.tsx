import React, { useEffect, useState } from "react";

const lines = [
  "$ whoami",
  "Okeke Ebuka - Frontend Developer",
  "$ skills --list",
  "React, TypeScript, React native, TailwindCSS",
//   "$ now",
//   "Building Finlake for Softgem Global Technologies",
];

export default function Terminal() {
  const [displayedText, setDisplayedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="bg-black text-green-400 font-mono p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <pre className="whitespace-pre-wrap">{displayedText}</pre>
      <span className="inline-block w-2 bg-green-400 animate-pulse ml-1 h-4"></span>
    </div>
  );
}
