import './card.styles.css';
import React from 'react';

export type CardProps = React.PropsWithChildren<{card_class?: string[], shadow?: boolean}>;

export const Card = (props: CardProps) => {
    const className = props.card_class ? props.card_class.join(' ') : '';
    return (
        <div className={`card ${className} p-3 ${props.shadow?'shadow':''} rounded-2xl shadow-indigo-400/40 w-full bg-white`}>
            {props.children}
        </div>
    );
}