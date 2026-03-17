function About() {
  return (
    <div className="about">

      <div className="about-hero">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            I'm Teboho Modiba, also known as "Tebza" or "Tee," a passionate web
            developer and aspiring software engineer. I enjoy building modern,
            impactful digital solutions and continuously sharpening my skills
            through emerging technologies.
          </p>
          <p>
            I'm detail-oriented, observant, and naturally curious — qualities that
            shape how I approach both development and problem-solving. While I tend
            to be reserved, I value meaningful collaboration and strong connections.
          </p>
          <p>
            Outside of tech, I enjoy music, exploring new gadgets, gaming, hiking,
            and playing the guitar.
          </p>
        </div>

        <div className="about-photo-wrap">
          <img
            src="assets/profile.jpg"
            alt="Teboho Modiba"
            className="about-photo"
          />
        </div>
      </div>

      <div className="about-details">
        <div className="about-section">
          <h2>My Focus</h2>
          <ul>
            <li> Web Development</li>
            <li>Backend Development</li>
            <li> Software Engineering</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Certifications</h2>
          <p>IBM Code Generation & Optimization Certification</p>
          <p> IBM Quantum Enigmas Certification</p>
        </div>
      </div>

    </div>
  );
}