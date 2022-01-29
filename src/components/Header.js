import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setIsMobile(true);
      setIsNavOpen(false);
    } else {
      setIsMobile(false);
      setIsNavOpen(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true);
        setIsNavOpen(false);
      } else {
        setIsMobile(false);
        setIsNavOpen(true);
      }
    });
  }, []);

  return (
    <div
      className="header"
      style={isMobile && isNavOpen ? { backgroundColor: "#000000" } : null}
    >
      <div className="header__wrapper">
        <a href="#home" className="header__wrapper__logo">
          white walker inu
        </a>
        <button
          className="header__wrapper__menu"
          onClick={() => {
            isNavOpen ? setIsNavOpen(false) : setIsNavOpen(true);
          }}
        >
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        {isNavOpen ? (
          <div className="header__wrapper__nav">
            <a href="#about" className="header__wrapper__nav__link">
              About
            </a>
            <a href="#longnignt" className="header__wrapper__nav__link">
              Long Night
            </a>
            <a href="#tokenomics" className="header__wrapper__nav__link">
              Tokenomics
            </a>
            <a href="#roadmap" className="header__wrapper__nav__link">
              Roadmap
            </a>
            <a href="#howtobuy" className="header__wrapper__nav__link">
              How to buy
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
