import React from 'react';

//component for a simple introductory paragraph
const IntroParagraph = () => {
    return (
        <div style={{display:"block", justifyContent: "center"}}>
            <p style={{textAlign:"center", padding:"30px", color:"#1C0221", marginLeft:"400px", marginRight:"400px", fontSize:35}}>Welcome to our Recipe Book website!</p>
            <p style={{textAlign:"center", padding:"30px", color:"#1C0221", marginLeft:"400px", marginRight:"400px", fontSize:17}}>GetCooked - your new favourite kitchen companion, on your phone or laptop! We're an interactive recipe book designed to inspire creativity and confidence. All this, while infusing your meals with a level of deliciousness that you, your family, friends and guests couldn't dream possible. Find something you absolutely LOVE? Add it to your favourites to come back to it! Any questions? Don't hesitate to contact us for a quick, professional response! And most importantly: enjoy fine cuisine in the comfort of your own home.
            </p>
        </div>
    );
};

export default IntroParagraph;
