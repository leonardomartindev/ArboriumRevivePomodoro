import { Jupiter, LinePlanet, Marte, PlanetsContainer, Saturno } from "./Planets.style";
import MarteImg from '../../public/Marte.svg'
import JupiterImg from '../../public/Jupiter.svg'
import SaturnoImg from '../../public/Saturno.svg'
export default function Planets() {
  return (
    <PlanetsContainer>
            <Marte src={MarteImg}/>
            <Jupiter src={JupiterImg}/>
            <Saturno src={SaturnoImg}/>
            <LinePlanet/>
    </PlanetsContainer>
  )
}
