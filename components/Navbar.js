function Navbar({ page, navigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("system");

  const applyTheme = (newTheme) => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.remove("dark", "light");
    body.classList.remove("dark", "light");

    if (newTheme === "dark") {
      html.classList.add("dark");
      body.classList.add("dark");
    } else if (newTheme === "light") {
      html.classList.add("light");
      body.classList.add("light");
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) {
        html.classList.add("dark");
        body.classList.add("dark");
      } else {
        html.classList.add("light");
        body.classList.add("light");
      }
    }
    body.style.background = "var(--bg-gradient)";
    localStorage.setItem("theme", newTheme);
  };

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") applyTheme("system");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    let newTheme;
    if (theme === "system") newTheme = "dark";
    else if (theme === "dark") newTheme = "light";
    else newTheme = "system";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const links = ["home", "about", "projects", "contact"];
  const handleNav = (link) => {
    navigate(link);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <button className="navbar-logo" onClick={() => handleNav("home")}>
        Teboho
      </button>
      <nav className="navbar-links">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => handleNav(link)}
            className={`navbar-link ${page === link ? "active" : ""}`}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </nav>
      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          {theme === "dark" ? "☀️" : theme === "light" ? "🌙" : "🌗"}
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
          <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-menu">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className={`mobile-link ${page === link ? "active" : ""}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
