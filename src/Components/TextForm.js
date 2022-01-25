import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // text="new text is"; //incorrect way to change state
    // setText("new text is");//correct way to change state
    const handleUpClick= ()=> {
    //  console.log("Uppercase was clicked " + text);
     let newText=text.toUpperCase();
     setText(newText)
    }
    const handleLoClick= ()=> {
    //  console.log("Uppercase was clicked " + text);
     let newText=text.toLowerCase();
     setText(newText)
    }
    const handleClearClick= ()=> {
    //  console.log("Uppercase was clicked " + text);
     let newText=''
     setText(newText)
    }
    const handleCapitalClick= ()=> {
    let words =text.split(" ");
    let capitalized = '';
    words.forEach(element => {
        capitalized+=element.charAt(0).toUpperCase() + element.slice(1)+ " "
    });
     setText(capitalized)
    }
    const handleExtraSpaces=()=>{
        let words=text.split(/[ ]+/);
        setText(words.join(" "))
    }
    const handleCopy=()=>{
        // var text=document.getElementById('myBox');
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard!", "success");
    }
    const handleOnchange=(event)=>{
    // console.log("On change");
    setText(event.target.value);
    }
    return (
        <>
        <div className="my-5"style={{color:props.mode==='light'?'black':'white' ,backgroundColor:props.mode==='light'?'white':'black'}}>
            <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange}id="myBox" rows="10" placeholder="Put your content here" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button disabled={text.length===0}className={props.mode==='light'?"btn btn-primary mx-2 my-2 ":"btn btn-secondary mx-2 my-2"} onClick={handleUpClick}>Upper Case</button>
                <button disabled={text.length===0} className={props.mode==='light'?"btn btn-primary mx-2 my-2":"btn btn-secondary mx-2 my-2"} onClick={handleLoClick}>Lower Case</button>
                <button disabled={text.length===0} className={props.mode==='light'?"btn btn-primary mx-2 my-2":"btn btn-secondary mx-2 my-2"} onClick={handleCapitalClick}>Capital Case</button>
                <button disabled={text.length===0} className={props.mode==='light'?"btn btn-primary mx-2 my-2":"btn btn-secondary mx-2 my-2"} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className={props.mode==='light'?"btn btn-primary mx-2 my-2":"btn btn-secondary mx-2 my-2"} onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className={props.mode==='light'?"btn btn-primary mx-2 my-2":"btn btn-secondary mx-2 my-2"} onClick={handleClearClick}>Clear</button>
        </div>
        <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
            <h3>Text Analysis</h3>
            {/* <p>{text.split(" ").filter((words)=>{if(words!==0)return words;}).length} words and {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((words)=>{return words.length!==0}).length} words and {text.length} characters</p>
            {/* <p> Minute read: {0.008* text.split(" ").filter((words)=>{if(words!==0)return words;}).length }</p> */}
            <p> Minute read: {0.008* text.split(" ").filter((words)=>{return words.length!==0}).length }</p>
            <h3>Preview </h3>
            <p>{text.length>0?text: "No text to Preview"}</p>
        </div>
        </>
    )
}
