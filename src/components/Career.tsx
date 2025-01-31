import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Numetry Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            • Designed and developed full-stack web applications using React, Node.js, Express, and MongoDB, enhancing user
            experience and performance by 30Collaborated with cross-functional teams to gather requirements and deliver
            scalable solutions, integrating RESTful APIs and third-party services.

            • Implemented reusable components and optimized codebase for a modular and maintainable architecture, reducing future
            development time by 20Built and maintained a responsive UI with HTML5, CSS3, JavaScript, and modern
            libraries/frameworks such as Tailwind CSS and Redux.
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default Career;
