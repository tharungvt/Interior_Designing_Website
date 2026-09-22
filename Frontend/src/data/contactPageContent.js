/**
 * Contact Page Data & Configuration
 *
 * Centralized content definition for the Contact Us page, adhering to
 * cool pale blue-gray architectural atelier styling and BRD requirements.
 */

export const contactPageContent = {
  hero: {
    eyebrow: "CONTACT US",
    heading: "Let's Talk About Your Project",
    description:
      "Tell us about your space, requirements, and project plans. Our design team will help you understand the next steps.",
    primaryAction: {
      label: "Get a Free Consultation",
      type: "consultation",
    },
    secondaryAction: {
      label: "Request a Quote",
      type: "quote",
    },
  },

  studioInfo: {
    eyebrow: "STUDIO INQUIRIES",
    heading: "Studio Inquiries",
    description:
      "Get in touch with our design team to discuss your project, timeline, and requirements.",
    details: {
      address: {
        label: "OFFICE ADDRESS",
        placeholderKey: "[Office Address]",
        mapUrl: "https://maps.google.com/?q=Interior+Design+Studio",
      },
      phone: {
        label: "PHONE NUMBER",
        placeholderKey: "[Phone Number]",
        href: "tel:+919876543210",
      },
      email: {
        label: "EMAIL ADDRESS",
        placeholderKey: "[Email Address]",
        href: "mailto:hello@interiordesignstudio.com",
      },
      workingHours: {
        label: "WORKING HOURS",
        placeholderKey: "[Working Hours]",
      },
    },
    whatsapp: {
      title: "CHAT WITH OUR DESIGN TEAM",
      description:
        "Direct messaging for consultations, quick queries, and scheduling.",
      actionLabel: "Chat on WhatsApp",
      href: "https://wa.me/919876543210",
    },
  },

  formConfig: {
    heading: "Send a Message",
    description: "Tell us about your space and requirements.",
    confidentialityNotice:
      "Your information is kept strictly confidential. We respond within 1–2 business days.",
    enquiryTypes: [
      { id: "consultation", label: "FREE CONSULTATION" },
      { id: "quote", label: "REQUEST A QUOTE" },
      { id: "general", label: "GENERAL ENQUIRY" },
    ],
    propertyTypes: [
      { value: "apartment", label: "Apartment" },
      { value: "villa", label: "Villa" },
      { value: "independent-house", label: "Independent House" },
      { value: "office", label: "Office" },
      { value: "commercial-property", label: "Commercial Property" },
      { value: "other", label: "Other" },
    ],
    projectTypes: [
      { value: "full-home", label: "Full Home" },
      { value: "kitchen", label: "Kitchen" },
      { value: "bedroom", label: "Bedroom" },
      { value: "living-room", label: "Living Room" },
      { value: "office", label: "Office" },
      { value: "renovation", label: "Renovation" },
      { value: "other", label: "Other" },
    ],
    budgetRanges: [
      { value: "under-5-lakh", label: "Under ₹5 Lakh" },
      { value: "5-10-lakh", label: "₹5 Lakh – ₹10 Lakh" },
      { value: "10-25-lakh", label: "₹10 Lakh – ₹25 Lakh" },
      { value: "25-50-lakh", label: "₹25 Lakh – ₹50 Lakh" },
      { value: "50-lakh-plus", label: "₹50 Lakh+" },
      { value: "flexible", label: "Flexible / Discussion" },
    ],
    areaUnits: [
      { value: "sq.ft", label: "SQ. FT" },
      { value: "sq.m", label: "SQ. M" },
    ],
    timelineOptions: [
      { value: "within-1-month", label: "Within 1 month" },
      { value: "1-3-months", label: "1–3 months" },
      { value: "3-6-months", label: "3–6 months" },
      { value: "6-plus-months", label: "6+ months" },
      { value: "not-decided", label: "Not decided yet" },
    ],
  },

  processSteps: {
    eyebrow: "WHAT HAPPENS NEXT",
    heading: "From First Enquiry to Spatial Reality",
    description:
      "A clear, guided process to understand your vision and bring your interior ideas to life.",
    steps: [
      {
        number: "01",
        title: "Share Your Requirements",
        description:
          "Tell us about your space, approximate dimensions, and what you want to achieve with your interior.",
      },
      {
        number: "02",
        title: "Discuss Your Ideas",
        description:
          "Meet with our design team to explore layout options, design preferences, and practical requirements.",
      },
      {
        number: "03",
        title: "Receive a Design Direction",
        description:
          "Get a tailored design concept, material recommendations, and an itemized cost estimate for your space.",
      },
      {
        number: "04",
        title: "Move Forward With Your Project",
        description:
          "Finalize design plans and begin execution with dedicated project management from start to finish.",
      },
    ],
  },

  location: {
    eyebrow: "OUR LOCATION",
    heading: "Visit Our Studio",
    description:
      "Find our studio and get directions for your scheduled consultation.",
    addressTitle: "STUDIO ADDRESS",
    addressPlaceholder: "[Office Address]",
    hoursTitle: "WORKING HOURS",
    hoursPlaceholder: "[Working Hours]",
    visitInfoTitle: "VISIT INFORMATION",
    visitInfoValue:
      "Studio visits and in-person consultations are available by appointment.",
    mapLocationTitle: "Google Maps Location",
    mapButtonLabel: "Open in Google Maps",
    mapUrl: "https://maps.google.com/?q=Interior+Design+Studio",
  },

  finalCta: {
    eyebrow: "START YOUR PROJECT",
    heading: "Ready to Discuss Your Project?",
    description:
      "Schedule a free consultation to discuss your vision, or request a detailed project estimate customized to your scope and specifications.",
    primaryAction: {
      label: "GET A FREE CONSULTATION",
      type: "consultation",
    },
    secondaryAction: {
      label: "REQUEST A QUOTE",
      type: "quote",
    },
  },
};
