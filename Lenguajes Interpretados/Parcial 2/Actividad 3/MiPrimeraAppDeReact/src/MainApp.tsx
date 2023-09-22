import Encabezado from "./components/encabezado"
import CuadradoVerde from "./components/cuadradoVerde"
import Elementos from "./components/Elementos"
import CuadradoMorado from "./components/CuadradoMorado"
import ElementosVerde from "./components/ElementosVerde"
import RectanguloRojo from "./components/RectanguloRojo"

const MainApp = () => {
    return(<>
    <Encabezado></Encabezado>
    <CuadradoVerde></CuadradoVerde>
    <Elementos></Elementos>
    <CuadradoMorado></CuadradoMorado>
    <ElementosVerde></ElementosVerde>
    <RectanguloRojo></RectanguloRojo>
    </>)
}

export default MainApp