import { useTypingAnimation } from "../../hooks/useTypingAnimation";

export default function TypingAnimation() {
  const displayText = useTypingAnimation(50, 25, 2500);

  return (
    <div className="min-h-[2em] md:min-h-[1.5em]">
      <span className="text-lg md:text-xl text-text-secondary font-medium">
        {displayText}
      </span>
      <span className="typing-cursor" />
    </div>
  );
}
