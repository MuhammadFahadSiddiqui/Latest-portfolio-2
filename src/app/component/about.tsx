import Image from "next/image";
import ProfilePic from "../../../public/Profile Pic 2.svg"

const About = () => {
  return(
  <div id="about">
    <section
      id="about"
      className="md:ml-40 flex flex-col md:flex-row items-center justify-center min-h-screen space-y-4 md:space-y-0 md:space-x-8"
    >
      <div className="text-center bg-white p-10 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Hi!</h1>
        <h2 className="text-3xl text-cyan-600 font-semibold mb-2">About Me!</h2>
        <p className="text-lg text-gray-700 font-medium">
          Fahad Siddique is a passionate Frontend Developer with expertise in
          building responsive and interactive web applications. With a strong
          foundation in HTML, CSS, JavaScript, and modern libraries like
          React.js and Tailwind CSS, Fahad is dedicated to creating
          user-friendly interfaces. Always eager to learn and embrace new
          challenges, Fahad focuses on clean, efficient code and continuously
          improving the user experience. Currently, Fahad is pursuing further
          education in the Governor Initiative for Cloud Applied Generative AI
          program, blending cutting-edge technologies with frontend development
          skills.
        </p>
        <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
          <a href="/" className="text-xl font-semibold">
            Read More
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          className="object-cover object-center rounded"
          alt="Fahad"
          width={300}
          height={300}
          loading="lazy"
          src={ProfilePic}
        />
      </div>
    </section>
  </div>
  )
};

export default About;
