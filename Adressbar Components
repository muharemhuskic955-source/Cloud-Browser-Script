import React, { useState } from 'react';
function AddressBar({ onNavigate }) {
  const [url, setUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onNavigate(url);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL or search"
      />
      <button type="submit">Go</button>
    </form>
  );
}
