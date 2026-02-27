import React from 'react';
function NavigationButtons({ onBack, onForward, onReload }) {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      <button onClick={onForward}>Forward</button>
      <button onClick={onReload}>Reload</button>
    </div>
  );
}
