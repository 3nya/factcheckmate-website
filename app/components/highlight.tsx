import React, { useState } from 'react';
import './highlight.css'
import LineBreak from './linebreak';

type textProps = {
    text: string
    additionaltext: string
}
const Highlight = ({text, additionaltext}: textProps) => {


    return (
        <span className="highlight-container">
            <span className="text">
                {text}
            
                <span className="additional-text"> 
                    <span className="title-text"> {text} </span>
                    <LineBreak/>
                    <span className="definition-text"> {additionaltext} </span>
                </span>
            <span>
        </span>
        </span>
        </span>

    );
}
export default Highlight;