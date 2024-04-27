"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, faDice, faMagicWandSparkles, faSync } from '@fortawesome/free-solid-svg-icons';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    prefix: "+",
  },
  {
    metric: "GPA",
    value: "3.6",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="flex justify-between items-center">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between flex-grow">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  key={animationKey}
                  includeComma
                  animateToNumber={parseFloat(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;