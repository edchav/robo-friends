import React from 'react'
import Card from './Card';

// const CardList = ({ robots }) => {
//     const cardsArray = robots.map((user, i) => {
//         return ( 
//             <Card 
//                 key={robots[i].id} 
//                 id={robots[i].id} 
//                 name={robots[i].name} 
//                 email={robots[i].email} />
//         );
//     });

//     return(
//         <div>
//             {cardsArray}
//         </div>
//     );
// }

// export default CardList
// both of these work 

const CardList = ({ robots }) => {
    return(
        <div>
            {
                robots.map((user, i) => {
                    return ( 
                        <Card 
                            key={robots[i].id} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList