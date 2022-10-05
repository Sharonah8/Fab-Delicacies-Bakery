import React from 'react'
import CakeItem from './CakeItem';

function Cakes({ cakes }) {
    return (
        <div>
            {cakes.map((cake) => (<CakeItem key={cake.id} />))}
        </div>
    )
}

export default Cakes
