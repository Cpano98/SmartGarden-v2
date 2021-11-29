import React from 'react'
import '../components/tierra.css'
import '../components/lluvia.css'

function lluvia({ lluvia, aguam, tierra }) {
    return (
        <div className="lluvia">
            <article className="seg">
                <img src="https://firebasestorage.googleapis.com/v0/b/smartgarden-sigfox.appspot.com/o/simbolo-de-proteccion-de-la-silueta-del-paraguas-abierto-bajo-las-gotas-de-lluvia.png?alt=media&token=88bdddfb-fc93-49a2-bf48-2f5fa21d4395" width="80px" alt="" />
                <div>
                    <h1 id="titulo">Lluvia</h1>
                    <p id="textoP">{lluvia}</p>
                </div>
            </article>

            <article className="seg">
                <img src="https://firebasestorage.googleapis.com/v0/b/smartgarden-sigfox.appspot.com/o/gotas-de-agua.png?alt=media&token=15249a00-7ea6-440a-b139-1aa7834a975a" width="80px" alt="" />
                <div>
                    <h1 id="titulo">Riego</h1>
                    <p id="textoP">{aguam}</p>
                </div>
            </article>
        </div>
    )
}

export default lluvia
