import React, { useState } from "react";

function NewsForm() {
  const [newsletter, setNewsLetter] = useState(false);

  function handleNewsLetterChange(event) {
    setNewsLetter(event.target.checked);
    console.log(event.target.checked);
  }

  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsLetterChange}
        //use checked instead of value
        checked={newsletter}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewsForm;
