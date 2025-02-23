import { useRef, useCallback, useEffect } from "react";

export const DIRECTION_VALUES = ["up", "down", "left", "right"] as const;
export type DirectionType = (typeof DIRECTION_VALUES)[number];

export const useScrollFadeIn = (direction: DirectionType = "up", duration = 1, delay = 0) => {
    const ref = useRef<HTMLDivElement | null>(null); // HTMLDivElement로 타입 변경

    const handleDirection = (name: string) => {
        switch (name) {
            case "up":
                return "translate3d(0, 10%, 0)"; // 이동 거리 감소
            case "down":
                return "translate3d(0, -20%, 0)"; // 이동 거리 감소
            case "left":
                return "translate3d(20%, 0, 0)"; // 이동 거리 감소
            case "right":
                return "translate3d(-20%, 0, 0)"; // 이동 거리 감소
            default:
                return;
        }
    };

    const handleScroll: IntersectionObserverCallback = useCallback(
        ([entry]) => {
            if (!ref.current) return;

            if (entry.isIntersecting) {
                ref.current.style.transitionProperty = "opacity transform";
                ref.current.style.transitionDuration = `${duration}s`;
                ref.current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
                ref.current.style.transitionDelay = `${delay}s`;
                ref.current.style.opacity = "1";
                ref.current.style.transform = "translate3d(0, 0, 0)";
            }
        },
        [delay, duration]
    );

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(handleScroll, { threshold: 0.4 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [handleScroll]);

    return {
        ref,
        style: { opacity: 0, transform: handleDirection(direction) },
    };
};
