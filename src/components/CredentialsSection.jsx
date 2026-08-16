import React, { useState, useEffect } from 'react';
import { getAssetUrl } from '../utils/assetUrl';

function CertificateMockup({ cert }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  const pngUrl = getAssetUrl(cert.pdf.replace('.pdf', '.png'));

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
      title="Click or hover to flip certificate"
    >
      <div className="flip-card-inner">
        {/* Front Side: Digital SVG Mockup */}
        <div className="flip-card-front relative border border-white/10 rounded-xl overflow-hidden bg-[#07122A] p-4 sm:p-6 shadow-2xl select-none">
          <div className="absolute inset-0 bg-[#0a142c] opacity-40"></div>
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #00F0FF 1px, transparent 0)',
            backgroundSize: '16px 16px'
          }}></div>
          <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-[#818cf8]/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <svg viewBox="0 0 600 400" className="w-full h-auto relative z-10">
            <rect width="600" height="400" fill="none" rx="8" />
            <rect x="15" y="15" width="570" height="370" rx="6" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="1.5" strokeOpacity="0.4" />
            <rect x="20" y="20" width="560" height="360" rx="4" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="0.5" strokeOpacity="0.15" />
            <path d="M 15 35 L 15 15 L 35 15" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="2.5" />
            <path d="M 585 35 L 585 15 L 565 15" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="2.5" />
            <path d="M 15 365 L 15 385 L 35 385" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="2.5" />
            <path d="M 585 365 L 585 385 L 565 385" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="2.5" />
            <text x="300" y="70" textAnchor="middle" fill="#8892B0" fontSize="10" fontFamily="monospace" letterSpacing="4">VERIFIED SECURE DIGITAL CREDENTIAL</text>
            <text x="300" y="110" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontFamily="serif" fontWeight="bold" letterSpacing="1">Certificate of Achievement</text>
            <text x="300" y="150" textAnchor="middle" fill="#8892B0" fontSize="10" fontFamily="sans-serif" letterSpacing="1">THIS IS PROUDLY PRESENTED TO</text>
            <text x="300" y="190" textAnchor="middle" fill={cert.accent || "#00F0FF"} fontSize="30" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1.5">KUMAR CHITRANSHU</text>
            <text x="300" y="230" textAnchor="middle" fill="#8892B0" fontSize="9" fontFamily="sans-serif" letterSpacing="0.5">FOR SUCCESSFULLY SATISFYING ALL REQUIREMENTS AND PRACTICAL EVALUATION IN</text>
            <text x="300" y="260" textAnchor="middle" fill="#E2E8F0" fontSize="15" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.5">{cert.title}</text>
            <line x1="60" y1="305" x2="540" y2="305" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <text x="60" y="330" fill="#8892B0" fontSize="9" fontFamily="monospace" letterSpacing="0.5">ISSUER // {cert.issuer.toUpperCase()}</text>
            <text x="60" y="350" fill="#8892B0" fontSize="9" fontFamily="monospace" letterSpacing="0.5">CREDENTIAL ID // {cert.code}</text>
            <g transform="translate(490, 312)">
              <circle cx="20" cy="20" r="22" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3,3" />
              <circle cx="20" cy="20" r="18" fill="rgba(0, 240, 255, 0.03)" stroke={cert.accent || "#00F0FF"} strokeWidth="1" strokeOpacity="0.3" />
              <path d="M 14 26 L 8 36 L 15 33 L 20 38 L 20 20 Z" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="1" strokeOpacity="0.4" />
              <path d="M 26 26 L 32 36 L 25 33 L 20 38 L 20 20 Z" fill="none" stroke={cert.accent || "#00F0FF"} strokeWidth="1" strokeOpacity="0.4" />
              <path d="M 20 13 L 22 17 L 26 18 L 23 21 L 24 25 L 20 23 L 16 25 L 17 21 L 14 18 L 18 17 Z" fill={cert.accent || "#00F0FF"} fillOpacity="0.75" />
            </g>
            <text x="530" y="375" textAnchor="end" fill="#64FFDA" fontSize="8" fontFamily="monospace" letterSpacing="1">SECURE AUDIT PATH VERIFIED</text>
          </svg>
        </div>

        {/* Back Side: Cloned Original PDF Document rendered as PNG */}
        <div className="flip-card-back relative rounded-xl overflow-hidden bg-[#0c162c] shadow-2xl flex items-center justify-center">
          {!imgError ? (
            <img 
              src={pngUrl}
              alt={`Original Certificate: ${cert.title}`}
              className="w-full h-full object-contain bg-[#07122A] z-10 relative"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="p-6 text-center space-y-3 z-10 select-none">
              <span className="material-symbols-outlined text-4xl text-[#00F0FF]">verified</span>
              <p className="font-headline font-bold text-white text-sm">{cert.title}</p>
              <p className="font-mono text-xs text-[#8892B0]">{cert.issuer}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] font-mono text-[11px]">
                Original Verified Document
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CredentialsSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState("google-data");

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [selectedCert]);

  const certifications = [
    {
      id: "google-data",
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      accent: "#00F0FF",
      icon: "verified",
      description: "Syllabus covering structured thinking, database cleaning in SQL, spreadsheet operations, exploratory data analysis, Tableau visualizations, R programming, and a custom business case study.",
      children: [
        {
          title: "Google Data Analytics Professional Certificate (Specialization)",
          issuer: "Google / Coursera",
          code: "GDA-PROF",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Google Data Analytics Professional Certificate — Google.pdf",
          skills: ["SQL", "Tableau", "R Programming", "Data Cleaning", "Data Visualization"],
          description: "Main specialization credential verifying capabilities across the 8 data analytics core modules, culminating in a detailed business case study report."
        },
        {
          title: "Foundations: Data, Data, Everywhere",
          issuer: "Google / Coursera",
          code: "GDA-FND",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Foundations_ Data_Data_ Everywhere.pdf",
          skills: ["Data Ecosystem", "Analytical Thinking", "Spreadsheets"],
          description: "Introduction to spreadsheets, data types, analytical structures, and modern database ecosystems."
        },
        {
          title: "Ask Questions to Make Data-Driven Decisions",
          issuer: "Google / Coursera",
          code: "GDA-ASK",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Ask Questions to Make Data-Driven Decisions.pdf",
          skills: ["KPI Definition", "Structured Thinking", "Communication"],
          description: "Focuses on metrics planning, asking operational questions, business requirements definitions, and defining target KPIs."
        },
        {
          title: "Prepare Data for Exploration",
          issuer: "Google / Coursera",
          code: "GDA-PREP",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Prepare Data for Exploration.pdf",
          skills: ["Data Credibility", "Database Schemas", "Metadata"],
          description: "Data storage techniques, verifying dataset bias, auditing data source reliability, and spreadsheet data prep."
        },
        {
          title: "Process Data from Dirty to Clean",
          issuer: "Google / Coursera",
          code: "GDA-PROC",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Process Data from Dirty to Clean.pdf",
          skills: ["Data Cleaning", "SQL (BigQuery)", "Data Integrity"],
          description: "Mastering advanced cleaning queries (filtering, trimming, CTE transformations, handling nulls) inside databases."
        },
        {
          title: "Analyze Data to Answer Questions",
          issuer: "Google / Coursera",
          code: "GDA-ANLY",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Analyze Data to Answer Questions.pdf",
          skills: ["SQL Aggregations", "Data Calculations", "Formatting"],
          description: "Applying SQL queries (JOINs, aggregations, CTEs) and formulas to calculate metrics and extract descriptive statistics."
        },
        {
          title: "Share Data Through the Art of Visualization",
          issuer: "Google / Coursera",
          code: "GDA-SHR",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Share Data Through the Art of Visualization.pdf",
          skills: ["Tableau", "Data Storytelling", "Dashboards"],
          description: "Designing dashboards and presentation decks using Tableau to communicate data insights to non-technical stakeholders."
        },
        {
          title: "Google Data Analytics Capstone: Complete a Case Study",
          issuer: "Google / Coursera",
          code: "GDA-CAP",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Google Data Analytics Capstone_ Complete a Case Study.pdf",
          skills: ["Portfolio Project", "Problem Solving", "Independent Analysis"],
          description: "A comprehensive project completing a real-world case study from scratch, including data cleaning, analysis, and dashboard delivery."
        },
        {
          title: "Accelerate Your Job Search with AI",
          issuer: "Google / Coursera",
          code: "GDA-AI",
          accent: "#00F0FF",
          pdf: "certificates/Courses/Google_Data_Analytics/Accelerate Your Job Search with AI.pdf",
          skills: ["Generative AI", "Resume Optimization", "Interview Prep"],
          description: "Covers utilizing Generative AI tools to optimize technical resumes, prepare portfolios, and practice technical case-study interviews."
        }
      ]
    },
    {
      id: "ibm-ml",
      title: "IBM Big Data & Machine Learning Specialization",
      issuer: "IBM / Coursera",
      accent: "#818cf8",
      icon: "settings_suggest",
      description: "Framework-level curriculum covering Hadoop HDFS querying, NoSQL database deployment (MongoDB/Cassandra), and building distributed Spark ML algorithms.",
      children: [
        {
          title: "IBM Big Data and Machine Learning Professional (Specialization)",
          issuer: "IBM / Coursera",
          code: "IBM-ML-PROF",
          accent: "#818cf8",
          pdf: "certificates/Courses/IBM/IBM(main).pdf",
          skills: ["Apache Spark", "Hadoop", "NoSQL", "Distributed ML"],
          description: "Main specialization credential verifying capability across the whole big data pipeline—ingesting data in Hadoop, storing in NoSQL, and scaling models in Spark."
        },
        {
          title: "Introduction to Big Data with Spark and Hadoop",
          issuer: "IBM / Coursera",
          code: "IBM-SPK",
          accent: "#818cf8",
          pdf: "certificates/Courses/IBM/Introduction to Big Data with Spark and Hadoop.pdf",
          skills: ["Apache Spark", "Hadoop", "MapReduce", "Hive"],
          description: "Introduction to distributed data architectures, HiveQL queries, MapReduce programming, and Spark cluster computing pipelines."
        },
        {
          title: "Introduction to NoSQL Databases",
          issuer: "IBM / Coursera",
          code: "IBM-NOSQL",
          accent: "#818cf8",
          pdf: "certificates/Courses/IBM/Introduction to NoSQL Databases.pdf",
          skills: ["MongoDB", "Cassandra", "Document Databases", "Wide-Column Stores"],
          description: "Hands-on database operations covering document databases (MongoDB) and wide-column datastores (Apache Cassandra)."
        },
        {
          title: "Machine Learning with Apache Spark",
          issuer: "IBM / Coursera",
          code: "IBM-ML-SPK",
          accent: "#818cf8",
          pdf: "certificates/Courses/IBM/Machine Learning with Apache Spark.pdf",
          skills: ["Spark MLlib", "Feature Engineering", "Model Evaluation"],
          description: "Deploying supervised/unsupervised machine learning classifiers on large-scale datasets using Spark MLlib pipelines."
        }
      ]
    },
    {
      id: "umich-py",
      title: "Python for Everybody Specialization",
      issuer: "University of Michigan",
      accent: "#f59e0b",
      icon: "school",
      description: "Acquired database engineering skills using SQL/SQLite, scraping web data, calling third-party REST APIs, and generating data visualizations.",
      children: [
        {
          title: "Python for Everybody Specialization (Main Certificate)",
          issuer: "University of Michigan",
          code: "UMICH-PY-PROF",
          accent: "#f59e0b",
          pdf: "certificates/Courses/University of Michigan(PYTHON)/Python for Everybody(main).pdf",
          skills: ["Python", "JSON/XML parsing", "SQLite", "Data Visualization"],
          description: "Validates comprehensive competencies across the 5 core Python sub-courses including basic programming logic, SQL databases, and web scraping."
        },
        {
          title: "Programming for Everybody (Getting Started with Python)",
          issuer: "University of Michigan",
          code: "UMICH-PY-BEG",
          accent: "#f59e0b",
          pdf: "certificates/Courses/University of Michigan(PYTHON)/Programming for Everybody_python.pdf",
          skills: ["Python Syntax", "Control Flow", "Functions"],
          description: "Basic programming concepts using Python, focusing on loops, functions, variables, and logic flow."
        },
        {
          title: "Python Data Structures",
          issuer: "University of Michigan",
          code: "UMICH-PY-DS",
          accent: "#f59e0b",
          pdf: "certificates/Courses/University of Michigan(PYTHON)/Python Data Structures.pdf",
          skills: ["Lists", "Dictionaries", "Tuples", "File I/O"],
          description: "Advanced Python data structures and operations to process text logs and clean unstructured flat files."
        },
        {
          title: "Using Python to Access Web Data",
          issuer: "University of Michigan",
          code: "UMICH-PY-WEB",
          accent: "#f59e0b",
          pdf: "certificates/Courses/University of Michigan(PYTHON)/Using Python to Access Web Data.pdf",
          skills: ["Web Scraping", "BeautifulSoup", "APIs", "XML/JSON"],
          description: "Constructing HTTP connections, scraping DOM elements using BeautifulSoup, and parsing JSON/XML payloads from RESTful APIs."
        },
        {
          title: "Using Databases with Python",
          issuer: "University of Michigan",
          code: "UMICH-PY-DB",
          accent: "#f59e0b",
          pdf: "certificates/Courses/University of Michigan(PYTHON)/Using Databases with Python.pdf",
          skills: ["SQLite", "Relational Databases", "Many-to-Many Relationships"],
          description: "Creating SQLite schemas, populating tables, and configuring join models and primary/foreign key connections."
        },
        {
          title: "Capstone: Retrieving, Processing, and Visualizing Data",
          issuer: "University of Michigan",
          code: "UMICH-PY-CAP",
          accent: "#f59e0b",
          pdf: "certificates/Courses/University of Michigan(PYTHON)/Capstone_Retrieving_Processing_ and Visualizing.pdf",
          skills: ["D3.js", "Data Wrangling", "Data Clustering"],
          description: "Aggregating raw web data, clean transforming using custom scripts, storing in relational SQL, and generating interactive D3.js visual charts."
        }
      ]
    },
    {
      id: "standalone",
      title: "Technical Electives & Standalone Courses",
      issuer: "NPTEL / Others",
      accent: "#64FFDA",
      icon: "psychology",
      description: "Rigorous academic and professional certifications in advanced machine learning, deep learning, paper writing, and global sustainability.",
      children: [
        {
          title: "Introduction to Machine Learning",
          issuer: "NPTEL",
          code: "NPTEL-ML-2024",
          accent: "#64FFDA",
          pdf: "certificates/Courses/Introduction to Machine Learning-NPTEL.pdf",
          skills: ["Neural Networks", "SVM", "Decision Trees", "ML Math"],
          description: "Rigorous academic certification verifying understanding of the mathematical and algorithmic foundations of classification, clustering, and regression models."
        },
        {
          title: "Deep Neural Network for Beginners Using Python",
          issuer: "Udemy / Online",
          code: "UDEMY-DNN",
          accent: "#64FFDA",
          pdf: "certificates/Courses/Deep Neural Network for Beginners Using Python.pdf",
          skills: ["Deep Learning", "Keras", "TensorFlow", "Neural Networks"],
          description: "Applied introduction to multi-layer perceptrons, backpropagation algorithms, Keras/TensorFlow model construction, and optimization."
        },
        {
          title: "Innovation Through Design Think, Make, Break, Repeat",
          issuer: "Coursera",
          code: "DESIGN-THINK",
          accent: "#64FFDA",
          pdf: "certificates/Courses/Innovation Through Design Think, Make, Break, Repeat.pdf",
          skills: ["Design Thinking", "Prototyping", "User Research"],
          description: "A credential focused on human-centered design frameworks, prototyping methodologies, and iterative testing strategies."
        },
        {
          title: "How to Write and Publish a Scientific Paper",
          issuer: "Coursera",
          code: "PAPER-WRITE",
          accent: "#64FFDA",
          pdf: "certificates/Courses/How to Write and Publish a Scientific Paper.pdf",
          skills: ["Technical Writing", "Academic Publishing", "Structure"],
          description: "Covers the formatting, structure, ethics, and publishing process for drafting high-impact technical manuscripts and data reports."
        },
        {
          title: "The Sustainable Development Goals",
          issuer: "Coursera",
          code: "SUSTAIN-GOAL",
          accent: "#64FFDA",
          pdf: "certificates/Courses/The Sustainable Development Goals.pdf",
          skills: ["Global Governance", "Sustainability", "Impact Analysis"],
          description: "Explores the 17 UN Sustainable Development Goals, analyzing environmental policy, resource management, and social impact variables."
        }
      ]
    },
    {
      id: "internship",
      title: "Professional Internships",
      issuer: "Prernagati",
      accent: "#38bdf8",
      icon: "badge",
      description: "Hands-on commercial credentials validating the deployment of data-driven models and machine learning pipelines in workplace environments.",
      children: [
        {
          title: "Machine Learning with Python (Prernagati Internship)",
          issuer: "Prernagati",
          code: "PRER-ML-INT",
          accent: "#38bdf8",
          pdf: "certificates/Internship/Machine-Learning-with-Python-Prernagati.pdf",
          skills: ["Model Pipelines", "Data Wrangling", "Scikit-Learn", "Feature Selection"],
          description: "Validates internship outputs including importing customer transactional tables, cleaning outliers, resolving class skewness, training scikit-learn models, and reporting parameters."
        }
      ]
    }
  ];

  const education = [
    {
      institution: "Chandigarh University",
      degree: "B.E., Computer Science & Engineering",
      period: "2022–2026",
      isPrimary: true,
      focus: "Specialization in Data Science, Algorithms & Distributed Computing"
    },
    {
      institution: "Jeewan Public School",
      degree: "Senior Secondary, Science (PCM)",
      period: "2021",
      isPrimary: false,
      focus: null
    },
    {
      institution: "Jeewan Public School",
      degree: "Secondary School Certificate",
      period: "2019",
      isPrimary: false,
      focus: null
    }
  ];

  return (
    <section 
      id="credentials" 
      className="relative py-28 max-w-7xl mx-auto px-6 md:px-12 z-10 border-t border-white/[0.06]"
    >
      <style>{`
        /* 3D Certificate Flipping Styles */
        .flip-card {
          background-color: transparent;
          perspective: 1200px;
          width: 100%;
          aspect-ratio: 600 / 400;
          cursor: pointer;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner,
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .flip-card-front {
          background-color: #07122A;
          z-index: 2;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          z-index: 1;
        }
      `}</style>

      <div className="space-y-12">
        
        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"></span>
            <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest">
              05 // Qualifications
            </span>
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#D9E2FF] tracking-tight">
            Credentials & Academics
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Hierarchical Certifications */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs text-[#8892B0] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00F0FF] text-sm">workspace_premium</span>
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {certifications.map((cat) => {
                const isExpanded = expandedCategory === cat.id;
                return (
                  <div 
                    key={cat.id} 
                    className={`glass-panel rounded-2xl overflow-hidden border transition-all duration-300 ${
                      isExpanded ? 'border-[#00F0FF]/30 bg-[#0F1B33]/20 shadow-[0_0_20px_rgba(0,240,255,0.04)]' : 'border-white/[0.06]'
                    }`}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left hover:bg-white/[0.01] transition-colors"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="p-2.5 rounded-lg bg-[#101B33] border border-white/10 text-[#00F0FF]">
                          <span className="material-symbols-outlined text-lg" style={{ color: cat.accent }}>
                            {cat.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-headline font-bold text-sm sm:text-base text-white leading-snug">
                            {cat.title}
                          </h4>
                          <p className="font-body text-xs text-[#8892B0] mt-0.5">
                            {cat.issuer} · {cat.children.length} credentials
                          </p>
                        </div>
                      </div>
                      <span 
                        className="material-symbols-outlined text-[#8892B0] transition-transform duration-300 select-none text-xl" 
                        style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      >
                        expand_more
                      </span>
                    </button>

                    {/* Accordion Content */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isExpanded ? 'max-h-[520px] overflow-y-auto border-t border-white/[0.06] p-4 space-y-2' : 'max-h-0'
                      }`}
                    >
                      {cat.children.map((child) => (
                        <div
                          key={child.title}
                          onClick={() => setSelectedCert(child)}
                          className="p-3.5 rounded-xl bg-[#090F1C]/75 hover:bg-[#101B33] border border-white/5 hover:border-[#00F0FF]/30 transition-all flex items-center justify-between gap-4 cursor-pointer group"
                        >
                          <div className="flex-1 min-w-0">
                            <h5 className="font-headline font-semibold text-sm text-[#D9E2FF] group-hover:text-[#00F0FF] transition-colors truncate">
                              {child.title}
                            </h5>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-mono text-[9px] text-[#8892B0] px-1.5 py-0.5 rounded bg-white/5 border border-white/[0.04]">
                                {child.code}
                              </span>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-[#8892B0] group-hover:text-white transition-all text-base translate-x-0 group-hover:translate-x-1 select-none">
                            chevron_right
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-mono text-xs text-[#8892B0] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00F0FF] text-sm">account_balance</span>
              <span>Academic Foundation</span>
            </h3>

            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.institution + edu.period}
                  className={`glass-panel p-6 rounded-xl transition-all ${
                    edu.isPrimary 
                      ? 'border-[#00F0FF]/40 bg-[#0F1B33]/80 shadow-[0_0_25px_rgba(0,240,255,0.1)]' 
                      : 'border-white/[0.06] opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className={`font-headline font-bold ${
                        edu.isPrimary ? 'text-lg sm:text-xl text-[#00F0FF]' : 'text-base text-white'
                      }`}>
                        {edu.institution}
                      </h4>
                      <p className="font-body text-sm text-[#CCD6F6] mt-0.5">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#8892B0] px-2.5 py-1 rounded bg-[#101B33] border border-white/5 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>

                  {edu.focus && (
                    <p className="font-mono text-xs text-[#8892B0] pt-2 border-t border-white/[0.06] mt-3">
                      {edu.focus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Certification Details & Snapshot Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#07122A]/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl glass-panel rounded-2xl pt-12 pb-6 px-5 sm:p-8 my-auto border border-[#00F0FF]/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-[#8892B0] hover:text-white transition-colors rounded-lg bg-[#101B33] border border-white/10"
              aria-label="Close Modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Header */}
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-2 pr-12" style={{ color: selectedCert.accent }}>
              {selectedCert.issuer}
            </span>
            <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mb-4 leading-tight pr-12">
              {selectedCert.title}
            </h3>

            {/* Detailed Description */}
            <p className="font-body text-[#C5C6CD] text-sm leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            {/* Competency Tags */}
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#D9E2FF] mb-3">
              Core Competencies Validated
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCert.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 font-mono text-xs text-[#CCD6F6]"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Digital Snapshot Section */}
            <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#D9E2FF] mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm" style={{ color: selectedCert.accent }}>screenshot_monitor</span>
                <span>Hover Card to Flip (Digital Badge vs Original PDF)</span>
              </div>
            </h4>
            
            <div className="mb-6 max-w-md mx-auto">
              <CertificateMockup cert={selectedCert} />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <a
                href={getAssetUrl(selectedCert.pdf)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full text-[#0A192F] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-white text-center transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: selectedCert.accent }}
              >
                <span>Inspect Full Screen PDF</span>
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2.5 rounded-full bg-[#101B33] border border-white/10 text-[#8892B0] hover:text-white font-mono text-xs uppercase tracking-wider transition-all"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
