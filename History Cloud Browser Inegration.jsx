import React, { useState } from 'react';
import AddressBar from './AddressBar';
import NavigationButtons from './NavigationButtons';
import Ruffle from '@ruffle-rs/ruffle';
function CloudBrowser() {
  const [url, setUrl] = useState('');
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const handleNavigate = (newUrl) => {
    if (currentIndex < history.length - 1) {
      setHistory(history.slice(0, currentIndex + 1));
    }
    setHistory([...history, newUrl]);
    setCurrentIndex(currentIndex + 1);
    setUrl(newUrl);
  };
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setUrl(history[currentIndex - 1]);
    }
  };
  const handleForward = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUrl(history[currentIndex + 1]);
    }
  };
  const handleReload = () => {
    // Reload logic (just setUrl for now)
    setUrl(url);
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
