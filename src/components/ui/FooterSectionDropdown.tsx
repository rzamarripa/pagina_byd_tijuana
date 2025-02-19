"use client";
import React, { useState } from "react";
import { FaPlus, FaX } from "react-icons/fa6";
import { cn } from "@/lib";

interface FooterSectionDropdownProps {
  title: string;
  component: React.ReactNode;
  className?: string;
}

const FooterSectionDropdown = ({
  title,
  component,
  className,
}: FooterSectionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const iconClass =
    "absolute top-0 left-0 w-full h-full cursor-pointer transform transition-all duration-500 ease-in-out ml-2 mb-1";

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between" onClick={handleToggle}>
        <span>{title}</span>
        <div className="relative w-[0.75rem] h-[0.75rem] font-normal text-xs img:hidden">
          <FaPlus
            className={cn(
              iconClass,
              isOpen
                ? "opacity-0 scale-0 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            )}
          />
          <FaX
            className={cn(
              iconClass,
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-0 rotate-90"
            )}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={cn(
            "img:hidden mt-1 font-normal text-xs px-2.5 overflow-hidden",
            isOpen ? "dropdown-enter" : ""
          )}
        >
          {component}
        </div>
      )}
      <div className="hidden mt-1 font-normal text-xs img:block">
        {component}
      </div>
    </div>
  );
};

export default FooterSectionDropdown;
