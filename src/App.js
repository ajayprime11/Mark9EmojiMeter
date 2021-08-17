import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤑": "Money-Mouth Face",
  "🤗 ": "Hugging Face",
  "🤭 ": "Face with Hand Over Mouth",
  "🤫 ": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨 ": "Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😶‍🌫️ ": "Face in Clouds",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😮‍💨": "Face Exhaling",
  "🤥": " Lying Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": " Sleepy Face",
  "🤤": "Drooling Face",
  "😴": " Sleeping Face"
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
        <img border="0" src="funart.png" alt="Emoji Inc. logo" />
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
