import { useState, useEffect } from "react";
import { InfoCard } from "./info-card";

export const About = () => {
  const greetings = ["Hey", "வணக்கம்", "नमस्ते", "Hallo", "Bonjour", "Hola"];

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
    <div className="w-screen  bg-customGradient  text-white flex flex-col p-10 lg:p-52">
      <div className="flex items-center mb-8">
        <div className="w-1.5 h-10 bg-customeGreen mr-4"></div>
        <h1 className="text-xl font-semibold">01 / ABOUT ME</h1>
      </div>
      <p className="text-3xl mb-10 animate-fadeIn">
        {currentGreeting}
        <span className="blinking-cursor">|</span>
      </p>
      <p className="leading-relaxed text-lg md:text-2xl ">
        I’m Anavaradha Sankar, a Senior Software Engineer with over 13 years of
        experience building dynamic, user-centric applications. With expertise
        across front-end and back-end technologies, I excel at delivering
        scalable solutions, integrating complex systems, and managing projects
        using Agile and Scrum methodologies. My passion lies in creating
        efficient, high-performing web and mobile applications that solve
        real-world problems, while continuously learning new technologies to
        stay ahead in the field. Currently based in Zurich, I’m always excited
        to explore new challenges in software development and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-16 mt-28">
        <InfoCard number="13+" label="Years of Experience" />
        <InfoCard number="10+" label="Technologies Leveraged" />
        <InfoCard number="50+" label="Features Deployed" />
      </div>
    </div>
  );
};
