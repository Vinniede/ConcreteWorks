import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <section className="site-footer__block site-footer__brand">
          <h3>Gitau Concrete Works</h3>
          <p>
            Quality paving solutions across Kenya. Building foundations and
            creating futures.
          </p>
        </section>

        <section className="site-footer__block site-footer__contact">
          <h4>Contact</h4>
          <p>Nairobi, Kenya</p>
          <p>+254 (0) XXX XXX XXX</p>
          <p>info@cabroworks.co.ke</p>
        </section>

        <section className="site-footer__block site-footer__social">
          <h4>Follow Us</h4>
          <div className="site-footer__social-links">
            <Link to="/contact" aria-label="Facebook">f</Link>
            <Link to="/contact" aria-label="Instagram">ig</Link>
            <a href="https://wa.me/254722000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">wa</a>
          </div>
        </section>
      </div>

      <div className="site-footer__bottom">
        <p>© 2024 Gitau Concrete Works. All rights reserved.</p>
      </div>

      <style>{`
        .site-footer {
          background: var(--gradient-brand);
          color: var(--text-light);
          padding: 1rem 1rem 0.65rem;
          border-top: 2px solid rgba(250, 204, 21, 0.24);
        }

        .site-footer__content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.3fr 1fr 0.8fr;
          gap: 1rem;
          align-items: start;
          margin-bottom: 0.8rem;
        }

        .site-footer__block h3,
        .site-footer__block h4 {
          margin: 0 0 0.4rem;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        .site-footer__block p {
          margin: 0 0 0.25rem;
          font-size: 0.76rem;
          opacity: 0.92;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.92);
        }

        .site-footer__social-links {
          display: flex;
          gap: 0.4rem;
        }

        .site-footer__social-links a {
          width: 30px;
          height: 30px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(250, 204, 21, 0.2);
          color: var(--text-light);
          font-size: 0.72rem;
          font-weight: 700;
          text-decoration: none;
        }

        .site-footer__social-links a:hover {
          background: rgba(249, 115, 22, 0.88);
          color: var(--text-light);
        }

        .site-footer__bottom {
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 0.55rem;
          text-align: center;
        }

        .site-footer__bottom p {
          margin: 0;
          font-size: 0.72rem;
          opacity: 0.85;
        }

        @media (max-width: 1023px) {
          .site-footer {
            padding: 0.9rem 0.9rem 0.6rem;
          }

          .site-footer__content {
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem 1rem;
          }

          .site-footer__social {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .site-footer {
            padding: 0.75rem 0.7rem 0.5rem;
          }

          .site-footer__content {
            grid-template-columns: 1fr;
            gap: 0.55rem;
            margin-bottom: 0.55rem;
          }

          .site-footer__block h3,
          .site-footer__block h4 {
            font-size: 0.82rem;
            margin-bottom: 0.25rem;
          }

          .site-footer__block p {
            font-size: 0.7rem;
            line-height: 1.25;
            margin-bottom: 0.15rem;
          }

          .site-footer__social-links a {
            width: 26px;
            height: 26px;
            font-size: 0.66rem;
          }

          .site-footer__bottom {
            padding-top: 0.45rem;
          }

          .site-footer__bottom p {
            font-size: 0.66rem;
          }
        }
      `}</style>
    </footer>
  );
};
