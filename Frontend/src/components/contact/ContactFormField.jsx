import CustomSelect from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";

export default function ContactFormField({
  id,
  name,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  onBlur,
  placeholder,
  options = [],
  rows = 3,
  unit,
  onUnitChange,
  unitOptions = [],
  error,
  touched,
  min,
  max,
  className = "",
}) {
  const hasError = Boolean(touched && error);
  const errorId = `${id}-error`;

  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#17252C]"
        >
          {label} {required && <span className="text-[#5F747D] ml-0.5">*</span>}
        </label>
      </div>

      {type === "select" ? (
        <div className="form-field-select">
          <CustomSelect
            id={id}
            name={name || id}
            value={value}
            options={options}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder || `Select ${label}`}
            error={hasError}
            errorId={errorId}
            ariaLabel={label}
          />
        </div>
      ) : type === "textarea" ? (
        <textarea
          id={id}
          name={name || id}
          rows={rows}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`w-full min-h-[110px] sm:min-h-[120px] max-h-[220px] p-3 rounded-lg bg-white border text-xs sm:text-sm text-[#17252C] placeholder-[#8A9CA3] transition-colors duration-150 focus:outline-none resize-y leading-relaxed ${
            hasError
              ? "border-[#D06060] focus:border-[#D06060]"
              : "border-[#DCE5E7] focus:border-[#17252C] focus:ring-1 focus:ring-[#17252C]/10"
          }`}
        />
      ) : type === "area" ? (
        /* Composite input group for area value and unit selector with a subtle divider */
        <div
          className={`flex h-11 rounded-lg bg-white border transition-colors duration-150 ${
            hasError
              ? "border-[#D06060]"
              : "border-[#DCE5E7] focus-within:border-[#17252C] focus-within:ring-1 focus-within:ring-[#17252C]/10"
          }`}
        >
          <input
            id={id}
            name={name || id}
            type="text"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            placeholder={placeholder}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            className="flex-1 min-w-0 h-full px-3.5 rounded-l-lg bg-transparent border-0 text-xs sm:text-sm text-[#17252C] placeholder-[#8A9CA3] focus:outline-none"
          />
          <div className="w-px h-6 my-auto bg-[#DCE5E7]" aria-hidden="true" />
          <div className="relative flex items-center h-full form-field-select">
            <CustomSelect
              id={`${id}-unit`}
              name={`${name || id}Unit`}
              value={unit}
              options={unitOptions}
              onChange={onUnitChange}
              onBlur={onBlur}
              compact
              ariaLabel={`${label} Unit`}
            />
          </div>
        </div>
      ) : type === "date" ? (
        <CustomDatePicker
          id={id}
          name={name || id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder || "DD-MM-YYYY"}
          error={hasError}
          errorId={errorId}
          ariaLabel={label}
          minDate={min}
        />
      ) : (
        <input
          id={id}
          name={name || id}
          type={type}
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`w-full h-11 px-3.5 rounded-lg bg-white border text-xs sm:text-sm text-[#17252C] placeholder-[#8A9CA3] transition-colors duration-150 focus:outline-none ${
            hasError
              ? "border-[#D06060] focus:border-[#D06060]"
              : "border-[#DCE5E7] focus:border-[#17252C] focus:ring-1 focus:ring-[#17252C]/10"
          }`}
        />
      )}

      {hasError && (
        <p
          id={errorId}
          role="alert"
          className="text-[12px] text-[#C53030] font-normal mt-1"
        >
          {error}
        </p>
      )}
    </div>
  );
}
