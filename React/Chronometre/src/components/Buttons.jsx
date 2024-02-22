import { useState, useEffect } from 'react';

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
};

export default function Buttons() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isCounting) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1); // Use callback function
      }, 1);
    }
    return () => clearInterval(intervalId); // Clear interval on unmount
  }, [isCounting]); // Only update effect when isCounting changes

  const handleClick = () => {
    setIsCounting(!isCounting); // Toggle isCounting on click
  };

  const handleReset = () => {
    setIsCounting(false); // Stop the interval
    setCount(0); // Reset the count
  };

  const formattedTime = formatTime(count);

  return (
    <>
      <p>⏱️ ChronoFlex ⌛</p>
      <input className="test" value={formattedTime} readOnly />
      <div className="boutons">
        <button onClick={handleClick} className={isCounting ? 'pause' : 'play'}>
          {isCounting ? '⏸' : '⏵'}
        </button>
        <button onClick={handleReset}>⏹</button>
      </div>
    </>
  );
}
