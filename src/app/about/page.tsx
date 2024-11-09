import Image from "next/image";
import ProfilePic from "../../../public/Profile Pic 2.svg";
import './About.css';

const About = () => {
  return (
    <div id="about">
      <section className="about-section">
        <div className="about-text-box">
          <h1>Hi!</h1>
          <h2>About Me!</h2>
          <p>
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
          <div className="read-more-box">
            <a href="/" className="read-more-link">
              Read More
            </a>
          </div>
        </div>
        <div className="about-image">
          <Image
            alt="Fahad"
            width={300}
            height={300}
            loading="lazy"
            src={ProfilePic}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
