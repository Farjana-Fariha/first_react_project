import React from 'react';
import './Card.css'
const Card = (props) => {
    const {card} = props;
    // calculating total 
    const movieReducer = (previous, movie) => (previous + movie.subscription)
    const total = card.reduce(movieReducer, 0);
    return (
        <div  className = 'subscription-card'>
            <div>
                <h5 className = 'text-primary text-capitalize'>movie to see</h5>
                <h6>Play List: {card.length}</h6>
                <p>Total Charge: ${total}</p>
            </div>
            <div>
                {
                    card.map((movie, key) => 
                        <div className = 'subscripted' key = {key}>
                            <p>{movie.name}</p>
                            <img src={movie.thamnail} alt="thamnail" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Card;