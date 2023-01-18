import "./App.css";
import MyButton from "./Button";
import Parrafo from "./Parrafo";

function App() {
  return (
    <div className="App">
      <MyButton
        primary={true}
        className={"code"}
        children={"este es el texto i I"}
      ></MyButton>
      <Parrafo>Viaje espiritual</Parrafo>
      <p>Párrafo dentro del div App</p>
      <p className="code">
        Este es un parrafo muy largo o eso es lo que pretendo, tambien necesito
        la letra i porque es muy caracteristica de esta fuente.
      </p>
      <button>el button</button>
    </div>
  );
}

export default App;
