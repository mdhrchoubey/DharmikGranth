import React, { useState, useEffect } from 'react';

const Shlok = ({ texts, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return <h3>{texts[currentIndex]}</h3>;
};

export default Shlok;