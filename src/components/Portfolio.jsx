import React from "react";
import Ecommerce from "../assets/portfolio/ecom.png";
import ChatApp from "../assets/portfolio/chat-app.png";
import BloodDonation from "../assets/portfolio/blood_donation.png";
import cms from "../assets/portfolio/cms.png";
import CarRental from "../assets/portfolio/car-rental.png"
import SocilaApp from "../assets/portfolio/socialapp.png"

const Projects = () => {
  const projects = [
    {
      img: Ecommerce,
      title: "Ecommerce-app",
      desc: " A full stack app where user shop. Built with Javascript, Node.js, MongoDB, React, Redux and CSS etc.",
      // live: "https://laundry-front-sxzh.onrender.com/",
      code: "https://github.com/Rahul-Maurya6571/ecommerce-app",
    },
    {
      img: ChatApp,
      title: "Chat-App",
      desc: "User chat with theirs friend in groups or one to one . Built with Javascript,Socket.io, React, and CSS etc.",
      // live: "https://uilogs.xyz/",
      code: "https://github.com/Rahul-Maurya6571/chat-app/tree/master",
    },
    {
      img: BloodDonation,
      title: "Blood-Donation-app",
      desc: "It is a blood donation app where user donate and take blood. Built with Javascript, Node.js, MongoDB, React, and CSS etc.",
      // live: "https://youtube-lite-two.vercel.app/",
      code: "https://github.com/Rahul-Maurya6571/Blood-donation-app",
    },
    {
      img: cms,
      title: "Conatact-management-system",
      desc: "user create their contact list. Built with Javascript, Node.js, MongoDB, React, and CSS etc. ",
      // live: "https://gallary-pi.vercel.app/",
      code: "https://github.com/Rahul-Maurya6571/cms/tree/master",
    },
    {
      img: CarRental,
      title: "Car-Rental",
      desc: "It is car-rental-app where user take car on rent. Built with Javascript, Node.js, MongoDB, React, and CSS etc. ",
      // live: "https://gallary-pi.vercel.app/",
      code: "https://github.com/Rahul-Maurya6571/car-rental/tree/master",
    },
    {
      img: SocilaApp,
      title: "Social-Media-App",
      desc: "It is a social media app. Built with Javascript, Node.js, MongoDB, React, and CSS etc. ",
      // live: "https://gallary-pi.vercel.app/",
      code: "https://github.com/Rahul-Maurya6571/Social-Media-App",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-800 to-black text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my projects. I have built these with Javascript, Reactjs,
Nodejs, Expressjs, MongoDB, Socket.io, HTML, CSS(Tailwind, MaterialUI, RESTAPI, jsonwentoken), Vanilla Javascript etc. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                {/* <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p> */}

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
              <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>
            </div>
          );
        })}
      </div>
   
    </section>
  );
};

export default Projects;
