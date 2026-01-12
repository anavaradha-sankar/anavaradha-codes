import { useState, useEffect } from "react";
import { InfoCard } from "./info-card";
import SectionHeader from "../common/section-header";

export const About = () => {
  const greetings = ["Hey", "வணக்கம்", "नमस्ते", "Hallo", "Bonjour", "Hola", "Ciao"];

  const [currentGreeting, setCurrentGreeting] = useState("");
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const pauseTime = 1500;

  useEffect(() => {
    const currentWord = greetings[greetingIndex];

    if (!isDeleting && typingIndex < currentWord.length) {
      // Typing effect
      const typingTimeout = setTimeout(() => {
        setCurrentGreeting((prev) => prev + currentWord[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimeout); // Cleanup timeout on update
    } else if (isDeleting && typingIndex > 0) {
      // Deleting effect
      const deletingTimeout = setTimeout(() => {
        setCurrentGreeting((prev) => prev.slice(0, -1));
        setTypingIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(deletingTimeout); // Cleanup timeout on update
    } else if (!isDeleting && typingIndex === currentWord.length) {
      // Wait before starting to delete
      const pauseTimeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pauseTimeout); // Cleanup timeout on update
    } else if (isDeleting && typingIndex === 0) {
      // Move to the next greeting
      setIsDeleting(false);
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }
  }, [currentGreeting, typingIndex, isDeleting, greetingIndex]);

  return (
    <div className="flex w-screen flex-col bg-aboutSection p-10 text-primaryTextColor lg:p-52">
      <SectionHeader text="01 / ABOUT ME" accentColor="bg-primaryAccent" />
      <p className="animate-fadeIn mb-10 font-bigShoulders text-6xl font-extrabold md:text-8xl">
        {currentGreeting}
        <span className="blinking-cursor text-6xl md:text-8xl">|</span>
      </p>
      <p className="text-lg leading-relaxed md:text-2xl">
        I'm Anavaradha Sankar Balasubramanian, a Technical Lead
        passionate about building dynamic, user-centric applications. My
        expertise spans front-end and back-end technologies, with a focus on
        delivering scalable solutions, integrating complex systems, and managing
        projects efficiently using Agile and Scrum methodologies. I thrive on
        developing high-performing web and mobile applications that address
        real-world challenges, while continuously expanding my knowledge to stay
        ahead in the ever-evolving tech landscape. Based in Zurich, I’m always
        excited to take on new challenges in software development and
        innovation.
      </p>
      <div className="mt-28 grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-16">
        <InfoCard number="14+" label="Years of Experience" />
        <InfoCard number="10+" label="Technologies Leveraged" />
        <InfoCard number="50+" label="Features Deployed" />
      </div>
    </div>
  );
};
