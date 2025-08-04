import React, { useRef, useMemo, useEffect, useCallback } from "react";
import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl?: string;
  name?: string;
  title?: string;
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl = "<Placeholder for avatar URL>",
  name = "Javi A. Torres",
  title = "Software Engineer",
  className = "",
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const cardStyle = useMemo(
    () => ({
      "--avatar-url": `url(${avatarUrl})`,
    }),
    [avatarUrl]
  );

  // Tilt Animation Handlers (unchanged)
  const clamp = (value: number, min = 0, max = 100) =>
    Math.min(Math.max(value, min), max);

  const adjust = (
    value: number,
    fromMin: number,
    fromMax: number,
    toMin: number,
    toMax: number
  ) =>
    toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const card = cardRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const width = card.clientWidth;
    const height = card.clientHeight;

    const percentX = clamp((100 / width) * offsetX);
    const percentY = clamp((100 / height) * offsetY);

    const centerX = percentX - 50;
    const centerY = percentY - 50;

    wrap.style.setProperty("--pointer-x", `${percentX}%`);
    wrap.style.setProperty("--pointer-y", `${percentY}%`);
    wrap.style.setProperty("--rotate-x", `${-(centerY / 5)}deg`);
    wrap.style.setProperty("--rotate-y", `${centerX / 5}deg`);
  }, []);

  const resetTilt = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    wrap.style.setProperty("--rotate-x", `0deg`);
    wrap.style.setProperty("--rotate-y", `0deg`);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", resetTilt);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", resetTilt);
    };
  }, [handlePointerMove, resetTilt]);

  return (
    <div
      ref={wrapRef}
      className={`pc-card-wrapper ${className}`.trim()}
      style={cardStyle as React.CSSProperties}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-details-overlay">
            <h3>{name}</h3>
            <p>{title}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(ProfileCard);
