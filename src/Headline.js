import React, { useState } from "react";
const Headline = ({ headline, onChangeHeadline }) => {
  // sending props through parent
  // const [greeting, setGreeting] = useState("Hello Function Component!");
  // const handleChange = (event) => setGreeting(event.target.value);
  return (
    <div>
      <h1>{headline}</h1>

      <input type="text" value={headline} onChange={onChangeHeadline} />
    </div>
  );
};
export default Headline;
