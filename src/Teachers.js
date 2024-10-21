import React from 'react';
import './Teachers.css'; // Import your CSS file

const teachers = [
  {
    name: 'John Doe',
    subject: 'Mathematics',
    description: 'An experienced mathematics teacher with a passion for numbers.',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
  },
  {
    name: 'Jane Smith',
    subject: 'Physics',
    description: 'Physics enthusiast with over 10 years of teaching experience.',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Michael Henry',
    subject: 'Chemistry',
    description: 'Chemistry enthusiast with over 10 years of teaching experience.',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    name: 'Dawn Stokes',
    subject: 'Social',
    description: 'Social enthusiast with over 10 years of teaching experience.',
    image: 'https://randomuser.me/api/portraits/men/56.jpg',
  },
  
];

const Teachers = () => {
  return (
    <div className="teachers-section">
      <h2 className='teachers-title'>Our Teachers</h2>
      <div className="teachers-container">
        {teachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <img src={teacher.image} alt={teacher.name} className="teacher-image" />
            <h3>{teacher.name}</h3>
            <p>{teacher.subject}</p>
            <p>{teacher.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
