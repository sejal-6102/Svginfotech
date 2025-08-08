import React, { useEffect, useState } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

export default function DesignDepartment() {
  const skills = [
    { name: "ADOBE PHOTOSHOP", value: 75 },
    { name: "GRAPHIC DESIGN", value: 90 },
    { name: "WEB DEVELOPMENT", value: 69 },
    { name: "SOCIAL NETWORKING", value: 78 },
  ];

  // Progress values for animation
  const [progress, setProgress] = useState(skills.map(() => 0));

  // Intersection Observer hook
  const { ref, inView } = useInView({
    triggerOnce: false, // Only trigger once
    threshold: 0.3,    // 30% visible then start animation
  });

  useEffect(() => {
    if (inView) {
      skills.forEach((skill, index) => {
        let start = 0;
        const interval = setInterval(() => {
          start += 1;
          setProgress((prev) => {
            const newProgress = [...prev];
            newProgress[index] = start;
            return newProgress;
          });
          if (start >= skill.value) clearInterval(interval);
        }, 20); // Speed of animation
      });
    }
  }, [inView]);

  return (
    <section className="bg-white py-16" ref={ref}>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-800">
          DESIGN DEPARTMENT
        </h2>
        {/* Decorative lines */}
        <div className="flex flex-col items-center mt-2 space-y-[3px]">
          <div className="w-12 h-[2px] bg-gray-800"></div>
          <div className="w-8 h-[2px] bg-gray-500"></div>
          <div className="w-6 h-[2px] bg-gray-400"></div>
        </div>
      </div>

      {/* Circular Progress Bars */}
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-28 h-28">
              <CircularProgressbar
                value={progress[index]}
                text={`${progress[index]}%`}
                styles={buildStyles({
                  pathColor: "#000000",
                  textColor: "#000000",
                  trailColor: "#f0f0f0",
                  textSize: "16px",
                  strokeLinecap: "butt",
                })}
              />
            </div>
            <p className="mt-4 text-sm font-semibold tracking-wide text-gray-800 text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
