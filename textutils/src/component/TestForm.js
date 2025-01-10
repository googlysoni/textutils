import React,{useState} from 'react'

export default function TestForm(props) {
    const handleUpperClick=()=>{
       // console.log("upper click"+text);
        let texts=text.toUpperCase();
        setText(texts)
        props.showAlert("convert upper case","success")
        
    }
    const handleLowerClick=()=>{
        // console.log("upper click"+text);
         let texts=text.toLowerCase();
         setText(texts)
        props. showAlert("convert lower case","success");
         
     }
     const handleClearClick=()=>{
        // console.log("upper click"+text);
         let texts='';
         setText(texts)
         props. showAlert("text clear","success");
     }
   
    const handleOnChange=(event)=>{
       // console.log("onchnage");
        setText(event.target.value)
        
        
    }
    const [color, setColor] = useState('black');
    const handleColorClick = (color) => {
        setColor(color); 
        props. showAlert("text color","success");// Set the color state based on button click
      };
    
      const handlecopy =()=>{
       
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props. showAlert("text copy","success");
     }
     const handleRemoveSpaces=() =>
     {

       let newText =text.split(/[]+/);
        setText(newText.join(" "));
        props. showAlert("text removes","success");
     }
    
    const [text, setText] = useState('here enter some here2');// hooks
    //text="hghjgjhg"  // wrong aways to set text
    //setText("hjgjhkjh")// correct way to set text
 
    
    const countSentences = (text) => {
        const trimmedText = text.trim();
    
        // If the text is empty, return 0 sentences
        if (trimmedText.length === 0) {
          return 0;
        }
    
        // Split the text by sentence-ending punctuation marks
        const sentences = trimmedText.split(/[.?!](\s|$)/).filter(
          (sentence) => sentence.trim().length > 0 // Filter out any empty results
        );
    
        // If there are no punctuation marks, treat the input as 1 sentence
        if (sentences.length === 0) {
          return 1;
        }
    
        // Return the number of sentences, ensuring there's at least 1 sentence
        return sentences.length;
      };


  return (
    <>    <div className="container"style={{ color: props.mode === 'dark' ? 'white' : 'dark' }} >
    <h1 >{props.title}</h1>
    <div className="mb-3">
   
   
    <textarea className="form-control"  style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}} id="mybox" value={text} onChange={handleOnChange} rows="8" ></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpperClick}>Convert to Upper case</button>
    <button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert to lower  case</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
    <button className="btn btn-primary mx-1" onClick={handlecopy}>copy text</button>
    <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
    <button className="btn btn-primary mx-1" onClick={() => handleColorClick('red')}>

          Change to red
        </button>
        <button className="btn btn-primary mx-1" onClick={() => handleColorClick('black')}>
          Change to black
        </button>
    {/* <button className="btn btn-primary mx-1" onClick={handleSentenceClick}> number of sentences</button> */}
    </div>
    <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}> 
        <h1>text summary </h1>
        <p>{text
    .trim()
    .split(" ")
    .filter(word => word !== "").length} word and {text.replace(/\s/g, "").length}charactors</p>
        <p>{0.008*text.split(" ").length-1} minutes</p>
        <p><b>preview</b></p>
        <p>{text.length>0?text:"enter some data"}</p>
        <p>
          {countSentences(text)} Sentence(s)
        </p>


    </div>
    </>

  )
}
