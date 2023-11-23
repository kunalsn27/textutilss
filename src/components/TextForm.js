import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase","success");
        // setText("You have clicked on handleUpClick")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!!","success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }

    const [text, setText] = useState('');
    // text = "new text";     //Wrong way to change the state 
    // setText = ("new text");  //Correct way to change the state 
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#9eaf09' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#1b3a51' :'white', color: props.mode ==='dark'?'white':'#9eaf09'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>   Convert to Uppercase</button>
                <button className="btn btn-danger mx-1"  onClick={handleLoClick}>   Convert to Lowercase</button>
                <button className="btn btn-success mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-info mx-1"    onClick={handleCopy}>      Copy Text</button>
                <button className="btn btn-warning mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#9eaf09' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}


