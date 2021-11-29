import React from 'react'
import '../components/tierra.css'

function luz({ tierra, imagen, texto}) {
    return (
        <div className="luz tierra">
            <article className="info">
                <img src={imagen} width="55px"alt=""/>
                <p id="textoDes">{texto}</p>
                <h1 id="textoLuz">{tierra}</h1>
            </article>
        </div>
    )
}
export default luz
