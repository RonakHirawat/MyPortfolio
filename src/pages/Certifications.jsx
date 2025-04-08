import React from 'react';
// Import your certification images
import ibmMLCert from '../assets/ML.jpg';
import metaDBCert from '../assets/Dbms.jpg';
import londonCppCert from '../assets/CPP.jpg';
import udemyCCert from '../assets/udemy.png';

const Certifications = () => {
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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Certifications</h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-indigo-600">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image container */}
                <div className="w-full md:w-1/4 flex-shrink-0">
                  <img 
                    src={cert.image} 
                    alt={`${cert.title} certification`}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                
                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{cert.title}</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Certifications;