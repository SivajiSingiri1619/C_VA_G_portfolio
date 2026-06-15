import { useState, useEffect, useCallback } from "react";

const headlines = [
  "Crafting Scalable Web Experiences with the MERN Stack",
  "Engineering Full-Stack Solutions from Concept to Deployment",
  "Building the Future of Web, One Component at a Time",
  "Turning Complex Problems into Elegant Digital Solutions",
  "Full-Stack Developer Passionate About Modern Web Architecture",
  "From MongoDB to React — I Build End-to-End Experiences",
  "Creating Performant Applications That Users Love",
  "Bridging Design and Engineering with Clean, Scalable Code",
  "Architecting Real-Time Applications with Node.js & React",
  "Transforming Ideas into Production-Ready MERN Applications",
];

export function useTypingAnimation(speed = 60, deleteSpeed = 30, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const animate = useCallback(() => {
    const currentHeadline = headlines[currentIndex];

    if (!isDeleting) {
      if (displayText.length < currentHeadline.length) {
        return setTimeout(() => {
          setDisplayText(currentHeadline.slice(0, displayText.length + 1));
        }, speed);
      } else {
        return setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (displayText.length > 0) {
        return setTimeout(() => {
          setDisplayText(currentHeadline.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % headlines.length);
        return null;
      }
    }
  }, [displayText, currentIndex, isDeleting, speed, deleteSpeed, pauseTime]);

  useEffect(() => {
    const timeout = animate();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [animate]);

  return displayText;
}
