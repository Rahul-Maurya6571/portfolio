import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Passionate about problem-solving, I possess a strong ability to analyze complex issues and find effective solutions. I am constantly seeking opportunities to learn and grow in the ever-evolving field of web development. With a keen eye for detail and a commitment to clean and efficient code, I strive to deliver high-quality applications that meet client requirements.
        </p>

        <br />

        <p className="text-xl">
        I am eager to collaborate with talented professionals, learn from experienced mentors, and contribute to a team that values creativity and innovation. As a proactive and fast learner, I am confident in my ability to adapt to new technologies and frameworks as required.
        </p>

        <br />
        <p className="text-xl">
In addition to my technical skills, I have excellent communication and collaboration abilities, which enable me to effectively work in team environments and understand client needs.
</p>

        <br />
        <p className="text-xl">
I am actively seeking opportunities to apply my skills and contribute to projects that make a positive impact. If you are looking for a dedicated and enthusiastic MERN full stack developer, I would be thrilled to be a part of your team.
</p>

        <br />


        
      </div>
    </div>
  );
};

export default About;
