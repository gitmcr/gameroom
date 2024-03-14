import { useState, useEffect } from "react";
import axios from "axios";

const Flag = () => {
  const [countryData, setCountryData] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const fetchCountry = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const randomCountry =
        response.data[Math.floor(Math.random() * response.data.length)];
      console.log("Correct country:", randomCountry.name.common);
      setCountryData(randomCountry);
      setFeedback("");
      setUserInput("");
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    // Fetch a random country and its flag from the REST countries API
    fetchCountry();
  }, []); // Run this effect only once on component mount

  const handleGuess = () => {
    // Check if the user's guess is correct
    const isCorrect =
      userInput.toLowerCase() === countryData.name.common.toLowerCase();
    if (isCorrect) {
      setFeedback("Correct! Try the next one.");
      setTimeout(fetchCountry, 1500); // Wait 1.5 seconds before fetching a new country
    } else {
      setFeedback("Incorrect. Try again.");
    }
  };

  return (
    <div>
      {countryData && (
        <div>
          <h2>🌍 Flag Quiz</h2>
          <img src={countryData.flags.svg} alt="Country Flag" width={800} />
          <div>
            <input
              type="text"
              placeholder="Type the country name"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button onClick={handleGuess}>Submit Guess</button>
          </div>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default Flag;
