import React from 'react'
import './Newsfeed.css'
import LineGraph from "./LineGraph";

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed__container">
                <div className="newsfeed__chartSection">
                    <div className="newsfeed__portfolio">
                        <h1>$113,000.87</h1>
                        <p> 1010101010 </p>
                    </div>
                    <div className="newsfeed__chart">
                        <LineGraph />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Newsfeed
