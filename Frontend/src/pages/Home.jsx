import { Link } from "react-router-dom";
import { ArrowRight, Check, Quote, Star } from "lucide-react";

import "../App.css";

import heroImage from "../assets/hero-living-room.png";
import introChair from "../assets/intro-armchair.png";
import introMaterials from "../assets/intro-materials.png";
import introKitchen from "../assets/intro-kitchen.jpg";
import serviceResidential from "../assets/service-residential.png";
import serviceCommercial from "../assets/service-commercial.png";
import servicePlanning from "../assets/service-planning.png";
import projectTribeca from "../assets/project-tribeca.png";
import projectOffice from "../assets/project-workspace.png";
import projectCoastal from "../assets/project-coastal.png";
import beforeAfter from "../assets/why-before-after.png";
import ctaDesk from "../assets/cta-desk.png";
import avatarSarah from "../assets/avatar-sarah.png";
import avatarJames from "../assets/avatar-james.png";
import avatarPriya from "../assets/avatar-priya.png";

const services = [
  {
    image: serviceResidential,
    title: "Residential Interior Design",
    text: "Homes planned around how you actually live, from the first layout to the last accessory.",
    items: ["Kitchen Design", "Space Planning", "Living & Bedroom Suites", "Custom Styling"],
  },
  {
    image: serviceCommercial,
    title: "Commercial Interior Design",
    text: "Workplaces and hospitality interiors that feel considered, functional, and on-brand.",
    items: ["Office Interiors", "Reception & Lounge", "Brand-Led Fit-Outs", "Furniture Layouts"],
  },
  {
    image: servicePlanning,
    title: "Furniture Selection",
    text: "Curated pieces, finishes, and furnishings that complete the room without visual noise.",
    items: ["Furniture Sourcing", "Material Boards", "Lighting Selection", "Art & Accessories"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    text: "We listen to how you live, your budget, and the feeling you want the space to have.",
  },
  {
    number: "02",
    title: "Concept Design",
    text: "Mood, palette, and layout options are developed so the direction is clear before we build.",
  },
  {
    number: "03",
    title: "Design Development",
    text: "Drawings, details, and specifications turn the approved concept into a buildable plan.",
  },
  {
    number: "04",
    title: "Material Selection",
    text: "Finishes, fabrics, and furnishings are sampled and confirmed against the design intent.",
  },
  {
    number: "05",
    title: "Project Management",
    text: "We coordinate trades, timelines, and site decisions so the work stays on track.",
  },
  {
    number: "06",
    title: "Final Styling",
    text: "The last layer of furniture, lighting, and objects is placed so the home feels finished.",
  },
];

function Stars() {
  return (
    <span className="home-stars" aria-label="5 star rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} size={14} fill="#f5b301" stroke="#f5b301" />
      ))}
    </span>
  );
}

