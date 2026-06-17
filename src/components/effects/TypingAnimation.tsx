"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
};

export default function TypingAnimation({ phrases, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1)
          );
        },
        deleting ? 45 : 90
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className} aria-live="polite">
      <span className="gradient-text font-mono">{text}</span>
      <span className="ml-0.5 inline-block w-[3px] animate-blink bg-brand-400 align-middle text-transparent">
        |
      </span>
    </span>
  );
}
