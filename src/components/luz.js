import React from 'react'
import '../components/tierra.css'

function luz({ tierra }) {
    return (
        <div className="luz tierra">
            <article className="info">
                <img src="/light.png" width="55px"alt=""/>
                <p id="textoDes">La luz esta:</p>
                <h1 id="textoLuz">{tierra}</h1>
            </article>
        </div>
    )
}
export default luz
