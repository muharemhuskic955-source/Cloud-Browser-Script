import React, { useState } from 'react';
import AddressBar from './AddressBar';
import NavigationButtons from './NavigationButtons';
import Ruffle from '@ruffle-rs/ruffle';
function CloudBrowser() {
  const [url, setUrl] = useState('');
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const handleNavigate = (newUrl) => {
    setUrl(newUrl);
    // Update history logic
  };
  const handleBack = () => {
    // Implement back logic
  };
  const handleForward = () => {
    // Implement forward logic
  };
  const handleReload = () => {
    // Implement reload logic
  };
  return (
    <div>
      <AddressBar onNavigate={handleNavigate} />
      <NavigationButtons
        onBack={handleBack}
        onForward={handleForward}
        onReload={handleReload}
      />
      <Ruffle src={url} />
    </div>
  );
}
