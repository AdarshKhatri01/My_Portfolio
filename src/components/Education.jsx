"use client"
import { useState } from "react";
import { X, ChevronDown, ChevronUp, Award, BookOpen, MapPin, Calendar } from "lucide-react";
import styles from "./Education.module.css";
import IIITU from "../assets/IIITU.png";
import AKTU from "../assets/AKTU.png";
import SVM from "../assets/SVM.webp";
import JKG from '../assets/JKG.webp';

const educationData = [
  {
    institution: "Indian Institue Of Information Technology Una",
    logo: IIITU,
    years: "2024-2026",
    degree: "M.Tech, CSE with Specialization in Data Science",
    location: "Una, Himachal Pradesh",
    cgpa: "7.36",
    semesters: [
      { name: "Semester 1", sgpa: "7.36" }
    ]
  },
  {
    institution: "Dr. A.P.J. Abdul Kalam Technical University UP",
    logo: AKTU,
    years: "2018-2022",
    degree: "B.Tech, Computer Science and Engineering",
    location: "Ghaziabad, Uttar Pradesh",
    cgpa: "8.28",
    semesters: [
      { name: "Semester 1", sgpa: "9.4" },
      { name: "Semester 2", sgpa: "8.66" },
      { name: "Semester 3", sgpa: "8.27" },
      { name: "Semester 4", sgpa: "8.67" },
      { name: "Semester 5", sgpa: "7.32" },
      { name: "Semester 6", sgpa: "8.57" },
      { name: "Semester 7", sgpa: "7.39" },
      { name: "Semester 8", sgpa: "8.00" },
    ]
  },
  {
    institution: "D.H.R.T. Saraswati Viday Mandir, Nehru Nagar",
    logo: SVM,
    years: "2016-2018",
    stream: "PCM",
    location: "Ghaziabad, Uttar Pradesh",
    cgpa: "8.06",
    subjects: [
      { name: "Computer Science", total: "91" },
      { name: "English Core", total: "79" },
      { name: "Physics", total: "78" },
      { name: "Chemistry", total: "78" },
      { name: "Mathematics", total: "77" }
    ],
    marks: "403 / 500",
  },
  {
    institution: "J.K.G. Senior Secondary School, Vijay Nagar",
    logo: JKG,
    years: "2014-2016",
    location: "Ghaziabad, Uttar Pradesh",
    subjects: [
      { name: "English Communication", total: "9" },
      { name: "Hindi", total: "8" },
      { name: "Mathematics", total: "8" },
      { name: "Science", total: "8" },
      { name: "Social Studies", total: "8" }
    ],
    cgpa: "8.2",
  },
];

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isSemesterExpanded, setIsSemesterExpanded] = useState(false);

  return (
    <section id="education" className={styles.education}>
      <h2 className="section-title">Education</h2>
      <div className={styles.timeline}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.timelineItem} onClick={() => setSelectedEducation(edu)}>
            <div className={styles.timelineContent}>
              <h3>{edu.institution}</h3>
              {edu.degree && <h4>{edu.degree}</h4>}
              {edu.stream && <h4>{edu.stream}</h4>}
              <p><MapPin size={14} className="inline mr-1" /> {edu.location}</p>
              <p className={styles.years}><Calendar size={14} className="inline mr-1" /> {edu.years}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEducation && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={() => {
              setSelectedEducation(null);
              setIsSemesterExpanded(false);
            }}>
              <X size={24} />
            </button>
            <div className={styles.modalGrid}>
              <div className={styles.institutionInfo}>
                {selectedEducation.logo && (
                  <div className={styles.institutionIcon}>
                    <img src={selectedEducation.logo} alt="Institution" width={64} height={64} />
                  </div>
                )}
                {!selectedEducation.logo && (
                  <div className={styles.institutionIcon}>
                    <BookOpen size={40} color="#00ffff" />
                  </div>
                )}
                <h2>{selectedEducation.institution}</h2>
                <p className={styles.years}><Calendar size={16} className="inline mr-1" /> {selectedEducation.years}</p>
                <p><MapPin size={16} className="inline mr-1" /> {selectedEducation.location}</p>
              </div>

              <div className={styles.educationDetails}>
                {selectedEducation.degree && (
                  <div className={styles.section}>
                    <h3><Award size={18} className="inline" /> Degree</h3>
                    <p>{selectedEducation.degree}</p>
                  </div>
                )}

                {selectedEducation.stream && (
                  <div className={styles.section}>
                    <h3><BookOpen size={18} className="inline" /> Stream</h3>
                    <p>{selectedEducation.stream}</p>
                  </div>
                )}

                {selectedEducation.cgpa && (
                  <div className={styles.section}>
                    <h3><Award size={18} className="inline" /> Academic Performance</h3>
                    <p className={styles.cgpa}>Current CGPA: {selectedEducation.cgpa}</p>
                    {selectedEducation.semesters ? (
                      <div className={styles.semesterSection}>
                        <button className={styles.semesterToggle} onClick={() => setIsSemesterExpanded(!isSemesterExpanded)}>
                          <span>Semester-wise SGPA</span>
                          {isSemesterExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {isSemesterExpanded && selectedEducation.semesters && (
                          <div className={styles.semesterList}>
                            {selectedEducation.semesters.map((semester, index) => (
                              <div key={index} className={styles.semesterItem}>
                                <span>{semester.name}</span>
                                <span>{semester.sgpa}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className={styles.semesterSection}>
                        <button className={styles.semesterToggle} onClick={() => setIsSemesterExpanded(!isSemesterExpanded)}>
                          <span>Subject-wise Grade</span>
                          {isSemesterExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {isSemesterExpanded && selectedEducation.subjects && (
                          <div className={styles.semesterList}>
                            {selectedEducation.subjects.map((subject, index) => (
                              <div key={index} className={styles.semesterItem}>
                                <span>{subject.name}</span>
                                <span>{subject.total}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {selectedEducation.marks && (
                  <div className={styles.section}>
                    <h3><Award size={18} className="inline" /> Marks</h3>
                    <p>{selectedEducation.marks}</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;