import React, { Component } from 'react';
import Stats from './stats';
import '../assets/css/app.css';
import back_card from '../assets/css/images/back_card.png';
import archmage from '../assets/css/images/archmage.png';
import archmage2 from '../assets/css/images/archmage.png';
import aldor_peacekeeper from '../assets/css/images/aldor_peacekeeper.png';
import aldor_peacekeeper2 from '../assets/css/images/aldor_peacekeeper.png';
import azure from '../assets/css/images/azure.png';
import azure2 from '../assets/css/images/azure.png';
import boar from '../assets/css/images/boar.png';
import boar2 from '../assets/css/images/boar.png';
import holy_champion from '../assets/css/images/holy_champion.png';
import holy_champion2 from '../assets/css/images/holy_champion.png';
import mountain_giant from '../assets/css/images/mountain_giant.png';
import mountain_giant2 from '../assets/css/images/mountain_giant.png';
import northshire_cleric from '../assets/css/images/northshire_cleric.png';
import northshire_cleric2 from '../assets/css/images/northshire_cleric.png';
import patches from '../assets/css/images/patches.png';
import patches2 from '../assets/css/images/patches.png';
import silver_hand_recruit from '../assets/css/images/silver_hand_recruit.png';
import silver_hand_recruit2 from '../assets/css/images/silver_hand_recruit.png';

export default class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_card_clicked: null,
            second_card_clicked: null,
            matches: 0,
            attempts: 0,
            accuracy: 0,
            games_played: 0,
            cardFrontImages: [
                {
                    index: 0,
                    card: archmage,
                    visbility: false
                },
                {
                    index: 1,
                    card: archmage2,
                    visbility: false
                },
                {
                    index: 2,
                    card: aldor_peacekeeper,
                    visbility: false
                },
                {
                    index: 3,
                    card: aldor_peacekeeper2,
                    visbility: false
                },
                {
                    index: 4,
                    card: azure,
                    visbility: false
                },
                {
                    index: 5,
                    card: azure2,
                    visbility: false
                },
                {
                    index: 6,
                    card: boar,
                    visbility: false
                },
                {
                    index: 7,
                    card: boar2,
                    visbility: false
                },
                {
                    index: 8,
                    card: holy_champion,
                    visbility: false
                },
                {
                    index: 9,
                    card: holy_champion2,
                    visbility: false
                },
                {
                    index: 10,
                    card: mountain_giant,
                    visbility: false
                },
                {
                    index: 11,
                    card: mountain_giant2,
                    visbility: false
                },
                {
                    index: 12,
                    card: northshire_cleric,
                    visbility: false
                },
                {
                    index: 13,
                    card: northshire_cleric2,
                    visbility: false
                },
                {
                    index: 14,
                    card: patches,
                    visbility: false
                },
                {
                    index: 15,
                    card: patches2,
                    visbility: false
                },
                {
                    index: 16,
                    card: silver_hand_recruit,
                    visbility: false
                },
                {
                    index: 17,
                    card: silver_hand_recruit2,
                    visbility: false
                }
            ]
        }
        this.card_clicked = this.card_clicked.bind(this);
    }

    card_clicked(event) {
        event.preventDefault();
        if(this.state.first_card_clicked === null){
            this.setState({
                first_card_clicked: event.currentTarget,
            });
            return;
        } else {
            this.setState({
                second_card_clicked: event.currentTarget
            });
        }
    }

    render() {        
        const dupCardFrontImages = this.state.cardFrontImages;
        let randomCards = [];
        while (dupCardFrontImages.length > 0) {
            let randomIndex = Math.floor(Math.random() * dupCardFrontImages.length);
            let pickedCard = dupCardFrontImages.splice(randomIndex, 1);
            randomCards.push(pickedCard);
        }

        const cards = randomCards.map((value, index) => {
            return (
                <div className="card" key={index} onClick={this.card_clicked}>
                    <div className="front">
                        <img src={value[0].card} />
                    </div>
                    <div className="back">
                        <img src={back_card} alt="back card" />
                    </div>
                </div>
            )
        });

        return (
            <div>
                <Stats games_played={this.state.games_played} attempts={this.state.attempts} accuracy={this.state.accuracy}/>
                <section id="game_area">{cards}</section>
            </div>
        )
    }
}

