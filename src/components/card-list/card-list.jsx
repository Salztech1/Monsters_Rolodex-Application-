import React from 'react';
import './card-list-styles.css'
import Card from '../Card/card';

const CardList = ({ fmonster }) => (

    <div className='card-list'>
        {fmonster.map((monster) => {
            return <Card pmonster={monster} />;
        })}
    </div>


    )

export default CardList;






// import React, { Component } from 'react';
// import './card-list-styles.css'
// import Card from '../Card/card';
// class CardList extends Component {
//     render() {
//         const { fmonster } = this.props
//         return (
//             <div className='card-list'>
//                 {fmonster.map((monster) => {
//                     return <Card pmonster={monster} />;
//                 })}
//             </div>
//         );
//     }
// }

// export default CardList