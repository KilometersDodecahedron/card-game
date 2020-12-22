import {SUITS, VALUES} from "../StaticValues/CARDVALUES.js";
import CardClass from "./CardClass.js"

//NOTE used for any group of cards, including hand and discard pile
class DeckClass {
    //set to a fresh deck by default
    constructor(cards = freshDeck()){
        //object array
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length;
    }

    shuffle(){
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

function freshDeck() {
    //flatMap takes an array of arrays, and puts their values into a single array
    return SUITS.flatMap(suit => {
        //so, when VALUES.map creates an array for each of its values, they get mapped into a single array
        return VALUES.map(value => {
            //and the data is then stored in a Card object
            return new CardClass(suit, value);
        })
    })
}

export default DeckClass;