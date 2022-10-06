import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function OrderButton() {
    const navigate = useNavigate()

    // const [showForm, setShowForm] = useState(false);

    // const handleForm = () => {
    //     setShowForm((prev) => !prev);
    // }
    const handleNavigate = () => {
        navigate('/orderCake')
    }
    return (
        <div>
            <button className="slider-btn" onClick={handleNavigate}>Order a Cake </button>
        </div>


    )
}

export default OrderButton
