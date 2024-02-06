import { useEffect, useState } from "react";

export function useTypingEffect(text, initialDelay, minSpeed=100, maxSpeed=300, backspaceProbability=0.2, onComplete) {
  const [displayedText, setDisplayedText] = useState(' ');
  
  useEffect(() => {
    const delayId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length < text.length) {
            const shouldBackspace = Math.random() < backspaceProbability;

            if (shouldBackspace && prev.length > 0) {
              // Backspace up to 3 consecutive times
              const backspaceCount = Math.min(Math.floor(Math.random() * 2) + 1, prev.length);
              if ((displayedText.length - backspaceCount) > 0) {
                return prev.slice(0, -backspaceCount);
              } else {
                return prev
              }
              
            } else {
              return text.slice(0, prev.length + 1);
            }
          } else {
            clearInterval(intervalId);
            if (onComplete) {
              onComplete();
            }
            return prev;
          }
        });
      }, Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed);

      return () => {
        clearInterval(intervalId);
      };
    }, initialDelay);

    return () => {
      clearTimeout(delayId);
    };
  }, [text,displayedText.length, initialDelay, minSpeed, maxSpeed, backspaceProbability, onComplete]);

  return displayedText
}
