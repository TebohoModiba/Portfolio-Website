const { useState, useEffect, useRef } = React;

function App() {
  const [page, setPage] = useState("home");
  const [animating, setAnimating] = useState(false);
  const [displayPage, setDisplayPage] = useState("home");
  const timeoutRef = useRef(null);

  const navigate = (newPage) => {
    if (newPage === page || animating) return;

    // Trigger exit animation
    setAnimating(true);

    // After exit completes, swap page and trigger enter
    timeoutRef.current = setTimeout(() => {
      setDisplayPage(newPage);
      setPage(newPage);
      setAnimating(false);
    }, 220);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const renderPage = () => {
    switch (displayPage) {
      case "home":     return <Home navigate={navigate} />;
      case "about":    return <About />;
      case "projects": return <Projects />;
      case "contact":  return <Contact />;
      default:         return <Home navigate={navigate} />;
    }
  };

  return (
    <div id="root-inner">
      <Navbar page={page} navigate={navigate} />
      <main className="main-content">
        <div className={`page-wrapper ${animating ? "page-exit" : "page-enter"}`}>
          {renderPage()}
        </div>
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);