import Card from './Card';

import React from 'react'

export default function CardList(props) {
    const cards = props.profiles;
    return (
        <div>
            {cards.map((card) => <Card key={card.id} {...card}/>)}
        </div>
    );
}
