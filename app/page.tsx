export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <h1>Phoenix Web Upgrades</h1>
        <p className="tagline">Modern Website Solutions for Local Businesses</p>
      </header>

      <section className="services">
        <h2>Transform Your Business Online</h2>
        <p>
          Is your website holding your Phoenix business back? We specialize in upgrading 
          outdated websites with modern design, improved performance, and features that 
          convert visitors into customers.
        </p>

        <div className="service-grid">
          <div className="service-card">
            <h3>🚀 Performance Upgrades</h3>
            <p>Speed up your site and improve search rankings with modern optimization techniques.</p>
          </div>
          
          <div className="service-card">
            <h3>📱 Mobile-First Design</h3>
            <p>Ensure your website looks perfect on all devices with responsive design.</p>
          </div>
          
          <div className="service-card">
            <h3>🎯 Conversion Optimization</h3>
            <p>Turn more visitors into customers with strategic design and user experience improvements.</p>
          </div>

          <div className="service-card">
            <h3>🔍 SEO Enhancement</h3>
            <p>Get found by more Phoenix customers with improved search engine optimization.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Upgrade Your Website?</h2>
        <p>
          Join dozens of Phoenix businesses that have transformed their online presence. 
          Get a free consultation and see how we can help your business grow.
        </p>
        <div className="contact-info">
          <p>📧 Email: hello@phoenixwebupgrades.com</p>
          <p>📞 Phone: (602) 555-0123</p>
          <p>📍 Serving all of Phoenix, AZ and surrounding areas</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Phoenix Web Upgrades. Helping local businesses succeed online.</p>
      </footer>
    </main>
  )
}