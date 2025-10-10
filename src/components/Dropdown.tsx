import React, { useState, useEffect, useRef } from "react";

interface DropdownProps {
    id?: string;
    label: string;
    options: string[];
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
    id,
    label,
    options,
    value,
    placeholder,
    onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter options based on query
  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setHighlightedIndex(0);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) setOpen(true);

    switch (e.key) {

      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[highlightedIndex]) {
          onChange(filtered[highlightedIndex]);
          setQuery(filtered[highlightedIndex]);
          setOpen(false);
        }
        break;
        case "Tab":
            if (open) {
            const isShift = e.shiftKey;

            if ((isShift && (highlightedIndex === 0)) || (!isShift && (highlightedIndex === filtered.length - 1))) {
            setOpen(false);
            } else {
            e.preventDefault();
            setHighlightedIndex((prev) => prev + (isShift ? -1 : 1));
            }
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <input
        id={id}
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
          setOpen(true);
          setHighlightedIndex(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        className="px-2.5 py-2 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 peer"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className='absolute text-sm duration-300 bg-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1'
      >
        {label}
      </label>

      {open && filtered.length > 0 && (
        <ul className="absolute z-20 bg-white border border-gray-300 rounded-lg mt-1 w-full max-h-40 overflow-y-auto shadow-lg">
          {filtered.map((opt, index) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setQuery(opt);
                setOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`px-3 py-2 cursor-pointer ${
                index === highlightedIndex
                  ? "bg-blue-100 font-medium"
                  : "hover:bg-gray-100"
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
