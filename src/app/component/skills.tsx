const Skills = () => {
  return (
    <div id="skills">
      <section id="skills" className="p-10 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 mt-16">
          MY <span className="text-cyan-600">SKILLS</span>
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          I have expertise in the following technologies:
        </p>
        <div className="flex justify-center flex-wrap">
          <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <h3 className="text-xl font-semibold">TypeScript</h3>
          </div>
          <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hoaver:shadow-lg hover:shadow-gray-400">
            <h3 className="text-xl font-semibold">Tailwind CSS</h3>
          </div>
          <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <h3 className="text-xl font-semibold">Next.js</h3>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 mt-16 text-black">
            FIND <span className="text-cyan-600">ME</span>
          </h2>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
              <a
                href="https://github.com/MuhammadFahadSiddiqui"
                className="text-xl font-semibold"
              >
                GitHub
              </a>
            </div>
            <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
              <a
                href="https://vercel.com/muhammadfahadsiddiquis-projects"
                className="text-xl font-semibold"
              >
                Vercel
              </a>
            </div>
            <div className="m-2 p-4 bg-gray-200 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
              <a
                href="https://www.npmjs.com/MuhammadFahadSiddiqui"
                className="text-xl font-semibold"
              >
                npm
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
