import React from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor:'white'
    //     })
    //     const [btntext, setbtntext] = useState("Enable Dark Mode")

    //   const  toggleStyle=() =>{
    //         if(myStyle.color==='black')
    //         {
    //           setmyStyle({
    //             color: 'white',
    //             backgroundColor:'black',
    //             border: '1px dotted white'
    //           })
    //           setbtntext("Enable Light Mode")
    //           }
    //           else{
    //             setmyStyle({
    //                 color: 'black',
    //                 backgroundColor:'white'
    //               })
    //               setbtntext("Enable Dark Mode")
    //           }
    //         }
        
    return (
        <>
            <div className="Welcome" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
                <h2>Welcome to PlaywithText</h2>
                <p>A very handy online text tool which helps to analyze your text. It also let's you perform many operations such as converting text to Uppercase, Lowercase, Capitalizedcase </p>
            
            <div className="accordion" id="accordionExample" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Lower Case</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
                            <p>If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.
                            </p>
                            this is an example of lower case.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         <strong>Upper Case</strong>   
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
                            <p>The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
                                To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.
                            </p>
                            THIS IS AN EXAMPLE OF UPPER CASE.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Capitalized Case</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
                            <p>The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.

                                Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.
                            </p>
                            This Is An Example Of Capitalized Case.
                        </div>
                    </div>
                </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           <strong>Remove Extra Spaces</strong> 
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{color:props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'black'}}>
                            <p>The extra space remover as suggested by the name will automatically remove the extra spaces in text leaving the rest of your content as it is.

                                Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Remove Extra Spaces tab.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-4">
            <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
            </div> */}
           
        </>
    )
}
