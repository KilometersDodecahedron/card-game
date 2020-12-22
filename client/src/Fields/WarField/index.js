import React from "react";
import Card from "../../Card"
import "./style.css";

function WarField(){
    return (
        <div className="field">
            {/* compter's cards */}
            <Card cardClass="computer-deck" number={26}/>
            <Card cardClass="computer-card-slot card-slot" number={9} symbol="♦" />
            <div className="text">hldkghdklr</div> 
            {/* player's cards */}
            <Card cardClass="player-deck" number={26}/>
            <Card cardClass="player-card-slot card-slot" number={8} symbol="♠" />
        </div>
    );
}

export default WarField;