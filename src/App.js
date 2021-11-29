import React, { useState, useEffect } from 'react';
import './App.css';
import Temperatura from './components/temp'
import Tierra from './components/tierra'
import Luz from './components/luz'
//Firebase
import { ref, onValue } from "firebase/database";
import db from "./util/firebase";

//Bootstrap and Google Fonts
import 'bootstrap/dist/css/bootstrap.min.css';
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>


function App() {

  const [valor, setValor] = useState("")
  const [aguam, setaguam] = useState("")
  const [domo, setdomo] = useState("")

  const [humTierra1, sethumTierra1] = useState("")
  const [humTierra2, sethumTierra2] = useState("")
  const [led, setled] = useState("")

  const [luz, setluz] = useState("")
  const [pir, setpir] = useState("")
  const [rain, setrain] = useState("")

  useEffect(() => {
    const sigRef = ref(db, 'device');
    onValue(sigRef, (snapshot) => {
      setValor(snapshot.child('data').val());
      setaguam(snapshot.child('aguam').val());
      setdomo(snapshot.child('domo').val());
      sethumTierra1(snapshot.child('humTierra1').val());
      sethumTierra2(snapshot.child('humTierra2').val());
      setled(snapshot.child('led').val());
      setpir(snapshot.child('pir').val());
      setrain(snapshot.child('rain').val());
    });
  }, []);

  useEffect(() => {
    const sigRef = ref(db, 'device');
    onValue(sigRef, (snapshot) => {
      if (snapshot.child('luz').val() == 1){
        setluz("Prendido");
      }else{
        setluz("Prendido");
      }


    });
  }, []);

  console.log(valor)
  console.log(aguam)
  console.log(domo)
  console.log(humTierra1)
  console.log(humTierra2)
  console.log(led)

  console.log(luz)
  console.log(pir)
  console.log(rain)

  return (
    <div className="App">
      <div class="container-fluid">
        <div className="Ajuste">
          <div class="row">
            <div class="col-4 p1">
              <section className="Intro">
                <h1>¡Bienvenido!</h1>
                <p>Aquí podrás personalizar los elementos generales de tu propio invernadero. No olvides guardar al terminar</p>
              </section>
              <div className="Espacio"></div>

              <section className="Intro">
                <form>
                  <div className="componente">
                    <label for="customRange3" class="form-label">Ingresa la humedad deseada en la tierra (0% - 100%): </label>
                    <input type="range" class="form-range" min="0" max="100" step="10" id="customRange3" />
                  </div>
                  <div className="componente">
                    <label for="customRange3" class="form-label">Estable los rangos de temperatura en tu invernadero: </label>
                    <input type="range" class="form-range" min="0" max="100" step="10" id="customRange3" />
                  </div>

                  <div className="componente">
                    <div class="row">
                      <div class="col">
                        <label for="customRange3" class="form-label">Control del Domo:</label>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <label class="form-check-label" for="flexSwitchCheckDefault">Open | Close</label>
                        </div>
                      </div>
                      <div class="col">
                        <label for="customRange3" class="form-label">Control de luces: </label>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                          <label class="form-check-label" for="flexSwitchCheckDefault">On | Off</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Guardar y actualizar</button>
                </form>
              </section>

            </div>
            <div class="col-8 p2">
              <div className="s1">
                <Temperatura temperatura={Math.round(valor)} />
                <Tierra tierra={humTierra1} valor={1} />
                <Tierra tierra={humTierra2} valor={2} />
              </div>

              <div className="s1">
              <Luz tierra={luz} valor={1} />
                <Temperatura temperatura={Math.round(valor)} />
                
                <Tierra tierra={luz} valor={2} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
