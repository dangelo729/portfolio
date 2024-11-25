/* Planet Component */
import { useState, useEffect, useRef } from "react";

interface PlanetProps {
  planet: {
    size: number;
    color?: string;
    distance: number;
    rate: number;
    speed: number;
    initialAngle: number;
  };
  isAnimating: boolean;
  alignPlanets: boolean;
  shimmer?: boolean;
}

export default function Planet({ planet, isAnimating, alignPlanets, shimmer = false }) {
    const planetRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(planet.initialAngle);
    const [targetPosition, setTargetPosition] = useState(planet.initialAngle);

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            if (isAnimating) {
                setTargetPosition((prev) => prev + planet.speed);
            } else if (alignPlanets) {
                const rotations = Math.ceil((position - planet.initialAngle) / 360);
                const newTarget = planet.initialAngle + rotations * 360;
                setTargetPosition(newTarget);
            }

            setPosition((prevPosition) => {
                const dif = targetPosition - prevPosition;
                return prevPosition + dif * planet.rate;
            });

            if (planetRef.current) {
                const radius = planet.distance;
                const angleInRadians = ((position % 360) * Math.PI) / 180;
                const x = radius * Math.cos(angleInRadians);
                const y = radius * Math.sin(angleInRadians);

                planetRef.current.style.transform = `translate(${x}px, ${y}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isAnimating, alignPlanets, planet, position, targetPosition]);

    return (
        <div
            ref={planetRef}
            className={`absolute ${shimmer ? 'animate-shimmer' : ''}`}
            style={{
                width: `${planet.size}px`,
                height: `${planet.size}px`,
                backgroundColor: shimmer ? undefined : planet.color || "transparent",
                borderRadius: "50%",
                left: `calc(50% - ${planet.size / 2}px)`,
                top: `calc(50% - ${planet.size / 2}px)`,
            }}
        ></div>
    );
}

