import React from "react";


function AchievementCard({ title, description, image }) {
    return (
      <div className="achievement-card">
        <div className="achievement-image-container">
          <img src={image} alt={title} className="achievement-image" />
        </div>
        <div className="achievement-details">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

export default AchievementCard;
