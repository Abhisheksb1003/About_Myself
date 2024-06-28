import React from 'react';

function Projects() {
  return (
    <div className="container mt-5">
      <h2>Projects</h2>
      <ul>
        <li>
          <h5>MailBox Client</h5>
          <p>Designed a React.js based email application with Firebase backend, featuring user-friendly authentication, inbox, sent, and compose functionalities.</p>
          <a href="https://github.com/Abhisheksb1003/Mail-box" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <h5>E-commerce Website</h5>
          <p>Created a React.js based e-commerce app utilizing Firebase for user authentication, real-time cart functionality, and CRUD operations for product management.</p>
          <a className="mb-3" href="https://github.com/Abhisheksb1003/E-commerce-app" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <h5>Expense-Tracker</h5>
          <p>Developed a React.js based expense tracker with Firebase backend for seamless spending management and secure user authentication.</p>
          <a href="https://github.com/Abhisheksb1003/Expense-tracker-app" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <h5>Restaurant Website</h5>
          <p>Here we can add and remove the items and also we can see what items are there in the Restaurant and its price.</p>
          <a href="https://github.com/Abhisheksb1003/Restaurant-Website" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <h5>Contact Manager Website Using React JS, Express JS & Node JS</h5>
          <p>Here we can add and remove the Manager  information and also we can see the information of the individual Manager.</p>
          <a href="https://github.com/Abhisheksb1003/Contact-Manager_FullStack" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
