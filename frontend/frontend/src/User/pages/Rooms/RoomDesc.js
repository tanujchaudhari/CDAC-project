import React, { useState } from 'react';

const RoomComponent = ({ roomDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200; // Maximum length of the description to show initially

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {roomDescription.length > maxLength && !isExpanded ? (
        <>
          {roomDescription.slice(0, maxLength)}...
          <p style={{color:"blue"}} onClick={toggleDescription}>Read More</p>
        </>
      ) : (
        <>
          {roomDescription}
          {roomDescription.length > maxLength && (
            <p onClick={toggleDescription}>Read Less</p>
          )}
        </>
      )}
    </div>
  );
};

export default RoomComponent;
