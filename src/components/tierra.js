import React from 'react'
import '../components/tierra.css'

function tierra({ tierra, valor }) {
    return (
        <div className="tierra">
            <article className="info">
                <p id="numsen">{valor}</p>
                <h1>{tierra}%</h1>
                <p>de humedad en tierra del sensor {valor}</p>
            </article>

        </div>
    )
}

export default tierra
