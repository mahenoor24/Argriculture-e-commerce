import React from 'react';

const PhaseComponent = ({ title, description, image, imagePosition }) => {
  const renderImage = () => (
    <div className="phases-img">
      <img src={image} alt={title} />
    </div>
  );

  const renderText = () => (
    <div className="phases-text">
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="phases-button">Buy Products</button>
    </div>
  );

  return (
    <div className={`phases phases-${imagePosition}`}>
      <div className="phases-content">
        {imagePosition === 'left' ? renderImage() : renderText()}
        {imagePosition === 'right' ? renderImage() : renderText()}
      </div>
    </div>
  );
};

export default PhaseComponent;
