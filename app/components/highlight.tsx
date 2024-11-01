import React, { useState } from 'react';
import './highlight.css'

type textProps = {
    text: string
    additionaltext: string
}
const Highlight = ({text, additionaltext}: textProps) => {


    return (
        <div className="highlight-container">
            <div className="text">
                {text}
            
                <span className="additional-text">{additionaltext}</span>
            </div>
        </div>

    );
}
export default Highlight;