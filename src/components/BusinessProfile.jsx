import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  Headphones,
  Boxes,
  Wrench,
  Cog,
  Disc3,
  BatteryCharging,
  Settings2,
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  PackageSearch,
  Building2,
  Gauge,
  Send,
  Globe,
} from "lucide-react";

import "./BusinessProfile.css";

// =====================================================
// BUSINESS CONFIGURATION
// Edit this object to personalize the entire website.
// =====================================================

const profile = {
  name: "[MUCH ENTERPRISE]",
  shortName: "M S A",
  tagline: "Parts you trust. Performance you depend on.",
  location: "Nairobi, Kenya",
  address: "Imara Daima, Nairobi, Kenya",
  phone: "+254 724 995254",
  phoneDisplay: "+254 724 995254",
  email: "mchisira@gmail.com",
  whatsapp: "254 724 995254",

  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:00 AM – 4:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],

  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "5,000+", label: "Parts available" },
    { value: "100%", label: "Customer commitment" },
  ],

  trustBadges: [
    {
      icon: ShieldCheck,
      title: "Quality Assured",
      description: "Quality-tested parts from trusted suppliers.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Convenient delivery arrangements for your orders.",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description: "Get help finding the right part for your vehicle.",
    },
    {
      icon: Boxes,
      title: "Bulk Orders",
      description: "Solutions for garages, workshops, and fleet operators.",
    },
  ],

  categories: [
    {
      id: "engine",
      name: "Engine Parts",
      description: "Pistons, filters, gaskets, belts, and engine components.",
      icon: Cog,
      number: "01",
      color: "blue",
      keywords: "engine piston filter gasket belt",
    },
    {
      id: "brakes",
      name: "Braking Systems",
      description: "Brake pads, discs, shoes, cylinders, and accessories.",
      icon: Disc3,
      number: "02",
      color: "orange",
      keywords: "brakes brake pads discs shoes cylinders",
    },
    {
      id: "suspension",
      name: "Suspension & Steering",
      description:
        "Shock absorbers, ball joints, bearings, and steering parts.",
      icon: Settings2,
      number: "03",
      color: "slate",
      keywords: "suspension steering shock absorbers joints bearings",
    },
    {
      id: "electrical",
      name: "Electrical & Batteries",
      description:
        "Batteries, alternators, starters, and electrical components.",
      icon: BatteryCharging,
      number: "04",
      color: "blue",
      keywords: "electrical battery batteries alternator starter",
    },
    {
      id: "transmission",
      name: "Transmission Parts",
      description:
        "Clutch kits, gears, drive shafts, and transmission components.",
      icon: Wrench,
      number: "05",
      color: "orange",
      keywords: "transmission clutch gears drive shaft",
    },
    {
      id: "accessories",
      name: "Accessories & Tools",
      description:
        "Workshop essentials, vehicle accessories, and maintenance tools.",
      icon: Gauge,
      number: "06",
      color: "slate",
      keywords: "accessories tools workshop maintenance",
    },
  ],

  brands: ["TOYOTA", "ISUZU", "BOSCH", "CATERPILLAR", "MANN-FILTER", "DENSO"],

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
};

// =====================================================
// SMALL REUSABLE COMPONENTS
// =====================================================

