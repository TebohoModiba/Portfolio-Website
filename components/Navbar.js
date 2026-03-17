function Navbar({ page, navigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
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

      {/* Desktop links */}
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

      {/* Hamburger button (mobile only) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
        <span className={`ham-line ${menuOpen ? "open" : ""}`}></span>
      </button>

      {/* Mobile dropdown */}
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