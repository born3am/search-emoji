import React, {useState} from 'react';
import EmojiContainer from './components/EmojiContainer';
import Header from './components/Header';
import data from "./json/emoji.json"

function App() {

  const [emojisList, setEmojis]= useState(data)

  const [inputValue, setInputValue] = useState("")

  return (
    <div className="App">
    <Header />
    <div style={{textAlign: "center"}} >
      <input type="text" name="search" />
    </div>
    <EmojiContainer emojisList={emojisList} />


    </div>
  );
}

export default App;