function SectionLabel({ children }) {
  return (
    <div className="bp-section-label">
      <span className="bp-label-line" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="bp-section-heading">
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}

      <h2>
        {title} <span>{highlight}</span>
      </h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function WhatsAppLink({ children, className = "" }) {
  const message = encodeURIComponent(
    `Hello ${profile.name}, I would like to inquire about your spare parts.`,
  );

  return (
    <a
      className={className}
      href={`https://wa.me/${profile.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      {children}
    </a>
  );
}

// =====================================================
// MAIN BUSINESS PROFILE
// =====================================================

export default function BusinessProfile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const closeMenu = () => setMenuOpen(false);

  // Filter categories as the user types.
  const filteredCategories = profile.categories.filter((category) => {
    const matchesSearch = [
      category.name,
      category.description,
      category.keywords,
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase());

    const matchesTab =
      activeCategory === "all" || category.id === activeCategory;

    return matchesSearch && matchesTab;
  });

  // Prepare an inquiry that the customer can send through their email app.
  const handleContactSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Spare Parts Inquiry from ${formData.name}`,
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const updateForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Categories", href: "#categories" },
    { label: "About Us", href: "#about" },
    { label: "Our Brands", href: "#brands" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="bp-page">
      {/* =================================================
          HEADER / NAVIGATION
      ================================================== */}

      <header className="bp-header">
        <div className="bp-container bp-header-inner">
          <a
            href="#home"
            className="bp-brand"
            aria-label={`${profile.name} home`}
            onClick={closeMenu}
          >
            <span className="bp-brand-icon">
              <Cog size={29} strokeWidth={2.2} />
              <span className="bp-brand-dot" />
            </span>

            <span className="bp-brand-text">
              <strong>{profile.name}</strong>
              <small>SPARE PARTS & ENGINEERING</small>
            </span>
          </a>

          <button
            className="bp-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            type="button"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav
            className={`bp-navigation ${menuOpen ? "bp-nav-open" : ""}`}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="bp-nav-cta"
              onClick={closeMenu}
            >
              <Phone size={16} />
              Talk to Sales
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* =================================================
            HERO SECTION
        ================================================== */}

        <section className="bp-hero" id="home">
          <div className="bp-hero-grid" />

          <div className="bp-container bp-hero-layout">
            <div className="bp-hero-content">
              <div className="bp-hero-eyebrow">
                <span className="bp-pulse-dot" />
                YOUR TRUSTED SPARE PARTS PARTNER
              </div>

              <h1>
                Built for the road.
                <br />
                <span>Ready for</span>
                <br />
                every challenge.
              </h1>

              <p className="bp-hero-description">
                From everyday vehicle maintenance to demanding industrial
                applications, find the parts you need to keep your operations
                moving.
              </p>

              <div className="bp-hero-tags">
                <span>OEM Parts</span>
                <span>Aftermarket Parts</span>
                <span>Industrial Solutions</span>
              </div>

              {/* Search filters the featured category grid. */}
              <form
                className="bp-search-box"
                onSubmit={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("categories")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                role="search"
              >
                <Search size={22} />

                <input
                  type="search"
                  placeholder="Search engine parts, brakes, batteries..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  aria-label="Search spare parts categories"
                />

                <button type="submit" aria-label="Search categories">
                  <Search size={19} />
                  <span>Search</span>
                </button>
              </form>

              <div className="bp-hero-actions">
                <a href="#categories" className="bp-btn bp-btn-primary">
                  Browse Categories
                  <ArrowRight size={19} />
                </a>

                <a href="#contact" className="bp-btn bp-btn-outline">
                  Contact Sales
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="bp-hero-proof">
                <div className="bp-proof-icon">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <strong>Quality you can count on</strong>
                  <span>Parts, expertise, and service you can trust.</span>
                </div>
              </div>
            </div>

            {/* Decorative industrial visual; no image dependency. */}
            <div className="bp-hero-visual" aria-hidden="true">
              <div className="bp-visual-frame">
                <div className="bp-visual-topline">
                  <span>ENGINEERING</span>
                  <span>01 / 06</span>
                </div>

                <div className="bp-gear-stage">
                  <div className="bp-gear-orbit bp-orbit-one" />
                  <div className="bp-gear-orbit bp-orbit-two" />

                  <div className="bp-gear-main">
                    <Cog size={220} strokeWidth={0.9} />
                    <div className="bp-gear-inner">
                      <Wrench size={66} strokeWidth={1.2} />
                    </div>
                  </div>

                  <span className="bp-visual-cross bp-cross-one">+</span>
                  <span className="bp-visual-cross bp-cross-two">+</span>
                </div>

                <div className="bp-visual-bottom">
                  <div>
                    <span className="bp-visual-index">01 — QUALITY</span>
                    <strong>Precision in every part.</strong>
                  </div>

                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="bp-floating-card bp-floating-top">
                <span className="bp-floating-icon">
                  <CheckCircle2 size={22} />
                </span>

                <div>
                  <strong>Quality First</strong>
                  <span>Reliable components</span>
                </div>
              </div>

              <div className="bp-floating-card bp-floating-bottom">
                <span className="bp-floating-icon bp-floating-orange">
                  <Truck size={22} />
                </span>

                <div>
                  <strong>Ready to Supply</strong>
                  <span>Retail & bulk inquiries</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bp-container bp-hero-footer">
            <span>ENGINEERED FOR PERFORMANCE</span>
            <span className="bp-footer-line" />
            <span>{profile.location.toUpperCase()}</span>
          </div>
        </section>

        {/* =================================================
            TRUST BADGES
        ================================================== */}

        <section className="bp-trust-section">
          <div className="bp-container">
            <div className="bp-trust-grid">
              {profile.trustBadges.map((badge, index) => {
                const Icon = badge.icon;

                return (
                  <article className="bp-trust-card" key={badge.title}>
                    <div className="bp-trust-icon">
                      <Icon size={25} strokeWidth={1.8} />
                    </div>

                    <div>
                      <span className="bp-trust-number">0{index + 1}</span>

                      <h3>{badge.title}</h3>
                      <p>{badge.description}</p>
                    </div>

                    <ChevronRight className="bp-trust-arrow" size={19} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =================================================
            CATEGORIES
        ================================================== */}

        <section className="bp-section bp-categories" id="categories">
          <div className="bp-container">
            <div className="bp-category-heading">
              <SectionHeading
                eyebrow="WHAT WE SUPPLY"
                title="Parts for every"
                highlight="purpose."
                description="Explore our core product categories. Contact our sales team to confirm availability and compatibility."
              />

              <a href="#contact" className="bp-text-link">
                Request a parts quote
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div
              className="bp-category-tabs"
              role="group"
              aria-label="Filter categories"
            >
              <button
                type="button"
                className={activeCategory === "all" ? "active" : ""}
                onClick={() => setActiveCategory("all")}
              >
                All Categories
              </button>

              {profile.categories.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  className={activeCategory === category.id ? "active" : ""}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="bp-category-grid">
              {filteredCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <article
                    className={`bp-category-card bp-${category.color}`}
                    key={category.id}
                  >
                    <div className="bp-category-card-top">
                      <span className="bp-category-number">
                        {category.number}
                      </span>

                      <span className="bp-category-icon">
                        <Icon size={34} strokeWidth={1.4} />
                      </span>

                      <span className="bp-category-corner">
                        <ArrowUpRight size={21} />
                      </span>
                    </div>

                    <div className="bp-category-card-content">
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>

                      <WhatsAppLink className="bp-category-link">
                        Enquire now
                        <ArrowRight size={16} />
                      </WhatsAppLink>
                    </div>
                  </article>
                );
              })}
            </div>

            {filteredCategories.length === 0 && (
              <div className="bp-no-results">
                <PackageSearch size={40} />
                <h3>No matching categories found</h3>
                <p>
                  Try another search term or contact our sales team for
                  assistance finding your part.
                </p>

                <button
                  className="bp-btn bp-btn-primary"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  type="button"
                >
                  Clear filters
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            <div className="bp-category-bottom">
              <span>
                <Boxes size={19} />
                Looking for a specific part number?
              </span>

              <WhatsAppLink className="bp-text-link">
                Ask our team
                <ArrowRight size={18} />
              </WhatsAppLink>
            </div>
          </div>
        </section>

        {/* =================================================
            ABOUT / WHY CHOOSE US
        ================================================== */}

        <section className="bp-section bp-about" id="about">
          <div className="bp-container bp-about-layout">
            <div className="bp-about-visual">
              <div className="bp-about-image-placeholder">
                <div className="bp-about-image-grid" />

                <div className="bp-about-image-content">
                  <Cog size={115} strokeWidth={0.8} />

                  <span>DEPENDABLE BY DESIGN</span>
                  <strong>Powering the work that moves you.</strong>
                </div>

                <div className="bp-about-stamp">
                  <ShieldCheck size={25} />
                  <span>
                    BUILT ON
                    <br />
                    TRUST
                  </span>
                </div>
              </div>

              <div className="bp-about-caption">
                <span>01 / OUR COMMITMENT</span>
                <span>QUALITY. SERVICE. RELIABILITY.</span>
              </div>
            </div>

            <div className="bp-about-content">
              <SectionLabel>WHO WE ARE</SectionLabel>

              <h2>
                The right parts.
                <br />
                The right people.
                <br />
                <span>Every time.</span>
              </h2>

              <p className="bp-about-lead">
                Your business deserves a spare parts partner who understands
                what is at stake when a vehicle or machine stops working.
              </p>

              <p className="bp-about-description">
                {profile.name} supplies automotive and industrial spare parts
                with a focus on quality, dependable service, and helping
                customers identify the components they need. Whether you
                maintain a personal vehicle, manage a fleet, or operate a
                workshop, our goal is to make sourcing parts simpler.
              </p>

              <div className="bp-stats-grid">
                {profile.stats.map((stat) => (
                  <div className="bp-stat" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="bp-about-features">
                <div>
                  <CheckCircle2 size={19} />
                  Quality-conscious sourcing
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  Assistance with part identification
                </div>

                <div>
                  <CheckCircle2 size={19} />
                  Support for retail and trade customers
                </div>
              </div>

              <a href="#contact" className="bp-btn bp-btn-primary">
                Get to Know Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* =================================================
            BRANDS / COMPATIBILITY
        ================================================== */}

        <section className="bp-brands-section" id="brands">
          <div className="bp-container">
            <div className="bp-brands-heading">
              <SectionLabel>BRANDS & COMPATIBILITY</SectionLabel>

              <h2>
                Parts for the names
                <br />
                <span>you know.</span>
              </h2>

              <p>
                Tell us your vehicle make, model, year, and part number so we
                can help you identify a suitable component.
              </p>
            </div>

            <div className="bp-brands-grid">
              {profile.brands.map((brand, index) => (
                <div className="bp-brand-card" key={brand}>
                  <span className="bp-brand-card-index">0{index + 1}</span>

                  <Building2 size={23} strokeWidth={1.4} />

                  <strong>{brand}</strong>
                </div>
              ))}
            </div>

            <div className="bp-compatibility-note">
              <div className="bp-compatibility-icon">
                <Settings2 size={23} />
              </div>

              <div>
                <strong>Not sure which part fits?</strong>
                <p>
                  Share your vehicle details or equipment model with our team
                  before ordering.
                </p>
              </div>

              <WhatsAppLink className="bp-btn bp-btn-dark">
                Check Compatibility
                <ArrowRight size={18} />
              </WhatsAppLink>
            </div>

            <p className="bp-brand-disclaimer">
              Brand names are shown for compatibility inquiries and
              identification purposes. Confirm actual stock, product
              availability, and brand authorization directly with the business.
            </p>
          </div>
        </section>

        {/* =================================================
            CONTACT / LOCATION
        ================================================== */}

        <section className="bp-section bp-contact-section" id="contact">
          <div className="bp-container">
            <div className="bp-contact-heading">
              <SectionHeading
                eyebrow="LET'S GET YOU MOVING"
                title="Have a part in"
                highlight="mind?"
                description="Tell us what you need. Our team can help you make an inquiry about availability, compatibility, or bulk supply."
              />
            </div>

            <div className="bp-contact-layout">
              {/* Contact information */}
              <div className="bp-contact-info">
                <div className="bp-contact-info-header">
                  <span className="bp-contact-kicker">CONTACT INFORMATION</span>

                  <h3>Talk to our team.</h3>

                  <p>
                    Get in touch for parts inquiries, quotations, and business
                    supply arrangements.
                  </p>
                </div>

                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="bp-contact-item"
                >
                  <span className="bp-contact-icon">
                    <Phone size={21} />
                  </span>

                  <span>
                    <small>CALL OUR TEAM</small>
                    <strong>{profile.phoneDisplay}</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>

                <a href={`mailto:${profile.email}`} className="bp-contact-item">
                  <span className="bp-contact-icon">
                    <Mail size={21} />
                  </span>

                  <span>
                    <small>EMAIL US</small>
                    <strong>{profile.email}</strong>
                  </span>

                  <ArrowUpRight size={18} />
                </a>

                <div className="bp-contact-item">
                  <span className="bp-contact-icon">
                    <MapPin size={21} />
                  </span>

                  <span>
                    <small>VISIT OUR BUSINESS</small>
                    <strong>{profile.address}</strong>
                  </span>
                </div>

                <div className="bp-hours">
                  <div className="bp-hours-heading">
                    <Clock size={20} />
                    <strong>Business Hours</strong>
                  </div>

                  {profile.hours.map((item) => (
                    <div className="bp-hours-row" key={item.days}>
                      <span>{item.days}</span>
                      <strong>{item.time}</strong>
                    </div>
                  ))}
                </div>

                <WhatsAppLink className="bp-whatsapp-button">
                  <MessageCircle size={20} />
                  Chat with us on WhatsApp
                  <ArrowUpRight size={19} />
                </WhatsAppLink>
              </div>

              {/* Inquiry form */}
              <div className="bp-contact-form-wrap">
                <div className="bp-form-heading">
                  <span className="bp-form-icon">
                    <Send size={21} />
                  </span>

                  <div>
                    <h3>Send an inquiry</h3>
                    <p>Complete the form and prepare your message.</p>
                  </div>
                </div>

                <form
                  className="bp-contact-form"
                  onSubmit={handleContactSubmit}
                >
                  <div className="bp-form-row">
                    <label>
                      Your Name <span>*</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={updateForm}
                        required
                      />
                    </label>

                    <label>
                      Phone Number <span>*</span>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+254 7XX XXX XXX"
                        value={formData.phone}
                        onChange={updateForm}
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Email Address <span>*</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={updateForm}
                      required
                    />
                  </label>

                  <label>
                    What do you need? <span>*</span>
                    <textarea
                      name="message"
                      placeholder="Describe the part, part number, vehicle make/model, or quantity you need..."
                      rows={5}
                      value={formData.message}
                      onChange={updateForm}
                      required
                    />
                  </label>

                  <button
                    type="submit"
                    className="bp-btn bp-btn-primary bp-submit-button"
                  >
                    Prepare Inquiry
                    <ArrowRight size={19} />
                  </button>

                  <p className="bp-form-note">
                    <ShieldCheck size={16} />
                    Your message will be prepared in your default email app.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            FINAL CTA
        ================================================== */}

        <section className="bp-final-cta">
          <div className="bp-container bp-final-cta-inner">
            <div className="bp-final-cta-icon">
              <Wrench size={34} />
            </div>

            <div>
              <span>FOR GARAGES, FLEETS & BUSINESSES</span>

              <h2>
                Need parts in bulk?
                <br />
                <strong>Let's talk business.</strong>
              </h2>

              <p>
                Contact us to discuss your requirements and request a quotation
                for your next order.
              </p>
            </div>

            <WhatsAppLink className="bp-btn bp-btn-light">
              Contact Sales
              <ArrowUpRight size={19} />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      {/* =================================================
          FOOTER
      ================================================== */}

      <footer className="bp-footer">
        <div className="bp-container">
          <div className="bp-footer-main">
            <div className="bp-footer-brand">
              <a href="#home" className="bp-brand">
                <span className="bp-brand-icon">
                  <Cog size={29} />
                  <span className="bp-brand-dot" />
                </span>

                <span className="bp-brand-text">
                  <strong>{profile.name}</strong>
                  <small>SPARE PARTS & ENGINEERING</small>
                </span>
              </a>

              <p>
                Your partner for automotive and industrial spare parts,
                dependable service, and practical sourcing solutions.
              </p>

              <div className="bp-footer-location">
                <MapPin size={16} />
                {profile.location}
              </div>
            </div>

            <div className="bp-footer-column">
              <h3>Explore</h3>

              <a href="#home">Home</a>
              <a href="#categories">Product Categories</a>
              <a href="#about">About Us</a>
              <a href="#brands">Brands & Compatibility</a>
            </div>

            <div className="bp-footer-column">
              <h3>Customer Support</h3>

              <a href="#contact">Contact Us</a>
              <a href="#contact">Request a Quote</a>
              <a href="#contact">Business Hours</a>

              <WhatsAppLink>WhatsApp Support</WhatsAppLink>
            </div>

            <div className="bp-footer-column bp-footer-contact">
              <h3>Get in Touch</h3>

              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Phone size={16} />
                {profile.phoneDisplay}
              </a>

              <a href={`mailto:${profile.email}`}>
                <Mail size={16} />
                {profile.email}
              </a>

              <div className="bp-social-links">
                {profile.social.facebook && (
                  <a
                    href={profile.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    FB
                  </a>
                )}

                {profile.social.instagram && (
                  <a
                    href={profile.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    IG
                  </a>
                )}

                {profile.social.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    IN
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="bp-footer-bottom">
            <span>
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </span>

            <span className="bp-footer-tagline">
              <Globe size={15} />
              Parts you trust. Performance you depend on.
            </span>

            <a href="#home">
              Back to top <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
