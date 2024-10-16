import React from "react";

const Education = () => {
  return(
    <div>
        <section id="education" className="p-10 bg-white flex flex-col items-center">
  <div className="education-list text-center w-full max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 mt-16">
      MY <span className="text-cyan-600">EDUCATION</span>
    </h2>
    <div className="mb-6 p-6 bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold">
        Naz Primary and Secondary School
      </h3>
      <p className="text-lg text-gray-600">Year: 2020-2021</p>
      <p className="text-lg text-gray-600">Field: Science (Biology)</p>
    </div>
    <div className="mb-6 p-6 bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold">City Government College</h3>
      <p className="text-lg text-gray-600">Year: 2022-2023</p>
      <p className="text-lg text-gray-600">Field: Commerce</p>
    </div>
    <div className="mb-6 p-6 bg-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold">GIAIC</h3>
      <p className="text-lg text-gray-600">Field: AI</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Education;