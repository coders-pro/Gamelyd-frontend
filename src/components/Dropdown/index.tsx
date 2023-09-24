import React, { useEffect, useRef, useState } from "react";
import { Div } from "./style";
import { motion } from "framer-motion";
import arrowDown from "../../assets/icons/arrow_down.svg";

type IProp = {
  //   message: string
  options: string[];
};

const Dropdown = (props: IProp): any => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.options[0]);
  const elementRef: any = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.classList.add("fade-in");
    }
  }, [elementRef]);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.classList.remove("fade-in");
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Div>
      <div className={`dropdown ${isOpen ? "open" : ""}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedOption}{" "}
          <img className="icn" src={arrowDown} alt="arrow down" />
        </div>
        <div className="options">
          {isOpen && (
            <motion.div
              animate={{
                opacity: isOpen ? 1 : 0,
                transition: {
                  duration: 5,
                  ease: "easeInOut",
                },
              }}
              style={{
                opacity: 1,
              }}
            >
              <div
                className={`dropdown-options fader ${isOpen ? "fade-in" : ""}`}
                ref={elementRef}
              >
                {props.options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionSelect(option)}
                    className="dropdown-option"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Div>
  );
};

export default Dropdown;
