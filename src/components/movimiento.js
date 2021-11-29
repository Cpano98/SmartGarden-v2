import React from 'react'
import '../components/temp.css'

function movimiento({temperatura}) {
    return (
        <div className="movimiento temp">
            <article className="grados">
            <img src="/man-dancing.png" width="45px" alt=""/>
                <p>Detección</p>
            </article>
            <article className="des">
                <h1>{temperatura}</h1>
            </article>

        </div>
    )
}

export default movimiento
