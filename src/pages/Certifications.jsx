"use client";
import { cn } from "../lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName
}) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-full w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

// Certification Component Starts Below

import ibmMLCert from '../assets/ML.jpg';
import metaDBCert from '../assets/Dbms.jpg';
import londonCppCert from '../assets/CPP.jpg';
import udemyCCert from '../assets/udemy.png';

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "IBM - Coursera",
      date: "2024",
      description: "Completed a comprehensive machine learning course covering supervised and unsupervised learning techniques.",
      image: ibmMLCert
    },
    {
      title: "Database Management Systems Certification",
      issuer: "Meta - Coursera",
      date: "2025",
      description: "In-depth certification covering core DBMS concepts such as relational databases, SQL, normalization, indexing, and transaction management.",
      image: metaDBCert
    },
    {
      title: "C++ Programming Certification",
      issuer: "University of London - Coursera",
      date: "2024",
      description: "Comprehensive certification covering object-oriented programming in C++, including data structures, memory management, STL, and algorithm implementation.",
      image: londonCppCert
    },
    {
      title: "C Programming Certification",
      issuer: "Udemy",
      date: "2023",
      description: "Fundamental certification focused on procedural programming in C, covering syntax, pointers, memory management, and data structures.",
      image: udemyCCert
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">Certifications</h2>

      <div className="space-y-4 sm:space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-indigo-600">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="w-full sm:w-1/4 flex-shrink-0">
                <CardContainer className="inter-var">
                  <CardBody className="bg-transparent relative group/card">
                    <CardItem translateZ="20" className="w-full">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certification`}
                        className="w-full h-auto object-contain rounded-lg shadow-lg cursor-pointer"
                        onClick={() => setSelectedImage(cert.image)}
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 mb-2 text-sm sm:text-base">
                  <span>{cert.issuer}</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span>{cert.date}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for image zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged certification"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl transition-transform transform scale-85 hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
