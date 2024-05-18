import React, { useState } from 'react';

const DescriptionComponent = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 142; // Maximum length of the description to show initially

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {description.length > maxLength && !isExpanded ? (
        <>
          {description.slice(0, maxLength)}...
          <button className="btn" onClick={toggleDescription}>Read More</button>
        </>
      ) : (
        <>
          {description}
          {description.length > maxLength && (
            <button onClick={toggleDescription}>Read Less</button>
          )}
        </>
      )}
    </div>
  );
};

export default DescriptionComponent;
