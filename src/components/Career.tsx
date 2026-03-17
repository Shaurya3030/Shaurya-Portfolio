import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Developer</h4>
                <h5>Self Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Building AI-based systems and full stack web applications using
              technologies such as React, Node.js, Python, and modern
              development frameworks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant</h4>
                <h5>College Hackathons</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed innovative technical solutions including AI-based
              automation tools and problem-solving systems in competitive
              hackathons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
