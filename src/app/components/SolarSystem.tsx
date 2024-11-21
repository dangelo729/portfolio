"use client";
import { useState } from 'react';
import Planet from './Planet';

export default function SolarSystem() {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSunClick = () => {
        setIsAnimating((prev) => !prev);
    };

    return (
        <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            {/* Orbits */}
            {initialPlanets.map((planet, index) => (
                <div
                    key={index}
                    className="absolute border rounded-full"
                    style={{
                        width: `${planet.distance * 2}px`,
                        height: `${planet.distance * 2}px`,
                        borderColor: 'rgba(83, 82, 72, .3)',
                    }}
                ></div>
            ))}

            {/* Sun */}
            <div
                className="absolute flex items-center justify-center cursor-pointer"
                style={{
                    width: `20px`,
                    height: `20px`,
                    backgroundColor: '#535248',
                    borderRadius: '50%',
                }}
                onClick={handleSunClick}
            ></div>

            {/* Planets */}
            {initialPlanets.map((planet, index) => (
                <Planet
                    key={index}
                    planet={planet}
                    isAnimating={!isAnimating}
                    alignPlanets={isAnimating}
                    shimmer={planet.shimmer || false}
                />
            ))}
        </div>
    );
}

// Planet configuration
const initialPlanets = [
    {
        size: 10,
        color: '#d7a64b',
        distance: 20,
        rate: 0.3,
        speed: .9,
        initialAngle: 0.6,
    },
    {
        size: 10,
        color: '#304c7a',
        distance: 40,
        rate: 0.1,
        initialAngle: 0,
        speed: 1.2,
        shimmer: true,
    },
    {
        size: 10,
        color: '#e06236',
        distance: 60,
        rate: 0.2,
        initialAngle: 0,
        speed: .8,
    },
];
