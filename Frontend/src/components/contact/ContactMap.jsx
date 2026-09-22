import { useState, useCallback } from "react";
import ctaDesk from "../../assets/testimonials/cta-desk.png";

export default function ContactMap({ locationData }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = useCallback((e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(1.3, Number((prev + 0.1).toFixed(1))));
  }, []);

  const handleZoomOut = useCallback((e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(0.85, Number((prev - 0.1).toFixed(1))));
  }, []);

  if (!locationData) return null;

  const eyebrow = locationData.eyebrow || "OUR LOCATION";
  const heading = locationData.heading || "Visit Our Studio";
  const description =
    locationData.description ||
    "Find our studio and get directions for your scheduled consultation.";
  const addressTitle = locationData.addressTitle || "STUDIO ADDRESS";
  const addressVal = locationData.addressPlaceholder || "[Office Address]";
  const hoursTitle = locationData.hoursTitle || "WORKING HOURS";
  const hoursVal = locationData.hoursPlaceholder || "[Working Hours]";
  const visitTitle = locationData.visitInfoTitle || "VISIT INFORMATION";
  const visitVal =
    locationData.visitInfoValue ||
    "Studio visits and in-person consultations are available by appointment.";
  const mapUrl =
    locationData.mapUrl || "https://maps.google.com/?q=Interior+Design+Studio";
  const mapButtonLabel = locationData.mapButtonLabel || "Open in Google Maps";

  return (
    <section
      id="contact-location"
      aria-labelledby="contact-location-heading"
      className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#F1F5F4] border-t border-[#DCE5E7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* 1. LEFT EDITORIAL CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Studio Heading & Description */}
            <div className="mb-8 sm:mb-10">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5F747D] block mb-3 font-sans">
                {eyebrow}
              </span>

              <h2
                id="contact-location-heading"
                className="font-editorial text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#17252C] tracking-tight leading-[1.12] mb-3"
              >
                {heading}
              </h2>

              <p className="text-xs sm:text-sm text-[#5F747D] leading-relaxed max-w-md font-sans">
                {description}
              </p>
            </div>

            {/* Three Editorial Information Blocks with Thin Horizontal Dividers */}
            <div className="border-t border-[#DCE5E7] divide-y divide-[#DCE5E7]">
              {/* Block 1: Studio Address */}
              <div className="py-5 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#EBF0F1]/70 border border-[#DCE5E7] flex items-center justify-center text-[#17252C] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-[#17252C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5F747D] block mb-1">
                    {addressTitle}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#17252C] leading-snug">
                    {addressVal}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#5F747D] mt-0.5 leading-relaxed font-sans">
                    Conveniently located for in-person consultations.
                  </p>
                </div>
              </div>

              {/* Block 2: Working Hours */}
              <div className="py-5 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#EBF0F1]/70 border border-[#DCE5E7] flex items-center justify-center text-[#17252C] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-[#17252C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M12 7v5l3 2"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5F747D] block mb-1">
                    {hoursTitle}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#17252C] leading-snug">
                    {hoursVal}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#5F747D] mt-0.5 leading-relaxed font-sans">
                    We're here to help you plan your dream space.
                  </p>
                </div>
              </div>

              {/* Block 3: Visit Information */}
              <div className="py-5 flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full bg-[#EBF0F1]/70 border border-[#DCE5E7] flex items-center justify-center text-[#17252C] shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <svg
                    className="w-4 h-4 text-[#17252C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      strokeWidth="1.6"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.6"
                      d="M16 2v4M8 2v4M3 10h18"
                    />
                    <circle cx="8" cy="14" r="1" fill="currentColor" />
                    <circle cx="12" cy="14" r="1" fill="currentColor" />
                    <circle cx="16" cy="14" r="1" fill="currentColor" />
                    <circle cx="8" cy="18" r="1" fill="currentColor" />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#5F747D] block mb-1">
                    {visitTitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#17252C] font-medium leading-relaxed">
                    {visitVal}
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Link with Underline */}
            <div className="pt-6 sm:pt-8">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="open-google-maps-link"
                className="inline-flex items-center gap-2.5 pb-1 border-b border-[#17252C] text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#17252C] hover:text-[#5F747D] hover:border-[#5F747D] transition-colors group cursor-pointer"
              >
                <span>{mapButtonLabel}</span>
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* 2. RIGHT SIDE — MAP + INTERIOR VISUAL COMPOSITION */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Asymmetrical Frame Container */}
            <div className="relative w-full max-w-2xl mx-auto flex items-center justify-start">
              {/* Narrow Vertical Interior Design Image Area (Visual Accent) */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[42%] sm:w-[40%] rounded-none overflow-hidden border border-[#DCE5E7] bg-[#EBF0F1]"
                aria-hidden="true"
              >
                <img
                  src={ctaDesk}
                  alt=""
                  className="w-full h-full object-cover object-right grayscale-[15%] contrast-[1.04]"
                />
                {/* Soft daylight gradient overlay to integrate seamlessly */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F1F5F4]/60 via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Subtle Editorial Caption on Interior Photo */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex flex-col items-end text-right select-none">
                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/90 drop-shadow-sm font-sans">
                    SPACES
                    <br />
                    THAT
                    <br />
                    BELONG
                    <br />
                    TO YOU
                  </span>
                  <span className="w-4 h-px bg-white/60 mt-2" />
                </div>
              </div>

              {/* Architectural Map Area (1:1 Aspect Ratio, Sharp Zero-Radius Corners) */}
              <div
                id="interactive-studio-map"
                className="relative z-10 w-[84%] sm:w-[82%] rounded-none border border-[#DCE5E7] bg-[#F4F7F6] shadow-[0_12px_36px_rgba(23,37,44,0.08)] overflow-hidden aspect-square [filter:grayscale(35%)_contrast(102%)]"
              >
                {/* Map SVG Canvas */}
                <div className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-hidden">
                  <svg
                    viewBox="0 0 800 600"
                    className="w-full h-full select-none"
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "48% 46%",
                      transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    role="img"
                    aria-label="Stylized map showing studio location"
                  >
                    <defs>
                      <pattern
                        id="map-block-grid"
                        width="30"
                        height="30"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          width="26"
                          height="26"
                          fill="#EFF3F2"
                          rx="2"
                        />
                      </pattern>
                      <filter
                        id="pin-drop-shadow"
                        x="-30%"
                        y="-30%"
                        width="160%"
                        height="160%"
                      >
                        <feDropShadow
                          dx="0"
                          dy="4"
                          stdDeviation="3"
                          floodColor="#17252C"
                          floodOpacity="0.28"
                        />
                      </filter>
                    </defs>

                    {/* Base Land Fill */}
                    <rect width="800" height="600" fill="#F4F7F6" />

                    {/* Urban Parcel Blocks */}
                    <rect x="30" y="30" width="160" height="90" fill="url(#map-block-grid)" />
                    <rect x="230" y="40" width="180" height="80" fill="url(#map-block-grid)" />
                    <rect x="40" y="270" width="140" height="150" fill="url(#map-block-grid)" />
                    <rect x="200" y="320" width="120" height="110" fill="url(#map-block-grid)" />
                    <rect x="30" y="450" width="190" height="110" fill="url(#map-block-grid)" />
                    <rect x="620" y="240" width="140" height="200" fill="url(#map-block-grid)" />
                    <rect x="420" y="480" width="160" height="80" fill="url(#map-block-grid)" />

                    {/* Pale Botanic Park Zones */}
                    <path
                      d="M 500 50 C 580 60, 630 110, 650 190 C 600 230, 540 210, 510 160 Z"
                      fill="#E1ECE6"
                      stroke="#D4E2DA"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="510"
                      cy="470"
                      r="42"
                      fill="#E0ECE5"
                      stroke="#D2E0D8"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="510"
                      cy="470"
                      r="24"
                      fill="none"
                      stroke="#D2E0D8"
                      strokeWidth="1"
                      strokeDasharray="3 3"
                    />

                    {/* Desaturated Pale River Curve */}
                    <path
                      d="M 540 -10 C 560 130, 610 220, 670 320 C 720 420, 620 510, 520 610 L 460 610 C 560 510, 660 420, 610 320 C 550 220, 500 130, 480 -10 Z"
                      fill="#D5E4E6"
                      stroke="#C8DADC"
                      strokeWidth="1"
                    />

                    {/* Road Network - Casing and Street Surfaces */}
                    {/* Secondary Cross Streets */}
                    <line x1="-10" y1="80" x2="810" y2="80" stroke="#FFFFFF" strokeWidth="5" />
                    <line x1="-10" y1="180" x2="810" y2="180" stroke="#FFFFFF" strokeWidth="4" />
                    <line x1="-10" y1="260" x2="810" y2="260" stroke="#FFFFFF" strokeWidth="6" />
                    <line x1="-10" y1="360" x2="810" y2="360" stroke="#FFFFFF" strokeWidth="4.5" />
                    <line x1="-10" y1="460" x2="810" y2="460" stroke="#FFFFFF" strokeWidth="5" />

                    <line x1="80" y1="-10" x2="80" y2="610" stroke="#FFFFFF" strokeWidth="4.5" />
                    <line x1="180" y1="-10" x2="180" y2="610" stroke="#FFFFFF" strokeWidth="5" />
                    <line x1="280" y1="-10" x2="280" y2="610" stroke="#FFFFFF" strokeWidth="4" />
                    <line x1="380" y1="-10" x2="380" y2="610" stroke="#FFFFFF" strokeWidth="5" />
                    <line x1="680" y1="-10" x2="680" y2="610" stroke="#FFFFFF" strokeWidth="5" />

                    {/* Diagonal Primary Arterial Boulevards */}
                    <path
                      d="M -20 120 L 720 580"
                      stroke="#FFFFFF"
                      strokeWidth="11"
                    />
                    <path
                      d="M -20 120 L 720 580"
                      stroke="#E2EAEB"
                      strokeWidth="1"
                    />

                    <path
                      d="M 60 -10 L 480 610"
                      stroke="#FFFFFF"
                      strokeWidth="8"
                    />
                    <path
                      d="M 420 -10 L 780 440"
                      stroke="#FFFFFF"
                      strokeWidth="7"
                    />

                    {/* Subtle Bridges over the river */}
                    <rect x="635" y="295" width="22" height="12" fill="#FFFFFF" stroke="#DCE5E7" strokeWidth="1" rx="1" />
                    <rect x="585" y="445" width="22" height="12" fill="#FFFFFF" stroke="#DCE5E7" strokeWidth="1" rx="1" />

                    {/* Architectural District Labels */}
                    <text
                      x="590"
                      y="160"
                      fill="#5F747D"
                      fontSize="11"
                      fontWeight="600"
                      letterSpacing="0.16em"
                      fontFamily="system-ui, sans-serif"
                    >
                      CITY CENTER
                    </text>
                    <text
                      x="230"
                      y="520"
                      fill="#5F747D"
                      fontSize="10"
                      fontWeight="600"
                      letterSpacing="0.16em"
                      fontFamily="system-ui, sans-serif"
                    >
                      BUSINESS DISTRICT
                    </text>
                    <text
                      x="610"
                      y="540"
                      fill="#5F747D"
                      fontSize="10"
                      fontWeight="600"
                      letterSpacing="0.16em"
                      fontFamily="system-ui, sans-serif"
                    >
                      RIVERSIDE
                    </text>

                    {/* Studio Location Teardrop Navy Pin */}
                    <g
                      transform="translate(370, 275)"
                      filter="url(#pin-drop-shadow)"
                      className="cursor-pointer"
                    >
                      {/* Concentric Pulse Rings */}
                      <circle
                        cx="0"
                        cy="0"
                        r="14"
                        fill="#17252C"
                        fillOpacity="0.1"
                      />
                      <circle
                        cx="0"
                        cy="0"
                        r="20"
                        fill="none"
                        stroke="#17252C"
                        strokeOpacity="0.22"
                        strokeWidth="1"
                      />

                      {/* Pin Teardrop Body */}
                      <path
                        d="M 0 -24 C -9 -24 -16 -17 -16 -7.5 C -16 4 0 17 0 17 C 0 17 16 4 16 -7.5 C 16 -17 9 -24 0 -24 Z"
                        fill="#17252C"
                      />

                      {/* White Center Aperture */}
                      <circle cx="0" cy="-9" r="4.5" fill="#FFFFFF" />
                    </g>
                  </svg>
                </div>

                {/* Map Orientation Compass Control (Top-Right) */}
                <div
                  className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 w-7 h-7 sm:w-8 sm:h-8 bg-white/95 backdrop-blur-sm border border-[#DCE5E7] rounded-none flex flex-col items-center justify-center shadow-sm text-[#17252C] select-none"
                  title="North"
                  aria-label="Map orientation: North"
                >
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#17252C]"
                    viewBox="0 0 12 12"
                    fill="currentColor"
                  >
                    <path d="M6 1L9 11L6 8L3 11L6 1Z" />
                  </svg>
                  <span className="text-[7.5px] sm:text-[8px] font-bold tracking-tighter leading-none mt-0.5 font-sans">
                    N
                  </span>
                </div>

                {/* Map Zoom Controls (Bottom-Right) */}
                <div
                  className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 bg-white/95 backdrop-blur-sm border border-[#DCE5E7] rounded-none shadow-sm flex flex-col divide-y divide-[#DCE5E7] overflow-hidden select-none"
                  role="group"
                  aria-label="Map zoom controls"
                >
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-bold text-[#17252C] hover:bg-[#F1F5F4] transition-colors cursor-pointer"
                    aria-label="Zoom in map"
                    title="Zoom in"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs font-bold text-[#17252C] hover:bg-[#F1F5F4] transition-colors cursor-pointer"
                    aria-label="Zoom out map"
                    title="Zoom out"
                  >
                    −
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

