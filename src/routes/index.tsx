import { useState } from "react";
import { ArrowDown, ArrowRight, Instagram, Mail, Menu, Phone, ShieldCheck, X, Youtube } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import balconyImage from "@/assets/kts-balcony-net.jpg";
import installationImage from "@/assets/kts-installation.jpg";
import cricketImage from "@/assets/kts-cricket-net.jpg";

const phoneNumber = "7989625040";
const quoteLink = `mailto:ktsafetynets@gmail.com?subject=${encodeURIComponent("Safety net enquiry")}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KTS Safety Nets | A safer space, beautifully protected" },
      {
        name: "description",
        content:
          "Explore balcony, child, bird and sports safety net solutions from KTS Safety Nets. Call 7989625040 or email ktsafetynets@gmail.com.",
      },
      { property: "og:title", content: "KTS Safety Nets | A safer space, beautifully protected" },
      {
        property: "og:description",
        content: "Thoughtful safety net solutions for homes, balconies and sports spaces.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    number: "01",
    title: "Balcony safety nets",
    description: "An added layer of protection for balconies, windows and open spaces.",
    kind: "home",
  },
  {
    number: "02",
    title: "Children’s safety nets",
    description: "Help make high-rise living feel more at ease for the whole family.",
    kind: "family",
  },
  {
    number: "03",
    title: "Bird protection nets",
    description: "Keep balconies and building openings cleaner and bird-free.",
    kind: "bird",
  },
  {
    number: "04",
    title: "Cricket practice nets",
    description: "Enclosed netting for focused practice at home, school or club.",
    kind: "sport",
  },
  {
    number: "05",
    title: "Duct area nets",
    description: "Cover open shafts and ducts while keeping air moving through.",
    kind: "building",
  },
  {
    number: "06",
    title: "Invisible grills",
    description: "A subtle, open-feeling option for added window and balcony safety.",
    kind: "lines",
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <div className="topline">
        <span>Protection for the spaces you love</span>
        <a href={`tel:${phoneNumber}`} aria-label={`Call KTS Safety Nets at ${phoneNumber}`}>
          <Phone aria-hidden="true" />
          <span>{phoneNumber}</span>
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="KTS Safety Nets home">
          <span className="brand-mark">KTS</span>
          <span className="brand-name">SAFETY NETS<span>SECURE LIVING, OPEN VIEWS</span></span>
        </a>
        <Button
          variant="outline"
          size="icon"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Our services</a>
          <a href="#approach" onClick={closeMenu}>Our approach</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <Button asChild className="header-cta">
            <a href={quoteLink} onClick={closeMenu}>Request a quote <ArrowRight aria-hidden="true" /></a>
          </Button>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={balconyImage} alt="A bright apartment balcony protected by a fine safety net" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> KTS SAFETY NETS · EVERYDAY PEACE OF MIND</p>
          <h1 id="hero-title">A safer space.<br />Room to <span>breathe.</span></h1>
          <p className="hero-copy">Thoughtful safety net solutions for balconies, homes and sports spaces—designed to protect without closing in your view.</p>
          <div className="hero-actions">
            <Button asChild size="lg" className="action-button">
              <a href={`tel:${phoneNumber}`}><Phone aria-hidden="true" /> Call {phoneNumber}</a>
            </Button>
            <a className="text-link" href="#services">Explore our services <ArrowDown aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-caption"><span>SAFETY THAT FITS YOUR SPACE</span><span>01 / 03</span></div>
      </section>

      <section className="intro-band" aria-label="Our promise">
        <div className="intro-label"><ShieldCheck aria-hidden="true" /><span>MADE FOR EVERYDAY LIVING</span></div>
        <p>Protection that feels considered.<br /><span>Installation that feels effortless.</span></p>
        <a href="#approach" className="round-arrow" aria-label="Discover our approach"><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="services-section section-wrap" id="services" aria-labelledby="services-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-dark">PROTECTION, THOUGHTFULLY DONE</p>
            <h2 id="services-title">Safety for the<br /><span>way you live.</span></h2>
          </div>
          <p className="section-description">From the balcony at home to the practice ground, find the right netting for your space and the people in it.</p>
        </div>

        <div className="service-layout">
          <article className="feature-service">
            <img src={installationImage} alt="A trained installer carefully fitting balcony safety netting" width={1024} height={1024} loading="lazy" />
            <div className="feature-caption">
              <span className="feature-kicker">THE RIGHT FIT, THE RIGHT FINISH</span>
              <h3>Every space has its own solution.</h3>
              <a href={`tel:${phoneNumber}`} aria-label="Call us to discuss your space"><ArrowRight aria-hidden="true" /></a>
            </div>
          </article>

          <div className="service-list">
            {services.map((service) => (
              <a className="service-row" href={quoteLink} key={service.number} aria-label={`Enquire about ${service.title}`}>
                <span className="service-number">{service.number}</span>
                <span className="service-text"><strong>{service.title}</strong><span>{service.description}</span></span>
                <span className={`service-symbol service-symbol-${service.kind}`} aria-hidden="true"><ArrowRight /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section" id="approach" aria-labelledby="approach-title">
        <div className="approach-copy">
          <p className="eyebrow">BUILT AROUND YOUR SPACE</p>
          <h2 id="approach-title">Good protection<br />should feel <span>natural.</span></h2>
          <p>We help you find a practical netting solution for your home or sports space, with an installation planned around the way you use it.</p>
          <Button asChild variant="outline" className="approach-cta">
            <a href={quoteLink}>Talk through your needs <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="approach-image-wrap">
          <img src={cricketImage} alt="Cricket practice area enclosed with protective sports netting" width={1024} height={1024} loading="lazy" />
          <span className="image-note">MADE FOR HOME, BUILDING & SPORT</span>
        </div>
        <span className="approach-index">KTS / 02</span>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <div>
            <p className="eyebrow">LET’S MAKE YOUR SPACE SAFER</p>
            <h2 id="contact-title">A quick conversation<br />can change <span>everything.</span></h2>
          </div>
          <div className="contact-actions">
            <Button asChild size="lg" className="contact-call">
              <a href={`tel:${phoneNumber}`}><Phone aria-hidden="true" /> {phoneNumber}</a>
            </Button>
            <a className="contact-email" href="mailto:ktsafetynets@gmail.com"><Mail aria-hidden="true" /> ktsafetynets@gmail.com</a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top" aria-label="KTS Safety Nets, back to top">
          <span className="brand-mark">KTS</span>
          <span className="brand-name">SAFETY NETS<span>SECURE LIVING, OPEN VIEWS</span></span>
        </a>
        <p>Protection for the spaces you love.</p>
        <div className="social-links" aria-label="Social media">
          <a href="https://www.instagram.com/kt_safetynets/" target="_blank" rel="noreferrer" aria-label="Instagram: kt_safetynets"><Instagram aria-hidden="true" /></a>
          <a href="https://www.facebook.com/ktsafetynets" target="_blank" rel="noreferrer" aria-label="Facebook: ktsafetynets"><span className="facebook-mark" aria-hidden="true">f</span></a>
          <a href="https://www.youtube.com/@narendrabond85" target="_blank" rel="noreferrer" aria-label="YouTube: narendrabond85"><Youtube aria-hidden="true" /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} KTS Safety Nets</span>
      </footer>
    </main>
  );
}