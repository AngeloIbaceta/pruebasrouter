import foto from "./pc.png"
import './App.css';
import ImageMapper from 'react-image-mapper';
import {useState} from 'react'
function App() {
  //Para saber las coordenadas
 const [coords, setCoords] = useState({x:0,y:0})
  return (
    <div className="App">
      <header className="App-header">
      <h3>{`Coordenada X: ${coords.x}, coordenada Y: ${coords.y}`}</h3>
        <ImageMapper onImageMouseMove={ubicacion => setCoords({x:ubicacion.nativeEvent.layerX, y:ubicacion.nativeEvent.layerY})} src={foto}  alt="logo" map={MAP} onClick={area => console.log(area.url)}/>
      </header>
    </div>
  );
}

export default App;
//Formato coordenadas
//Arriba izquierda X e Y
//Abajo derecha X e Y
//el fillcColor y preFillColor son opcionales
//juegen con ellos para saber cual es cual..


//usen la linea 12 para cachar que coordenadas son las de cada elemento
//las coordenadas son relativas a la imagen, es decir el (0,0) es la esquina izquierda de la foto, no de la pagina
const MAP = {
  name: "Probando para HTW",
  areas: [
    {name: "PSU", shape:"rect", coords: [149, 15,306,171], preFillColor: "rgba(5, 51, 104,0.0)", fillColor: "rgba(109, 3, 0,0.3)", url: "PSUScreen"},
    {name: "RAM", shape:"rect", coords: [340, 52,466,189], preFillColor: "rgba(5, 51, 104,0.3)", fillColor: "rgba(109, 3, 0,0.3)", url: "RAMscreen"},
    {name: "CDs", shape:"rect", coords: [527, 197,677,327], preFillColor: "rgba(5, 51, 104,0.3)", fillColor: "rgba(109, 3, 0,0.3)", url: "CDScreen" },
    {name: "CPU", shape:"rect", coords: [19, 263,152,396], preFillColor: "rgba(5, 51, 104,0.3)", fillColor: "rgba(109, 3, 0,0.3)", url: "CPUscreen" },
    {name: "HDD", shape:"rect", coords: [542, 340,666,502], preFillColor: "rgba(5, 51, 104,0.3)", fillColor: "rgba(109, 3, 0,0.3)", url: "HDDScreen" },
    {name: "JFP", shape:"rect", coords: [364,527,574,676], preFillColor: "rgba(5, 51, 104,0.3)", fillColor: "rgba(109, 3, 0,0.3)", url: "JFPScreen" },
    {name: "MB", shape:"rect", coords: [164,531,298,669], preFillColor: "rgba(5, 51, 104,0.3)", fillColor: "rgba(109, 3, 0,0.3)", url: "MBScreen" }
  ]
}