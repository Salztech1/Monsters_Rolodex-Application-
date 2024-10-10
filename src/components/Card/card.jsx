import React from 'react';
import './card.css'

const Card = ({ pmonster: { id, name, email } }) => {
    //const {id, name, email} = pmonster
    return (

        <div className='card-container' key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    );
};



export default Card;











//
//
// import React, { Component } from 'react';
//// import './card.css'

// class Card extends Component {
//     render() {
//         const { id, name, email} = this.props.pmonster;
//         return (

//             <div className='card-container' key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>

//         );
//     }
// }

// export default Card
