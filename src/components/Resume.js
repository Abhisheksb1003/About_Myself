import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

function Resume() {
  return (
    <div className="container mt-5 text-center">
      <h2>My Resume</h2>
      <div className="resume-pdf-container">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
          <Viewer fileUrl="/Abhishek_S_B_Resume.pdf" />
        </Worker>
      </div>
    </div>
  );
}

export default Resume;
