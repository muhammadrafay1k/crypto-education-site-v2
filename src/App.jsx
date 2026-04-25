import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
]

const learningTracks = [
  {
    title: 'Crypto Basics',
    text: 'Understand blockchain, wallets, and the practical difference between coins and tokens.',
  },
  {
    title: 'Trading Fundamentals',
    text: 'Learn spot markets, risk-reward planning, stop-loss usage, and beginner-friendly strategies.',
  },
  {
    title: 'Security First',
    text: 'Master scam prevention, seed phrase protection, and practical steps to secure your funds.',
  },
]

function Layout({ children }) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Crypto Education Platform</p>
          <h1>Crypto Academy</h1>
        </div>
        <nav>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>Copyright {new Date().getFullYear()} Crypto Academy. All rights reserved.</p>
        <div className="footer-links">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <p className="badge">Learn. Protect. Grow.</p>
        <h2>Start Your Crypto Journey with Clarity</h2>
        <p>
          We provide structured crypto education from beginner to advanced level so you can make informed decisions,
          not emotional ones.
        </p>
      </section>

      <section className="card-grid">
        {learningTracks.map((track) => (
          <article key={track.title} className="card">
            <h3>{track.title}</h3>
            <p>{track.text}</p>
          </article>
        ))}
      </section>

      <section className="info-banner">
        <strong>Important Note:</strong> All content is for educational purposes only and does not constitute financial advice. Always do your own research before investing.
      </section>
    </Layout>
  )
}

function AboutPage() {
  return (
    <Layout>
      <section className="page-block">
        <h2>About Us</h2>
        <p>
          Crypto Academy is built to make crypto learning practical, structured, and easy to understand. Our focus goes beyond theory and includes real-world use cases, risk management, and secure investing habits.
        </p>
        <p>
          Our team simplifies complex market concepts so beginners and intermediate learners can build confidence step by step.
        </p>
      </section>
    </Layout>
  )
}

function ContactPage() {
  return (
    <Layout>
      <section className="page-block">
        <h2>Contact Us</h2>
        <p>For training, support, or collaboration opportunities, contact us using the details below:</p>
        <ul>
          <li>Email: support@cryptoacademy.com</li>
          <li>Phone: +92-300-1234567</li>
          <li>Address: Business Bay, Karachi, Pakistan</li>
        </ul>
        <p>Response time: 24 to 48 business hours.</p>
      </section>
    </Layout>
  )
}

function PrivacyPage() {
  return (
    <Layout>
      <section className="page-block">
        <h2>Privacy Policy</h2>
        <p>Last updated: April 25, 2026</p>
        <p>
          We value your privacy. We may collect website usage analytics, contact form submissions, and essential cookies
          to improve our services and user experience.
        </p>
        <p>
          We do not sell your personal data. Data is used only for communication, security, and compliance purposes.
        </p>
        <p>
          You may request data access, correction, or deletion at any time by emailing support@cryptoacademy.com.
        </p>
      </section>
    </Layout>
  )
}

function TermsPage() {
  return (
    <Layout>
      <section className="page-block">
        <h2>Terms & Conditions</h2>
        <p>Last updated: April 25, 2026</p>
        <p>
          By using this website, you agree that all content is provided for educational purposes only. We are not liable
          for direct or indirect financial losses related to third-party platforms or investment decisions.
        </p>
        <p>
          You may not copy, redistribute, or commercially use website content without prior written permission.
        </p>
        <p>
          We may update these terms from time to time. The latest version will always be published on this page.
        </p>
      </section>
    </Layout>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
