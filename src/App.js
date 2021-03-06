import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐ค": "Money-Mouth Face",
  "๐ค ": "Hugging Face",
  "๐คญ ": "Face with Hand Over Mouth",
  "๐คซ ": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ ": "Face with Raised Eyebrow",
  "๐": " Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐ถโ๐ซ๏ธ ": "Face in Clouds",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐ฎโ๐จ": "Face Exhaling",
  "๐คฅ": " Lying Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": " Sleeping Face"
};

var heading = "Emoji Meter";

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("Translated");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1 className="styleheading"> {heading} </h1>
      <div>
        <img
          width="300px"
          height="auto"
          border="0"
          src="funart.png"
          alt="Emoji Inc. logo"
        />
      </div>
      <input className="inputstyle " onChange={changeHandler} value={emoji} />
      <h2 className="outputstyle"> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
