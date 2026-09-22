import { useState } from "react";
import ContactFormField from "./ContactFormField";
import ContactFormSuccess from "./ContactFormSuccess";

export default function ContactForm({
  formConfig,
  activeType = "consultation",
  onTypeChange,
}) {
  // Form input state
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    propertyType: "apartment",
    projectType: "full-home",
    area: "",
    areaUnit: "sq.ft",
    budgetRange: "10-25-lakh",
    preferredDate: "",
    message: "",
    // Quote specific fields
    timeline: "3-6-months",
    designRequirements: "",
    additionalRequirements: "",
    // General enquiry specific
    subject: "General Consultation & Studio Services",
  });

  // Uploaded files state for Quote flow
  const [attachedFiles, setAttachedFiles] = useState([]);

  // Form interaction states
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState("");

  // Get today's ISO date string (YYYY-MM-DD) for min date constraint
  const todayDate = new Date().toISOString().split("T")[0];

  // Validation function
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Please enter your name.";
        } else if (value.trim().length < 2) {
          error = "Name must be at least 2 characters.";
        }
        break;

      case "mobile":
        if (!value.trim()) {
          error = "Please enter your mobile number.";
        } else {
          // Indian 10-digit mobile number: optional +91 or 0 prefix followed by 10 digits starting with 6-9
          const cleanMobile = value.trim().replace(/[\s-]/g, "");
          const indianPhoneRegex = /^(?:(?:\+91|91|0)?)[6-9]\d{9}$/;
          if (!indianPhoneRegex.test(cleanMobile)) {
            error = "Please enter a valid 10-digit Indian mobile number.";
          }
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Please enter a valid email address.";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value.trim())) {
            error = "Please enter a valid email address.";
          }
        }
        break;

      case "location":
        if (!value.trim()) {
          error = "Please enter your property location or city.";
        }
        break;

      case "propertyType":
        if (activeType !== "general" && !value) {
          error = "Please select a property type.";
        }
        break;

      case "projectType":
        if (activeType !== "general" && !value) {
          error = "Please select a project type.";
        }
        break;

      case "area":
        if (activeType !== "general") {
          if (!value.trim()) {
            error = "Please enter the approximate area.";
          } else if (isNaN(Number(value.replace(/,/g, "")))) {
            error = "Please enter a valid numeric area.";
          }
        }
        break;

      case "budgetRange":
        if (activeType !== "general" && !value) {
          error = "Please select a budget range.";
        }
        break;

      case "preferredDate":
        if (activeType === "consultation") {
          if (!value) {
            error = "Please select a preferred consultation date.";
          } else {
            // Parse DD-MM-YYYY or YYYY-MM-DD
            let selectedDateObj = null;
            if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
              const [d, m, y] = value.split("-").map(Number);
              selectedDateObj = new Date(y, m - 1, d);
            } else if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
              const [y, m, d] = value.split("-").map(Number);
              selectedDateObj = new Date(y, m - 1, d);
            }

            if (!selectedDateObj || isNaN(selectedDateObj.getTime())) {
              error = "Please enter a valid date in DD-MM-YYYY format.";
            } else {
              const todayObj = new Date();
              todayObj.setHours(0, 0, 0, 0);
              selectedDateObj.setHours(0, 0, 0, 0);
              if (selectedDateObj < todayObj) {
                error = "Date cannot be in the past.";
              }
            }
          }
        }
        break;

      case "message":
        if (activeType !== "quote") {
          if (!value.trim()) {
            error = "Please enter your message.";
          } else if (value.trim().length < 5) {
            error = "Message must be at least 5 characters.";
          }
        }
        break;

      case "designRequirements":
        if (activeType === "quote") {
          if (!value.trim()) {
            error = "Please enter your project requirements.";
          }
        }
        break;

      default:
        break;
    }

    return error;
  };

  const validateAll = () => {
    const newErrors = {};

    newErrors.name = validateField("name", values.name);
    newErrors.mobile = validateField("mobile", values.mobile);
    newErrors.email = validateField("email", values.email);
    newErrors.location = validateField("location", values.location);

    if (activeType !== "general") {
      newErrors.propertyType = validateField("propertyType", values.propertyType);
      newErrors.projectType = validateField("projectType", values.projectType);
      newErrors.area = validateField("area", values.area);
      newErrors.budgetRange = validateField("budgetRange", values.budgetRange);
    }

    if (activeType === "consultation") {
      newErrors.preferredDate = validateField("preferredDate", values.preferredDate);
      newErrors.message = validateField("message", values.message);
    }

    if (activeType === "quote") {
      newErrors.designRequirements = validateField(
        "designRequirements",
        values.designRequirements
      );
    }

    if (activeType === "general") {
      newErrors.message = validateField("message", values.message);
    }

    // Filter out empty errors
    const filtered = Object.fromEntries(
      Object.entries(newErrors).filter(([, err]) => Boolean(err))
    );

    setErrors(filtered);
    return Object.keys(filtered).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleUnitChange = (e) => {
    setValues((prev) => ({ ...prev, areaUnit: e.target.value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Filter files: max 5 files total, max 10MB each
    const validFiles = files.filter((file) => file.size <= 10 * 1024 * 1024);

    setAttachedFiles((prev) => {
      const combined = [...prev, ...validFiles];
      return combined.slice(0, 5); // limit to 5 attachments
    });

    // Reset input value to allow re-uploading the same file if removed
    e.target.value = "";
  };

  const handleRemoveFile = (indexToRemove) => {
    setAttachedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleResetForm = () => {
    setValues({
      name: "",
      mobile: "",
      email: "",
      location: "",
      propertyType: "apartment",
      projectType: "full-home",
      area: "",
      areaUnit: "sq.ft",
      budgetRange: "10-25-lakh",
      preferredDate: "",
      message: "",
      timeline: "3-6-months",
      designRequirements: "",
      additionalRequirements: "",
      subject: "General Consultation & Studio Services",
    });
    setAttachedFiles([]);
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
    setApiError("");
  };

  /**
   * Submission handler
   *
   * Isolated function structured for future backend integration.
   * To connect to a real backend, replace the timeout with:
   * await fetch("/api/contact", { method: "POST", body: payload });
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");

    // Mark all relevant fields as touched
    const allTouched = {
      name: true,
      mobile: true,
      email: true,
      location: true,
      propertyType: true,
      projectType: true,
      area: true,
      budgetRange: true,
      preferredDate: true,
      message: true,
      designRequirements: true,
    };
    setTouched(allTouched);

    const isValid = validateAll();
    if (!isValid) {
      // Scroll smoothly to first invalid element if needed
      const firstErrorKey = Object.keys(errors)[0];
      if (firstErrorKey) {
        const errorElement = document.getElementById(firstErrorKey);
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
          errorElement.focus();
        }
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Package payload for transmission
      const payload = {
        enquiryType: activeType,
        ...values,
        fileCount: attachedFiles.length,
        fileNames: attachedFiles.map((f) => f.name),
        submittedAt: new Date().toISOString(),
      };

      // Mock delay representing API dispatch (POST /api/contact)
      await new Promise((resolve) => setTimeout(resolve, 850));

      // In a real production deployment with server endpoint:
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });
      // if (!response.ok) throw new Error("Submission failed");

      if (payload) {
        setIsSubmitted(true);
      }
    } catch {
      setApiError(
        "A connection issue occurred while sending your enquiry. Please verify your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSubmitButtonLabel = () => {
    if (isSubmitting) return "Sending...";
    if (isSubmitted) return "Enquiry Sent";
    return "SEND ENQUIRY";
  };

  return (
    <div
      id="contact-form-container"
      className="bg-white rounded-xl border border-[#DCE5E7] p-6 sm:p-8 shadow-none"
    >
      {/* Editorial Enquiry Type Selector */}
      <div className="mb-6 border-b border-[#DCE5E7]">
        <div
          role="tablist"
          aria-label="Enquiry Type"
          className="flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-8 -mb-px"
        >
          {formConfig.enquiryTypes.map((tab) => {
            const isSelected = activeType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setApiError("");
                  onTypeChange(tab.id);
                }}
                className={`pb-3 text-[11px] sm:text-xs tracking-[0.14em] uppercase transition-colors duration-150 cursor-pointer border-b-2 text-left whitespace-nowrap ${
                  isSelected
                    ? "font-bold text-[#17252C] border-[#17252C]"
                    : "font-medium text-[#5F747D] border-transparent hover:text-[#17252C] hover:border-[#DCE5E7]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Heading & Subtext */}
      <div className="mb-6">
        <h2 className="font-editorial text-2xl sm:text-[28px] font-bold text-[#17252C] tracking-tight mb-1">
          {formConfig.heading}
        </h2>
        <p className="text-xs sm:text-sm text-[#4A5F68] leading-relaxed">
          {formConfig.description}
        </p>
      </div>

      {/* Success View or Active Form */}
      {isSubmitted ? (
        <ContactFormSuccess
          name={values.name}
          enquiryType={activeType}
          onReset={handleResetForm}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {apiError && (
            <div
              role="alert"
              className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg"
            >
              {apiError}
            </div>
          )}

          {/* Customer Details Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactFormField
              id="name"
              label="Full Name"
              required
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g., Ananya Sharma"
              error={errors.name}
              touched={touched.name}
            />

            <ContactFormField
              id="email"
              label="Email Address"
              type="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@example.com"
              error={errors.email}
              touched={touched.email}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ContactFormField
              id="mobile"
              label="Mobile Number"
              type="tel"
              required
              value={values.mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="+91 98765 43210"
              error={errors.mobile}
              touched={touched.mobile}
            />

            <ContactFormField
              id="location"
              label="Location"
              required
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="City, Area or Pincode"
              error={errors.location}
              touched={touched.location}
            />
          </div>

          {/* Conditional Fields for Consultation and Quote */}
          {activeType !== "general" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactFormField
                  id="propertyType"
                  label="Property Type"
                  type="select"
                  required
                  options={formConfig.propertyTypes}
                  value={values.propertyType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.propertyType}
                  touched={touched.propertyType}
                />

                <ContactFormField
                  id="projectType"
                  label="Project Type"
                  type="select"
                  required
                  options={formConfig.projectTypes}
                  value={values.projectType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.projectType}
                  touched={touched.projectType}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactFormField
                  id="area"
                  label="Approximate Area"
                  type="area"
                  required
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  unit={values.areaUnit}
                  onUnitChange={handleUnitChange}
                  unitOptions={formConfig.areaUnits}
                  placeholder="e.g., 2,500"
                  error={errors.area}
                  touched={touched.area}
                />

                <ContactFormField
                  id="budgetRange"
                  label="Budget Range"
                  type="select"
                  required
                  options={formConfig.budgetRanges}
                  value={values.budgetRange}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.budgetRange}
                  touched={touched.budgetRange}
                />
              </div>
            </>
          )}

          {/* Consultation specific: Preferred Consultation Date */}
          {activeType === "consultation" && (
            <div>
              <ContactFormField
                id="preferredDate"
                label="Preferred Consultation Date"
                type="date"
                required
                min={todayDate}
                value={values.preferredDate}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.preferredDate}
                touched={touched.preferredDate}
              />
            </div>
          )}

          {/* Quote specific: Timeline, Design Requirements, Additional Requirements, Document Upload */}
          {activeType === "quote" && (
            <>
              <div>
                <ContactFormField
                  id="timeline"
                  label="Expected Completion Timeline"
                  type="select"
                  options={formConfig.timelineOptions}
                  value={values.timeline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <ContactFormField
                  id="designRequirements"
                  label="Design Requirements & Specifications"
                  type="textarea"
                  required
                  rows={3}
                  value={values.designRequirements}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your spatial needs, joinery, lighting, natural stone, or material preferences..."
                  error={errors.designRequirements}
                  touched={touched.designRequirements}
                />
              </div>

              <div>
                <ContactFormField
                  id="additionalRequirements"
                  label="Additional Requirements / Site Constraints (Optional)"
                  type="textarea"
                  rows={2}
                  value={values.additionalRequirements}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Access timings, elevator dimensions, structural review notes..."
                />
              </div>

              {/* Optional File Upload */}
              <div className="space-y-2">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-[#17252C]">
                  Floor Plan / Reference Drawings (Optional)
                </span>
                <div className="border border-dashed border-[#DCE5E7] hover:border-[#17252C] rounded-lg p-4 bg-[#F8FAF9] transition-colors">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-center sm:text-left">
                      <p className="text-xs text-[#17252C] font-medium">
                        Upload floor plans, sketches, or reference imagery
                      </p>
                      <p className="text-[11px] text-[#5F747D]">
                        PDF, PNG, JPG, or DWG up to 10MB each (max 5 files)
                      </p>
                    </div>
                    <label
                      htmlFor="quote-file-upload"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#17252C] hover:bg-[#283E49] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer shrink-0 shadow-sm"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      <span>Choose Files</span>
                    </label>
                    <input
                      id="quote-file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.png,.jpg,.jpeg,.dwg"
                      onChange={handleFileUpload}
                      className="sr-only"
                    />
                  </div>

                  {/* Selected files list with remove capability */}
                  {attachedFiles.length > 0 && (
                    <ul className="mt-3 pt-3 border-t border-[#DCE5E7] space-y-1.5" aria-label="Attached files">
                      {attachedFiles.map((file, idx) => (
                        <li
                          key={`${file.name}-${idx}`}
                          className="flex items-center justify-between gap-2 text-xs bg-white px-3 py-1.5 rounded border border-[#DCE5E7]"
                        >
                          <span className="truncate text-[#17252C] font-medium">
                            {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(idx)}
                            aria-label={`Remove file ${file.name}`}
                            className="text-[#8A9CA3] hover:text-red-600 text-xs font-semibold transition-colors cursor-pointer px-1"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Consultation / General Enquiry: Message field */}
          {activeType !== "quote" && (
            <div>
              <ContactFormField
                id="message"
                label="Message"
                type="textarea"
                required
                rows={3}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your space, requirements, timeline, and design preferences."
                error={errors.message}
                touched={touched.message}
              />
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#17252C] hover:bg-[#283E49] disabled:bg-[#17252C]/60 text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-[#17252C] focus:ring-offset-2 w-full sm:w-auto"
            >
              {isSubmitting && (
                <svg
                  className="animate-spin -ml-1 mr-1.5 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              <span>{getSubmitButtonLabel()}</span>
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
          </div>

          {/* Confidentiality Notice */}
          <p className="text-[11px] text-[#5F747D] pt-1">
            {formConfig.confidentialityNotice}
          </p>
        </form>
      )}
    </div>
  );
}
