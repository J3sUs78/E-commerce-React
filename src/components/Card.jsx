import React from 'react'

import "./Card.css"

function Card({title="No hay titulo definido",description="No hay descripcion definida"}) {
    return (
        <div className='Card'>
            <h2>{title}</h2>
            <p>{description}</p>

        </div>
    )
}

export default Card