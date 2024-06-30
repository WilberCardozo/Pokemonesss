import imagen from './assets/pokemon.jpg'
import './App.css'
function Saludo(){
    return(
      <>
        <h1>Front END 2024</h1>
        <h1> Hello React ..!</h1>
        <h1>Esta es mi primera APP con React</h1>
        <img className="logo"src={imagen}/>
      </>
    
    )
  }

  export default Saludo;