import React, { Component } from 'react';
import Stats from './stats';
import Card from './card';
import '../assets/css/app.css';
import archmage from '../assets/css/images/archmage.png';
import aldor_peacekeeper from '../assets/css/images/aldor_peacekeeper.png';
import azure from '../assets/css/images/azure.png';
import boar from '../assets/css/images/boar.png';
import holy_champion from '../assets/css/images/holy_champion.png';
import mountain_giant from '../assets/css/images/mountain_giant.png';
import northshire_cleric from '../assets/css/images/northshire_cleric.png';
import patches from '../assets/css/images/patches.png';
import silver_hand_recruit from '../assets/css/images/silver_hand_recruit.png';

export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_card_clicked: null,
            first_card_clicked_index: null,
            first_card_clicked_class: null,
            second_card_clicked: null,
            second_card_clicked_index: null,
            second_card_clicked_class: null,
            matches: 0,
            attempts: 0,
            accuracy: 0,
            games_played: 0,
            cardFrontImages: [
                {
                    id: 'archmage',
                    card: archmage,
                    cardClass: null,
                    index: 0,
                    visibility: true
                },
                {
                    id: 'archmage',
                    card: archmage,
                    cardClass: null,
                    index: 1,  
                    visibility: true                    
                },
                {
                    id: 'aldor_peacekeeper',
                    card: aldor_peacekeeper,
                    cardClass: null,
                    index: 2,
                    visibility: true                    
                },
                {
                    id: 'aldor_peacekeeper',
                    card: aldor_peacekeeper,
                    cardClass: null,
                    index: 3,
                    visibility: true                    
                },
                {
                    id: 'azure',
                    card: azure,
                    cardClass: null,
                    index: 4, 
                    visibility: true                    
                },
                {
                    id: 'azure',
                    card: azure,
                    cardClass: null,
                    index: 5,
                    visibility: true                    
                },
                {
                    id: 'boar',
                    card: boar,
                    cardClass: null,
                    index: 6,
                    visibility: true                    
                },
                {
                    id: 'boar',
                    card: boar,
                    cardClass: null,
                    index: 7, 
                    visibility: true                    
                },
                {
                    id: 'holy_champion',
                    card: holy_champion,
                    cardClass: null,
                    index: 8,
                    visibility: true                    
                },
                {
                    id: 'holy_champion',
                    card: holy_champion,
                    cardClass: null,
                    index: 9, 
                    visibility: true                    
                },
                {
                    id: 'mountain_giant',
                    card: mountain_giant,
                    cardClass: null,
                    index: 10,
                    visibility: true                    
                },
                {
                    id: 'mountain_giant',
                    card: mountain_giant,
                    cardClass: null,
                    index: 11,
                    visibility: true                    
                },
                {
                    id: 'northshire_cleric',
                    card: northshire_cleric,
                    cardClass: null,
                    index: 12,
                    visibility: true                    
                },
                {
                    id: 'northshire_cleric',
                    card: northshire_cleric,
                    cardClass: null,
                    index: 13,
                    visibility: true                    
                },
                {
                    id: 'patches',
                    card: patches,
                    cardClass: null,
                    index: 14,
                    visibility: true                    
                },
                {
                    id: 'patches',
                    card: patches,
                    cardClass: null,
                    index: 15,
                    visibility: true                    
                },
                {
                    id: 'silver_hand_recruit',
                    card: silver_hand_recruit,
                    cardClass: null,
                    index: 16,
                    visibility: true                    
                },
                {
                    id: 'silver_hand_recruit',
                    card: silver_hand_recruit,
                    cardClass: null,
                    index: 17, 
                    visibility: true                    
                }
            ]

        }
        this.card_clicked = this.card_clicked.bind(this);
        this.checkMatch = this.checkMatch.bind(this);
    }

    card_clicked(cardIndex) {
        console.log('Card Clicked', this.state.cardFrontImages[cardIndex]);
        let cardClicked = this.state.cardFrontImages[cardIndex];
        if(this.state.first_card_clicked === null) {
            this.setState({
                first_card_clicked: cardClicked.id,
                first_card_clicked_index: cardClicked.index
            });
            return;
        } else {
            //Checks if second card clicked is the same card that was first clicked so check matches does not happen if you click the same card
            if(this.state.first_card_clicked_index === cardClicked.index) {
                console.log('same card clicked');
                return;
            }
            //used anonymous function as a call back so second_card_clicked was updated before checking match function is called
            this.setState({
                second_card_clicked: cardClicked.id,
                second_card_clicked_index: cardClicked.index
            },() => {
                this.checkMatch();                
            });
        }
    }

    checkMatch() {
        if (this.state.first_card_clicked === this.state.second_card_clicked) {
            console.log('it matches');
            this.setState({
                attempts: this.state.attempts += 1,
                matches: this.state.matches += 1,                
                first_card_clicked: null,
                first_card_clicked_index: null,
                second_card_clicked: null
            });
        } else {
            console.log('not a match')
            console.log(this);           
            this.setState({
                attempts: this.state.attempts += 1,
                first_card_clicked: null,
                first_card_clicked_class: null,
                first_card_clicked_index: null,
                second_card_clicked: null,
                second_card_clicked_class: null,
                second_card_clicked_index: null


            });
        }
    }

    render() {
        // let randomCards = [];
        // const cardFrontImages = this.state.cardFrontImages;
        // while (cardFrontImages.length > 0) {
        //     let randomIndex = Math.floor(Math.random() * cardFrontImages.length);
        //     let pickedCard = cardFrontImages.splice(randomIndex, 1);
        //     randomCards.push(pickedCard);
        // }

        const cards = this.state.cardFrontImages.map((value, index) => {
            return <Card key={index} index={index} info={value} onClick={this.card_clicked} />
        });

        return (
            <div>
                <Stats games_played={this.state.games_played} attempts={this.state.attempts} accuracy={this.state.accuracy} />
                <section id="game_area">{cards}</section>
            </div>
        )
    }
}
