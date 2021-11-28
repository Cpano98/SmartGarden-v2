import React from 'react'
import '../components/temp.css'

function temp({temperatura}) {
    return (
        <div className="temp">
            <article className="grados">
                <h1>{temperatura}°</h1>
                <p>Celsius</p>
            </article>
            <article className="des">
                <h1>Temperatura actual de tu invernadero.</h1>
            </article>

        </div>
    )
}

export default temp
