import React from 'react';
import './Courses.css'; 

const Courses = () => {
  return (
    <div className="courses-section">
      <h2 className="courses-title">Courses Offered</h2>
      <div className="courses-container">
        <div className="course-card">
          <h3>Grade 10</h3>
          <p>Comprehensive curriculum for Grade 10, preparing students for their exams.</p>
        </div>
        <div className="course-card">
          <h3>Grade 11</h3>
          <p>In-depth courses covering essential topics for Grade 11 students.</p>
        </div>
        <div className="course-card">
          <h3>Grade 12</h3>
          <p>Advanced curriculum designed to help Grade 12 students excel in their finals.</p>
        </div>
        <div className="course-card">
          <h3>Entrance</h3>
          <p>Specialized coaching for entrance exams to ensure success.</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
