import React from 'react'
import '../components/tierra.css'

function luz({ tierra }) {
    return (
        <div className="luz tierra">
            <article className="info">
                <img src="/light.png" width="55px"/>
                <h1>{tierra}%</h1>
                <p>de humedad en tierra</p>
            </article>

        </div>
    )
}

export default luz
