import React from "react";
import "./styles/Home.css"; 

export default function Home() {
  return (
    <div className="homepage">
      <div className="card">
        <h1>Event Booking System</h1>
        <p>
          This project is a <strong>Microservices-Based Online Event Booking Platform</strong>  
          that allows users to register, browse events, book tickets, and receive notifications.  
          It is integrated with <strong>Jira</strong> for project tracking and <strong>GitHub</strong> for version control.  

          The platform is containerized using <strong>Docker</strong>, allowing for consistent deployment across different environments.  
          <strong>Docker Compose</strong> is used for local development, enabling multi-container orchestration and easy service management.  
          For production and scalability, the system is deployed on a <strong>Kubernetes cluster</strong>,  
          ensuring high availability, load balancing, and automated service management.
        </p>
      </div>

      <div className="team">
        <h2>Team Members</h2>
        <p><strong>Name:</strong> Hamza Ahmed | <strong>Roll No:</strong> 22I-1339</p>
        {/* <p><strong>Name:</strong> Tauha Imran | <strong>Roll No:</strong> 22I-1239</p> */}
      </div>

      <div className="links">
        <h2>Project Links</h2>
        <a href="https://github.com/HamzaSidd17/CS4067-A2-I221339-Hamza-Ahmed" target="_blank" rel="noopener noreferrer">🔗 GitHub Repository</a>
      </div>
    </div>
  );
}
