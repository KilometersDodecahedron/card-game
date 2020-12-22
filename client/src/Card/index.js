import React, {useState} from "react";
import "./style.css";

function Card(props){
    const [cardClassNames, setCardClassNames] = useState("card-holder " + props.cardClass)
    //only used by deck
    const [cardCount, setCardCount] = useState(props.number)
    //only used by cards
    const [cardValue, setCardValue] = useState(props.number)
    const [cardSymbol, setCardSymbol] = useState(props.symbol)

    // function createClassNames() {
    //     let theClasses = "card-holder ";
    //     if(cardClassNames){
    //         setCardClassNames(theClasses + cardClassNames)
    //         //theClasses += props.cardClass;
    //     }else{
    //         console.log("No class name given")
    //     }
    //     //return cardClassNames;
    // }

    function createCardContent(){
        if(props.cardClass === "player-deck" || props.cardClass === "computer-deck"){
            return (
                <div>
                    {cardCount}
                </div>
            )
        }else if(props.cardClass.includes("player-card-slot") || props.cardClass.includes("computer-card-slot")){
            let color = "black"
            if(cardSymbol === "♥" || cardSymbol === "♦"){
                color = "red";
            }

            const cardClasses = "card " + color;
            const cornerSymbol = (cardValue + cardSymbol).toString();

            return (
                <div className={cardClasses} data-value={cornerSymbol}>
                    {cardSymbol}
                </div>
            )
        }
    }


    return (
        <div className={cardClassNames}>
            {createCardContent()}
        </div>
    )
}

export default Card;