import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { productCategories } from "../../constants/products";

const desktopLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Designs", path: "/designs" },
  { label: "Case Studies", path: "/case-studies" },
];

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const [showMobileProductsMenu, setShowMobileProductsMenu] = useState(false);
  const location = useLocation();
  const productsMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShowMobileMenu(false);
    setShowProductsMenu(false);
    setShowMobileProductsMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!productsMenuRef.current) {
        return;
      }

      if (!productsMenuRef.current.contains(event.target as Node)) {
        setShowProductsMenu(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const isProductsActive =
    location.pathname.startsWith("/products") || location.pathname.startsWith("/category/");

  const closeMobileMenu = () => setShowMobileMenu(false);

  return (
    <>
      <nav className="site-navbar">
        <Link to="/" className="site-navbar__brand" aria-label="Gitau Concrete Works home">
          <span className="site-navbar__badge">GCW</span>
          <span className="site-navbar__name">Gitau Concrete Works</span>
        </Link>

        <div className="site-navbar__desktop-links">
          <Link
            to="/"
            className={`site-navbar__link ${isActive("/") ? "site-navbar__link--active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`site-navbar__link ${isActive("/about") ? "site-navbar__link--active" : ""}`}
          >
            About Us
          </Link>

          <div
            ref={productsMenuRef}
            className="site-navbar__products"
            onMouseEnter={() => setShowProductsMenu(true)}
            onMouseLeave={() => setShowProductsMenu(false)}
          >
            <Link
              to="/products"
              className={`site-navbar__link ${isProductsActive ? "site-navbar__link--active" : ""}`}
              onClick={() => setShowProductsMenu(false)}
            >
              Products
            </Link>

            {showProductsMenu && (
              <div className="site-navbar__products-menu">
                <Link to="/products" className="site-navbar__products-item">
                  All Products
                </Link>
                {productCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.categoryKey}`}
                    className="site-navbar__products-item"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {desktopLinks.slice(2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`site-navbar__link ${isActive(item.path) ? "site-navbar__link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="site-navbar__actions">
          <Link to="/contact" className={`site-navbar__cta ${isActive("/contact") ? "site-navbar__cta--active" : ""}`}>
            Contact
          </Link>

          <button
            type="button"
            className="site-navbar__hamburger"
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMobileMenu}
            aria-controls="mobile-navigation-panel"
            onClick={() => setShowMobileMenu((prev) => !prev)}
          >
            {showMobileMenu ? "X" : "Menu"}
          </button>
        </div>
      </nav>

      {showMobileMenu && (
        <div id="mobile-navigation-panel" className="site-navbar__mobile-panel" role="dialog" aria-modal="false">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className={`site-navbar__mobile-link ${isActive("/") ? "site-navbar__mobile-link--active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className={`site-navbar__mobile-link ${isActive("/about") ? "site-navbar__mobile-link--active" : ""}`}
          >
            About Us
          </Link>
          <div
            className="site-navbar__mobile-submenu-wrap"
            onMouseEnter={() => setShowMobileProductsMenu(true)}
            onMouseLeave={() => setShowMobileProductsMenu(false)}
          >
            <button
              type="button"
              onClick={() => setShowMobileProductsMenu((prev) => !prev)}
              className={`site-navbar__mobile-link site-navbar__mobile-toggle ${(showMobileProductsMenu || isProductsActive) ? "site-navbar__mobile-link--active" : ""}`}
              aria-expanded={showMobileProductsMenu}
              aria-controls="mobile-products-submenu"
            >
              Products
            </button>
            <div
              id="mobile-products-submenu"
              className={`site-navbar__mobile-submenu ${showMobileProductsMenu ? "site-navbar__mobile-submenu--open" : ""}`}
            >
              <Link to="/products" onClick={closeMobileMenu} className="site-navbar__mobile-sublink">
                All Products
              </Link>
              {productCategories.map((category) => (
                <Link
                  key={category.id}
                  to={`/category/${category.categoryKey}`}
                  onClick={closeMobileMenu}
                  className="site-navbar__mobile-sublink"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {desktopLinks.slice(2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={`site-navbar__mobile-link ${isActive(item.path) ? "site-navbar__mobile-link--active" : ""}`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className={`site-navbar__mobile-link ${isActive("/contact") ? "site-navbar__mobile-link--active" : ""}`}
          >
            Contact
          </Link>
        </div>
      )}

      <style>{`
        .site-navbar {
          position: sticky;
          top: 0;
          z-index: 200;
          width: 100%;
          box-sizing: border-box;
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 1rem;
          padding: 0.75rem 1rem !important;
          background: var(--gradient-brand);
          border-bottom: 2px solid rgba(250, 204, 21, 0.25);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .site-navbar__brand {
          min-width: 0;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          text-decoration: none;
        }

        .site-navbar__badge {
          background: linear-gradient(
            135deg,
            var(--color-highlight) 0%,
            var(--color-action-primary) 100%
          );
          color: var(--gray-dark);
          font-weight: 800;
          font-size: 0.68rem;
          letter-spacing: 0.04em;
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          flex-shrink: 0;
        }

        .site-navbar__name {
          color: var(--text-light);
          font-size: clamp(0.92rem, 1.35vw, 1.08rem);
          font-weight: 700;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .site-navbar__desktop-links {
          display: none;
          align-items: center;
          gap: 1.1rem;
          margin: 0 0 0 auto;
          padding: 0 1rem;
          min-width: 0;
        }

        .site-navbar__link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 600;
          line-height: 1;
          padding: 0.4rem 0.1rem;
          border-bottom: 2px solid transparent;
        }

        .site-navbar__link:hover,
        .site-navbar__link--active {
          color: var(--color-highlight);
          border-bottom-color: var(--color-highlight);
        }

        .site-navbar__products {
          position: relative;
        }

        .site-navbar__products-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          min-width: 230px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
          overflow: hidden;
          z-index: 240;
        }

        .site-navbar__products-item {
          padding: 0.72rem 0.9rem;
          color: var(--color-text);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          border-bottom: 1px solid #f0f2f5;
        }

        .site-navbar__products-item:last-child {
          border-bottom: none;
        }

        .site-navbar__products-item:hover {
          background: var(--color-highlight-soft);
          color: var(--color-brand-strong);
        }

        .site-navbar__actions {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-left: auto;
        }

        .site-navbar__cta {
          display: none;
          background: var(--gradient-action);
          color: var(--text-light);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.88rem;
          border-radius: 999px;
          padding: 0.58rem 1.1rem;
          line-height: 1;
          box-shadow: 0 4px 12px rgba(249, 115, 22, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .site-navbar__cta:hover,
        .site-navbar__cta--active {
          color: var(--text-light);
          transform: translateY(-1px);
        }

        .site-navbar__hamburger {
          border: 1px solid rgba(250, 204, 21, 0.45);
          background: rgba(250, 204, 21, 0.12);
          color: var(--color-highlight);
          padding: 0.42rem 0.72rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 1.1;
          min-height: 38px;
        }

        .site-navbar__mobile-panel {
          position: fixed;
          top: 4.2rem;
          right: 0.75rem;
          width: 240px;
          min-width: 240px;
          max-width: 240px;
          height: auto;
          max-height: 360px;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          background: var(--gradient-brand);
          border: 1px solid rgba(250, 204, 21, 0.32);
          border-radius: 12px;
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
          z-index: 240;
          padding: 0.3rem;
        }

        .site-navbar__mobile-link {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.94);
          font-weight: 600;
          padding: 0.5rem 0.62rem;
          border-bottom: 1px solid rgba(250, 204, 21, 0.14);
          white-space: nowrap;
          border-radius: 8px;
        }

        .site-navbar__mobile-toggle {
          width: 100%;
          text-align: left;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .site-navbar__mobile-submenu-wrap {
          display: block;
        }

        .site-navbar__mobile-submenu {
          display: none;
          border-bottom: 1px solid rgba(250, 204, 21, 0.14);
          background: rgba(15, 23, 42, 0.32);
          border-radius: 8px;
          margin: 0.1rem 0;
        }

        .site-navbar__mobile-submenu-wrap:hover .site-navbar__mobile-submenu,
        .site-navbar__mobile-submenu-wrap:focus-within .site-navbar__mobile-submenu,
        .site-navbar__mobile-submenu--open {
          display: block;
        }

        .site-navbar__mobile-sublink {
          display: block;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.42rem 0.82rem;
          white-space: nowrap;
          border-radius: 6px;
        }

        .site-navbar__mobile-sublink:hover {
          color: var(--color-highlight);
          background: rgba(250, 204, 21, 0.1);
        }

        .site-navbar__mobile-link:hover,
        .site-navbar__mobile-link--active {
          color: var(--color-highlight);
          background: rgba(250, 204, 21, 0.1);
        }

        @media (max-width: 480px) {
          .site-navbar__brand {
            gap: 0.42rem;
            max-width: 76vw;
          }

          .site-navbar__badge {
            font-size: 0.6rem;
            width: 30px;
            height: 30px;
          }

          .site-navbar__name {
            display: inline;
            font-size: clamp(0.82rem, 3.1vw, 0.94rem);
            font-weight: 700;
            max-width: 58vw;
          }
        }

        @media (max-width: 360px) {
          .site-navbar__name {
            font-size: clamp(0.76rem, 3vw, 0.84rem);
            max-width: 54vw;
          }

          .site-navbar__mobile-panel {
            right: 0.5rem;
            width: 220px;
            min-width: 220px;
            max-width: 220px;
            max-height: 320px;
          }
        }

        @media (max-width: 767px) {
          .site-navbar {
            width: 100%;
            margin: 0;
            border-radius: 0;
            padding: 0.75rem 1rem !important;
          }

          .site-navbar__mobile-panel {
            width: 240px;
            min-width: 240px;
            max-width: 240px;
            max-height: 360px;
          }
        }

        @media (min-width: 768px) {
          .site-navbar {
            padding: 0.8rem 1.5rem !important;
            gap: 1.25rem;
          }

          .site-navbar__desktop-links {
            display: flex;
          }

          .site-navbar__name {
            font-size: clamp(0.98rem, 1.2vw, 1.15rem);
          }

          .site-navbar__cta {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .site-navbar__hamburger,
          .site-navbar__mobile-panel {
            display: none;
          }
        }

        @media (min-width: 1200px) {
          .site-navbar {
            padding: 0.9rem 2rem !important;
          }

          .site-navbar__desktop-links {
            gap: 1.55rem;
          }

          .site-navbar__name {
            font-size: 1.28rem;
          }
        }
      `}</style>
    </>
  );
};
