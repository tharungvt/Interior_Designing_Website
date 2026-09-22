import { useState, useRef, useEffect, useMemo } from "react";

/**
 * CustomDatePicker
 *
 * Premium architectural custom React date-picker tailored for Indian date format (DD-MM-YYYY).
 * Replaces native browser/Windows calendar entirely.
 *
 * Visual & functional specifications:
 * - White background with thin cool-gray border (#DCE5E7)
 * - Dark navy/charcoal typography (#17252C)
 * - Pale blue-gray (#F1F5F4 / #E8EFF1) as subtle accent and hover states
 * - Selected date in deep charcoal/navy (#17252C) with clean white text
 * - No bright blues, cyan, pure black, or default browser calendar chrome
 * - Clean month/year navigation with left (<) and right (>) arrow controls
 * - 7-column calendar grid (Mon - Sun or Sun - Sat, standard Mon - Sun or Sun - Sat format)
 * - Dates before today disabled
 * - Accessible keyboard navigation & Escape to close
 * - Click-outside dismiss
 * - Full ARIA attributes
 */

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// Helper: parse "DD-MM-YYYY" or "YYYY-MM-DD" into Date object or null
function parseDateString(str) {
  if (!str || typeof str !== "string") return null;
  const trimmed = str.trim();

  // Try DD-MM-YYYY
  const ddmmyyyyMatch = trimmed.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (ddmmyyyyMatch) {
    const day = parseInt(ddmmyyyyMatch[1], 10);
    const month = parseInt(ddmmyyyyMatch[2], 10) - 1;
    const year = parseInt(ddmmyyyyMatch[3], 10);
    const date = new Date(year, month, day);
    if (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    ) {
      return date;
    }
  }

  // Fallback: YYYY-MM-DD
  const yyyymmddMatch = trimmed.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (yyyymmddMatch) {
    const year = parseInt(yyyymmddMatch[1], 10);
    const month = parseInt(yyyymmddMatch[2], 10) - 1;
    const day = parseInt(yyyymmddMatch[3], 10);
    const date = new Date(year, month, day);
    if (
      date.getFullYear() === year &&
      date.getMonth() === month &&
      date.getDate() === day
    ) {
      return date;
    }
  }

  return null;
}

