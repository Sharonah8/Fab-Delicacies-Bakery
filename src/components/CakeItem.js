import React from 'react';
// import { cakes } from

function CakeItem(props) {
    const { cake } = props
    const { description, flavour, image, price, quantity, id } = cake
    console.log(cake, 'cake')
    return (
        <div className='cake-card'>
            <img style={{ width: '500px', height: "500px" }} src={image} alt={id} />
            <p>{description}</p>
            <p>{flavour}</p>
            <p>{price}</p>
            <p>{quantity}</p>
        </div>
    )
}

export default CakeItem
