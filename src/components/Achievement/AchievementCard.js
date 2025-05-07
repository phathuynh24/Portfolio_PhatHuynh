import React from "react";


function AchievementCard({ title, description, image, link }) {
    return (
      <div className="achievement-card">
        <div className="achievement-image-container">
          <img src={image} alt={title} className="achievement-image" />
        </div>
        <div className="achievement-details">
          <h3>{title}</h3>
          <p>{description}</p>
          {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="achievement-link">
            Xem chi tiết
          </a>
        )}
        </div>
      </div>
    );
  }

export default AchievementCard;