// Format date to DD-MM-YYYY
function formatDateToDDMMYYYY(date) {
  if (!date) return "";
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}-${m}-${y}`;
}

export default function CustomDatePicker({
  id,
  name,
  value, // DD-MM-YYYY format
  onChange,
  onBlur,
  placeholder = "DD-MM-YYYY",
  error = false,
  errorId,
  ariaLabel,
  className = "",
  minDate = new Date(), // defaults to today (midnight)
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const calendarRef = useRef(null);

  // Normalize minDate to start of day
  const normalizedMinDate = useMemo(() => {
    let d;
    if (minDate instanceof Date) {
      d = new Date(minDate);
    } else if (typeof minDate === "string") {
      d = parseDateString(minDate) || new Date();
    } else {
      d = new Date();
    }
    d.setHours(0, 0, 0, 0);
    return d;
  }, [minDate]);

  // Selected date parsed
  const selectedDate = useMemo(() => parseDateString(value), [value]);

  // Viewing month/year in calendar view
  const [viewDate, setViewDate] = useState(() => {
    const parsed = parseDateString(value);
    if (parsed) {
      return new Date(parsed.getFullYear(), parsed.getMonth(), 1);
    }
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });

  const handleOpen = () => {
    if (!isOpen && selectedDate) {
      setViewDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
    }
    setIsOpen((prev) => !prev);
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        if (onBlur) {
          onBlur({ target: { name: name || id, value } });
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onBlur, name, id, value]);

  // Month navigation
  const handlePrevMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // Check if prev month should be disabled (cannot go before minDate's month)
  const isPrevMonthDisabled = useMemo(() => {
    const firstOfCurrent = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
    const firstOfMin = new Date(
      normalizedMinDate.getFullYear(),
      normalizedMinDate.getMonth(),
      1
    );
    return firstOfCurrent <= firstOfMin;
  }, [viewDate, normalizedMinDate]);

  // Calendar days calculation
  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    // First day of current month (0: Sun, 1: Mon, ... 6: Sat)
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Days from previous month to fill leading slots
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const prevMonthDays = [];
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      prevMonthDays.push({
        date: new Date(year, month - 1, daysInPrevMonth - i),
        isCurrentMonth: false,
        disabled: true,
      });
    }

    // Days of current month
    const currentMonthDays = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(year, month, day);
      d.setHours(0, 0, 0, 0);
      const isPast = d < normalizedMinDate;
      currentMonthDays.push({
        date: d,
        isCurrentMonth: true,
        disabled: isPast,
      });
    }

    // Days of next month to fill remaining slots (always 35 or 42 grid cells)
    const totalSlots = prevMonthDays.length + currentMonthDays.length;
    const remainingSlots = (7 - (totalSlots % 7)) % 7;
    const nextMonthDays = [];
    for (let i = 1; i <= remainingSlots; i++) {
      nextMonthDays.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        disabled: true,
      });
    }

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [viewDate, normalizedMinDate]);

  // Select day handler
  const handleSelectDate = (dateObj) => {
    if (dateObj.disabled) return;
    const formatted = formatDateToDDMMYYYY(dateObj.date);
    if (onChange) {
      onChange({ target: { name: name || id, value: formatted } });
    }
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Keyboard navigation on trigger button and inside calendar popup
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (!isOpen && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div
      ref={containerRef}
      className={`relative w-full form-field-select ${className}`}
    >
      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        id={id}
        name={name || id}
        role="combobox"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={`${id}-calendar-popup`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        aria-label={ariaLabel || "Select preferred consultation date (DD-MM-YYYY)"}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (!isOpen && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
            e.preventDefault();
            handleOpen();
          } else {
            handleKeyDown(e);
          }
        }}
        className={`flex items-center justify-between w-full h-11 px-3.5 rounded-lg bg-white border text-xs sm:text-sm text-left transition-colors duration-150 cursor-pointer select-none appearance-none focus:outline-none ${
          error
            ? "border-[#D06060] focus:border-[#D06060]"
            : "border-[#DCE5E7] hover:border-[#B5C4C9] focus:border-[#17252C] focus:ring-1 focus:ring-[#17252C]/10"
        }`}
      >
        <span
          className={`truncate tracking-wide ${
            !value ? "text-[#8A9CA3]" : "text-[#17252C] font-normal"
          }`}
        >
          {value || placeholder}
        </span>

        {/* Elegant Calendar Icon */}
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          <svg
            className={`w-4 h-4 transition-colors duration-150 ${
              isOpen ? "text-[#17252C]" : "text-[#5F747D]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </button>

      {/* Calendar Overlay Popup */}
      {isOpen && (
        <div
          ref={calendarRef}
          id={`${id}-calendar-popup`}
          role="dialog"
          aria-modal="true"
          aria-label="Calendar date picker"
          onKeyDown={handleKeyDown}
          className="absolute z-40 left-0 mt-1 w-full sm:w-[310px] bg-white border border-[#DCE5E7] rounded-xl shadow-lg p-3.5 focus:outline-none animate-fadeIn select-none"
        >
          {/* Calendar Header: Month/Year and navigation arrows */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E8EFF1]">
            <div className="flex items-baseline gap-1.5 pl-1">
              <span className="font-editorial text-sm sm:text-[15px] font-bold tracking-tight text-[#17252C]">
                {MONTH_NAMES[viewDate.getMonth()]}
              </span>
              <span className="text-xs font-semibold text-[#5F747D]">
                {viewDate.getFullYear()}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                disabled={isPrevMonthDisabled}
                aria-label="Previous month"
                className={`p-1.5 rounded-md transition-colors ${
                  isPrevMonthDisabled
                    ? "text-[#DCE5E7] cursor-not-allowed"
                    : "text-[#17252C] hover:bg-[#F1F5F4] active:bg-[#E8EFF1] cursor-pointer"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNextMonth}
                aria-label="Next month"
                className="p-1.5 rounded-md text-[#17252C] hover:bg-[#F1F5F4] active:bg-[#E8EFF1] transition-colors cursor-pointer"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Weekday column labels */}
          <div
            className="grid grid-cols-7 gap-1 text-center mb-1.5"
            aria-hidden="true"
          >
            {WEEKDAY_NAMES.map((weekday) => (
              <span
                key={weekday}
                className="text-[10.5px] font-bold tracking-wider uppercase text-[#8A9CA3] py-1"
              >
                {weekday}
              </span>
            ))}
          </div>

          {/* 7-Column Date Grid */}
          <div
            role="grid"
            aria-label="Days of the month"
            className="grid grid-cols-7 gap-1 text-center"
          >
            {calendarDays.map((dayObj, index) => {
              const isSelected = selectedDate && isSameDay(dayObj.date, selectedDate);
              const isToday = isSameDay(dayObj.date, today);
              const dateNumber = dayObj.date.getDate();

              return (
                <button
                  key={`${dayObj.date.toISOString()}-${index}`}
                  type="button"
                  role="gridcell"
                  disabled={dayObj.disabled}
                  aria-disabled={dayObj.disabled}
                  aria-selected={isSelected}
                  aria-label={`${dateNumber} ${
                    MONTH_NAMES[dayObj.date.getMonth()]
                  } ${dayObj.date.getFullYear()}`}
                  onClick={() => handleSelectDate(dayObj)}
                  className={`h-8 w-full rounded-md text-xs font-medium flex items-center justify-center transition-colors duration-150 ${
                    isSelected
                      ? "bg-[#17252C] text-white font-semibold shadow-sm"
                      : dayObj.disabled
                      ? "text-[#DCE5E7] cursor-not-allowed bg-transparent"
                      : !dayObj.isCurrentMonth
                      ? "text-[#8A9CA3] cursor-not-allowed bg-transparent"
                      : isToday
                      ? "text-[#17252C] font-semibold bg-[#F1F5F4] hover:bg-[#E8EFF1] cursor-pointer"
                      : "text-[#17252C] hover:bg-[#F1F5F4] active:bg-[#E8EFF1] cursor-pointer"
                  }`}
                >
                  {dateNumber}
                </button>
              );
            })}
          </div>

          {/* Minimal architectural footer footnote */}
          <div className="mt-3 pt-2.5 border-t border-[#E8EFF1] flex items-center justify-between text-[11px] text-[#5F747D]">
            <span className="font-mono text-[10.5px] uppercase tracking-wider">DD-MM-YYYY</span>
            <span className="text-[10.5px]">Select an available date</span>
          </div>
        </div>
      )}
    </div>
  );
}
