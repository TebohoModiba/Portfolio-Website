function Home({ navigate }) {
  const featured = [
    { title: "Haven App", tech: "React Native + Firebase" },
    { title: "Habit Tracker", tech: "React Native + AI" },
    { title: "NCD Website", tech: "React" },
  ];

  return (
    <div className="home">
      {/* HERO - unchanged */}
      <section className="hero">
        <div className="hero-photo-wrap">
          <img src="assets/profile.jpg" alt="Teboho Modiba" className="hero-photo" />
        </div>
        <div className="hero-text">
          <h1>Teboho Modiba</h1>
          <h2 className="hero-subtitle">Software Engineer & Web Developer</h2>
          <p>
            I'm Teboho, also known as "Tebza" or "Tee" — an aspiring software
            engineer focused on building modern, high-impact web and mobile applications.
          </p>
          <div className="buttons">
            <button className="btn-primary" onClick={() => navigate("projects")}>
              View Projects
            </button>
            <button className="btn-outline" onClick={() => navigate("contact")}>
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* SKILLS - unchanged */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {["React", "React Native", "Firebase", "C#", "JavaScript", "TypeScript", 
            "HTML & CSS", "Java", "Kotlin", "Python", "SQL"].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      {/* Enhanced Projects Preview */}
      <section className="projects-preview">
        <h2>Featured Projects</h2>
        <p>Some of my recent work</p>
        
        <div className="featured-grid">
          {featured.map(p => (
            <div key={p.title} className="featured-card">
              <h3>{p.title}</h3>
              <p>{p.tech}</p>
            </div>
          ))}
        </div>

        <button className="btn-outline" onClick={() => navigate("projects")}>
          See All Projects →
        </button>
      </section>

      {/* CTA - unchanged */}
      <section className="cta">
        <h2>Let's build something great</h2>
        <button className="btn-primary" onClick={() => navigate("contact")}>
          Get In Touch
        </button>
      </section>
    </div>
  );
}
