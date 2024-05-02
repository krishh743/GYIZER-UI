import React from 'react';

// Changed the name of the component to avoid conflict
function Practice({ onClick }:any) {
  return (
    <div>
      <button onClick={onClick}>Increase Count</button>
    </div>
  );
}

export default Practice;
