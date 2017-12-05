import React, { Component } from 'react';
import back_card from '../assets/css/images/back_card.png';
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
  
    // randomizeCards() {
  
    
    //     for(let i = 0; i < randomCards.length; i++) {
    //         const newDiv = <div className="card"></div>
    //         const frontCard = <div className="front"></div>
    //         const randomImage = <img src={randomCards[i]} alt="front card"/>
    //         const appendedFrontDiv = document.createElement(frontCard).append(randomImage);
    //         const backCard = <div className="back"></div>
    //         const backImage = <img src={back_card} alt="back card"/>
    //         var appendedBackDiv = document.createElement(backCard).append(backImage);
    //         var finalCreatedDiv = document.createElement(newDiv).append(appendedFrontDiv, appendedBackDiv);
    //         document.querySelector('.app').append(finalCreatedDiv);
    //     }
    // }
    
    render() {
        const cardFrontImages = [
            archmage,
            archmage,
            aldor_peacekeeper,
            aldor_peacekeeper,
            azure,
            azure,
            boar,
            boar,
            holy_champion,
            holy_champion,
            mountain_giant,
            mountain_giant,
            northshire_cleric,
            northshire_cleric,
            patches,
            patches,
            silver_hand_recruit,
            silver_hand_recruit
         ];
         let randomCards = [];
         while(cardFrontImages.length > 0) {
             let randomIndex = Math.floor(Math.random() * cardFrontImages.length);
             let pickedCard = cardFrontImages.splice(randomIndex, 1);
             randomCards.push(pickedCard);
         }
        return (
            randomCards.map((value) => {
                <div>
                    <div className="card">
                        <div className="front"></div>
                        <img src={value}/>
                    </div>
                    <div className="back">
                        <img src={back_card} alt="back card"/>
                    </div>
                </div>
            })   
        )
    }
}