function Home() {
  return (
    <main className="home">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="home-hero-overlay" />
        <div className="home-wrap home-hero-content">
          <h1>Interiors Designed for the Way You Live.</h1>
          <p>
            We plan, furnish, and style homes and workplaces that feel calm,
            considered, and completely your own — from first sketch to final
            walkthrough.
          </p>
          <div className="home-hero-actions">
            <Link className="home-btn home-btn-primary" to="/contact">
              Get a Free Consultation
            </Link>
            <Link className="home-btn home-btn-ghost" to="/projects">
              View Our Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-wrap home-intro">
          <div className="home-intro-copy">
            <h2>Company Introduction</h2>
            <p>
              Interior Design Studio is a full-service practice for people who
              want spaces that work as well as they look. We begin with how a
              room is used — morning light, storage, gathering, quiet — and
              design from that reality rather than a trend.
            </p>
            <p>
              Across apartments, houses, and commercial interiors, our team
              handles planning, materials, furnishings, and styling as one
              coordinated process. The result is a home or workplace that feels
              finished, personal, and ready to live in.
            </p>
            <Link className="home-text-link" to="/about">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-intro-collage">
            <img
              className="home-intro-main"
              src={introChair}
              alt="Modern cream armchair with a navy pillow beside a marble wall"
            />
            <img
              className="home-intro-small home-intro-small-top"
              src={introMaterials}
              alt="Material samples of linen, marble, wood, and navy fabric"
            />
            <img
              className="home-intro-small home-intro-small-bottom"
              src={introKitchen}
              alt="Warm oak kitchen with a marble island"
            />
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted">
        <div className="home-wrap">
          <div className="home-section-head">
            <h2>Key Services</h2>
            <Link className="home-text-link" to="/services">
              View all services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-service-grid">
            {services.map((service) => (
              <article className="home-service-card" key={service.title}>
                <div className="home-card-media">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-wrap">
          <div className="home-section-head">
            <h2>Featured Projects</h2>
            <Link className="home-text-link" to="/projects">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="home-project-grid">
            <Link className="home-project home-project-tall" to="/projects">
              <img src={projectTribeca} alt="The Tribeca Loft living room" />
              <div className="home-project-caption">
                <h3>The Tribeca Loft</h3>
                <p>Residential Interior</p>
              </div>
            </Link>

            <Link className="home-project" to="/projects">
              <img src={projectOffice} alt="Modern office and lounge workspace" />
              <div className="home-project-caption">
                <h3>Modern Office Space</h3>
                <p>Commercial Interior</p>
              </div>
            </Link>

            <Link className="home-project" to="/projects">
              <img src={projectCoastal} alt="Coastal living room with ocean view" />
              <div className="home-project-caption">
                <h3>Coastal Residence</h3>
                <p>Residential Interior</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section home-why-section">
        <div className="home-wrap home-why">
          <div
            className="home-why-visual"
            style={{ backgroundImage: `url(${beforeAfter})` }}
          >
            <div className="home-why-visual-copy">
              <h3>Chaos to Comfort: the Design Studio Difference</h3>
              <ul>
                <li>
                  <Check size={16} /> Personalized Design
                </li>
                <li>
                  <Check size={16} /> Thoughtful Planning
                </li>
                <li>
                  <Check size={16} /> Quality-Focused
                </li>
              </ul>
            </div>
          </div>

          <div className="home-why-copy">
            <h2>Why Choose Us</h2>
            <ul className="home-why-list">
              <li>
                <h3>Personalized Approach</h3>
                <p>
                  Every plan starts with your routines, not a template. Rooms
                  are designed around how you actually use them.
                </p>
              </li>
              <li>
                <h3>Transparent Pricing</h3>
                <p>
                  Scope, materials, and fees are discussed clearly so there are
                  no surprises as the project moves forward.
                </p>
              </li>
              <li>
                <h3>Full-Service Delivery</h3>
                <p>
                  Planning, sourcing, project coordination, and styling stay
                  with one studio from start to finish.
                </p>
              </li>
              <li>
                <h3>Experienced Craftsmen</h3>
                <p>
                  We work with trusted makers and trades so finishes and
                  furnishings meet the standard of the drawings.
                </p>
              </li>
              <li>
                <h3>Quality Assurance</h3>
                <p>
                  Details are reviewed on site before handover, so the finished
                  space matches what was approved.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="home-section home-section-muted">
        <div className="home-wrap">
          <h2 className="home-process-title">Design Process</h2>
          <div className="home-process-grid">
            {processSteps.map((step) => (
              <article className="home-process-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials-section">
        <div className="home-wrap">
          <h2 className="home-testimonials-title">Customer Testimonials</h2>
          <div className="home-testimonials">
            <article className="home-quote-card home-quote-featured">
              <Quote className="home-quote-icon" size={36} />
              <p>
                “Working with Interior Design Studio changed how our apartment
                feels every day. They listened, edited our existing pieces, and
                delivered a home that is calm, practical, and completely ours.
                The process was clear from the first meeting to the last
                styling day.”
              </p>
              <div className="home-quote-person">
                <img src={avatarSarah} alt="Sarah Mitchell" />
                <div>
                  <strong>Sarah Mitchell</strong>
                  <span>Homeowner, Brooklyn</span>
                  <Stars />
                </div>
              </div>
            </article>

            <div className="home-quote-stack">
              <article className="home-quote-card">
                <p>
                  “Our office finally feels like a place people want to work.
                  The layout, lighting, and materials were all handled with
                  care.”
                </p>
                <div className="home-quote-person">
                  <img src={avatarJames} alt="James Carter" />
                  <div>
                    <strong>James Carter</strong>
                    <span>Studio Director</span>
                    <Stars />
                  </div>
                </div>
              </article>

              <article className="home-quote-card">
                <p>
                  “They turned a tight renovation timeline into a warm, finished
                  home. Communication stayed simple and the result is beautiful.”
                </p>
                <div className="home-quote-person">
                  <img src={avatarPriya} alt="Priya Shah" />
                  <div>
                    <strong>Priya Shah</strong>
                    <span>Apartment Client</span>
                    <Stars />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-cta"
        style={{ backgroundImage: `url(${ctaDesk})` }}
      >
        <div className="home-cta-overlay" />
        <div className="home-cta-content">
          <h2>Let&apos;s Create a Space That Feels Like Yours.</h2>
          <div className="home-hero-actions home-cta-actions">
            <Link className="home-btn home-btn-primary" to="/contact">
              Book a Free Consultation
            </Link>
            <Link className="home-btn home-btn-light" to="/projects">
              Recent Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
