// import React from "react";

// const Contact = () => {
//   return (
//     <div
//       name="contact"
//       className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
//     >
//       <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Contact Me
//           </p>
//           <p className="py-6">Submit the form below to get in touch with me</p>
//         </div>

//         <div className=" flex justify-center items-center">
//           <form
//             action="https://getform.io/f/4e965513-346a-441b-9214-58f2441af1aa"
//             method="POST"
//             className=" flex flex-col w-full md:w-1/2"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               rows="10"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>

//             <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Let's talk
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-black px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role, Backend Developer role and Full Stack Developer (MERN) role . If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> rahulmaurya6571@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +919118122596
        </p>
      </div>
    </section>
  );
};

export default Contact;
