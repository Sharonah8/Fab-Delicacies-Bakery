import React, { useEffect, useState } from 'react'
import CakeItem from './CakeItem';


function Cakes() {

    const [cakes, setCakes] = useState([])
    const fetchData = async () => {


        try {
            const res = await fetch('https://fabs-bakery.herokuapp.com/cakes')
            const data = await res.json()
            setCakes(data)



        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>

            <div>
                {cakes?.map((cake) => (<CakeItem key={cake.id} cake={cake} />))}
            </div>
        </>

    )
}

export default Cakes
