import { useState, useRef, useLayoutEffect, useEffect, type ReactNode } from "react";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  className?: string;
  hover?: string;
  expanded?: boolean;
  teaser?: React.ReactNode
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  className,
  hover,
  expanded = false,
  teaser,
}) => {
  const [isOpen, setIsOpen] = useState(expanded ?? false);
  const [height, setHeight] = useState<string | undefined>(expanded ? "auto" : "0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(expanded!);
  }, [expanded]);

  const toggle = () => {
    if (!contentRef.current) return;

    if (isOpen) {
      // Collapse: set explicit height then animate to 0
      setHeight(`${contentRef.current.scrollHeight}px`);
      requestAnimationFrame(() => setHeight("0px"));
    } else {
      // Expand: set explicit height then animate to auto
      setHeight(`${contentRef.current.scrollHeight}px`);
    }
    setIsOpen(!isOpen);
  };

  // When expanding completes, set height to auto for nested collapsibles
  useLayoutEffect(() => {
    if (!isOpen) return;
    const el = contentRef.current;
    if (!el) return;

    const handleTransitionEnd = () => {
      if (isOpen) setHeight("auto");
    };

    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [isOpen]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div className="flex items-center">
        <button
          onClick={toggle}
          className={`${hover ?? 'hover:underline'} flex items-center px-2`}
        >
          <div className={`${hover ?? 'hover:underline'} pr-2`}>{title}</div>
          <div>
              <div className={`inline-block transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
              ▾
              </div>
          </div>
        </button>
        <div
  className={`transition-discrete duration-500 transform ${
    isOpen ? 'grow' : 'grow-0'
  }`}
>
  {teaser}
</div>


      </div>

      <div
        ref={contentRef}
        style={{ height }}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
      >
        <div className="p-2 px-4">{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
