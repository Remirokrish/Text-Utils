import React, { useState } from 'react'

export default function TextForm(props) {
    const convertToUpppercase=()=>{       
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase!","success");
    }

    const convertToLowercase=()=>{       
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase!","success");
    }

    const ClearText=()=>{       
        setText('')
        props.showAlert("Text Clear!","success");
    }

    const removespaces=()=>{       
        setText(text.replace(/\s{2,}/g, ' '));
        props.showAlert("Whitespaces removed!","success");
    }

    const copytext=()=>{       
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success");
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const [text,setText]=useState('');
  return (
    <div className="container" >
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}
             placeholder='Enter text here...' onChange={handleOnChange} id="mybox" rows="5"></textarea>
        </div>       
        </div>
        <button className="btn btn-primary mx-3 my-2" onClick={convertToUpppercase} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick={convertToLowercase} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-3 my-2" onClick={ClearText} >Clear Text</button>
        <button className="btn btn-primary mx-3 my-2" onClick={removespaces} >Remove extra spaces</button>
        <button className="btn btn-primary mx-3 my-2" onClick={copytext} >Copy Text</button>
        <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
        <h2 className="my-3">Your text summary</h2>
        <p>{text.length>0?text.trim().split(/\s+/).length:0} words and {text.length} character </p>
        <p>It takes {text.length/8} seconds time to read</p>
        <h2 className='my-3'>Preview</h2>
        <p>{text}</p>
        </div>
        
    </div>
  )
}
