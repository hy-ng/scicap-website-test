import React from 'react';
import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <div className="no-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="" className="back-home">
        Back to Home
      </Link>
    </div>
  );
} 