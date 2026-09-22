import { useState, useRef, useEffect, useCallback } from "react";

export default function CustomSelect({
  id,
  name,
  value,
  options = [],
  onChange,
  onBlur,
  placeholder = "Select an option",
  error = false,
  errorId,
  ariaLabel,
  className = "",
  compact = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const listboxRef = useRef(null);

  const selectedIndex = options.findIndex((opt) => opt.value === value);
  const selectedOption = selectedIndex >= 0 ? options[selectedIndex] : null;

  const currentHighlighted =
    highlightedIndex >= 0
      ? highlightedIndex
      : selectedIndex >= 0
      ? selectedIndex
      : 0;

  // Click outside to close
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
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
  }, [isOpen, name, id, value, onBlur]);

  const selectOption = useCallback(
    (opt) => {
      onChange({ target: { name: name || id, value: opt.value } });
      setIsOpen(false);
      setHighlightedIndex(-1);
      buttonRef.current?.focus();
    },
    [id, name, onChange]
  );

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        setIsOpen(true);
        setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        buttonRef.current?.focus();
        break;
      case "Tab":
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const base = prev >= 0 ? prev : selectedIndex >= 0 ? selectedIndex : 0;
          return base < options.length - 1 ? base + 1 : 0;
        });
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => {
          const base = prev >= 0 ? prev : selectedIndex >= 0 ? selectedIndex : 0;
          return base > 0 ? base - 1 : options.length - 1;
        });
        break;
      case "Home":
        e.preventDefault();
        if (options.length > 0) setHighlightedIndex(0);
        break;
      case "End":
        e.preventDefault();
        if (options.length > 0) setHighlightedIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (currentHighlighted >= 0 && options[currentHighlighted]) {
          selectOption(options[currentHighlighted]);
        }
        break;
      default: {
        // Simple printable character navigation / jump-to-letter
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const char = e.key.toLowerCase();
          const nextMatchIdx = options.findIndex((opt, idx) => {
            if (idx <= currentHighlighted) return false;
            return (opt.label || "").toLowerCase().startsWith(char);
          });
          const matchIdx =
            nextMatchIdx !== -1
              ? nextMatchIdx
              : options.findIndex((opt) =>
                  (opt.label || "").toLowerCase().startsWith(char)
                );
          if (matchIdx !== -1) {
            setHighlightedIndex(matchIdx);
          }
        }
        break;
      }
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && listboxRef.current && currentHighlighted >= 0) {
      const activeEl = listboxRef.current.children[currentHighlighted];
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [isOpen, currentHighlighted]);

  return (
    <div
      ref={containerRef}
      className={`relative ${compact ? "h-full" : "w-full"} ${className}`}
    >
      <button
        ref={buttonRef}
        type="button"
        id={id}
        name={name || id}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-activedescendant={
          isOpen && currentHighlighted >= 0
            ? `${id}-opt-${currentHighlighted}`
            : undefined
        }
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        aria-label={ariaLabel}
        onClick={() => {
          setIsOpen((prev) => {
            const next = !prev;
            if (next) {
              setHighlightedIndex(selectedIndex >= 0 ? selectedIndex : 0);
            } else {
              setHighlightedIndex(-1);
            }
            return next;
          });
        }}
        onKeyDown={handleKeyDown}
        className={
          compact
            ? "flex items-center justify-between gap-1.5 h-full px-3.5 bg-white border border-[#DCE5E7] rounded-md text-xs font-semibold uppercase tracking-wider text-[#17252C] focus:outline-none focus:border-[#17252C] focus:ring-1 focus:ring-[#17252C]/10 cursor-pointer select-none appearance-none"
            : `flex items-center justify-between w-full h-11 px-3.5 rounded-lg bg-white border text-xs sm:text-sm text-left transition-colors duration-150 cursor-pointer select-none appearance-none focus:outline-none ${
                error
                  ? "border-[#D06060] focus:border-[#D06060]"
                  : "border-[#DCE5E7] hover:border-[#B5C4C9] focus:border-[#17252C] focus:ring-1 focus:ring-[#17252C]/10"
              }`
        }
      >
        <span
          className={`truncate ${
            !selectedOption ? "text-[#8A9CA3]" : "text-[#17252C] font-normal"
          } ${compact ? "font-semibold text-xs" : ""}`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#5F747D] transition-transform duration-200 shrink-0 ml-1.5 ${
            isOpen ? "rotate-180 text-[#17252C]" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Custom Options Listbox Menu */}
      {isOpen && (
        <ul
          ref={listboxRef}
          id={`${id}-listbox`}
          role="listbox"
          tabIndex={-1}
          aria-label={ariaLabel || placeholder}
          className={`absolute z-30 left-0 mt-1 max-h-60 overflow-y-auto bg-white border border-[#DCE5E7] rounded-lg shadow-md py-1 focus:outline-none animate-fadeIn ${
            compact ? "w-28 right-0 left-auto" : "w-full"
          }`}
        >
          {options.map((opt, idx) => {
            const isSelected = opt.value === value;
            const isHighlighted = idx === currentHighlighted;

            return (
              <li
                key={opt.value}
                id={`${id}-opt-${idx}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => selectOption(opt)}
                onMouseEnter={() => setHighlightedIndex(idx)}
                className={`flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm text-[#17252C] cursor-pointer transition-colors duration-150 select-none ${
                  isSelected
                    ? "bg-[#F1F5F4] font-medium"
                    : isHighlighted
                    ? "bg-[#F7F9F9]"
                    : "bg-white"
                } hover:bg-[#F1F5F4]`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <svg
                    className="w-3.5 h-3.5 text-[#17252C] shrink-0 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
