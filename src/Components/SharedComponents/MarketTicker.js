import '../../App.css';
import './MarketTicker.css';
import React from 'react';
        
class MarketTicker extends React.Component {

    render() {
        return (
            <div className="marketTicker-container">
                {/* <div style="position: relative; height: 100%;">
                    <font style={{color: "#FFFFFF", face: "Verdana", fontSize: "+1"}}><marquee style={{height: "10%", bottom:"0px", position: "absolute", scrollAmount: "5",  bgcolor: "#FF0000"}}>Your text here</marquee></font>
                </div> */}
                <p className="marquee"><span>TEST</span></p>
            </div>
            
        );
    }
}

export default MarketTicker;