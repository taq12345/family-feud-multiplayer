import { useEffect, useState } from "react";

const STEP_MS = 450;

/**
 * Trailing dots for "in progress" labels: one dot, then two, then three, then
 * back to one. All three dots are always laid out and the unused ones are only
 * hidden, so the label keeps its width and centred text does not shift.
 */
export function AnimatedDots() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => setCount((c) => (c % 3) + 1), STEP_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span aria-hidden="true">
      {[1, 2, 3].map((n) => (
        <span key={n} className={n <= count ? undefined : "invisible"}>
          .
        </span>
      ))}
    </span>
  );
}
