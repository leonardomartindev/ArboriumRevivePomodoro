import { StartPageContainer, Header, TitleContainer, StartContainer, StartCircle, TitleSvg, Satelite, StartText, PressStart, AstronautArms, PlanetsContainer, Marte, Jupiter, Saturno, LinePlanet} from "./Start.style";
import Title from '../../public/Title.svg'
import SateliteImg from '../../public/satelite.svg'
import AstronautAr from '../../public/astronautArms.png'
import MarteImg from '../../public/Marte.svg'
import JupiterImg from '../../public/Jupiter.svg'
import SaturnoImg from '../../public/Saturno.svg'
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Music from '../../public/spaceMsc.mp3'

export default function Start() {

    const { setGameStarted } = useContext(AppContext)

    function starterGame() {
        setGameStarted(true)
    }
    
  return (
    <StartPageContainer>
        <audio src={Music} autoPlay loop/>
        <Header>
            <TitleContainer>
                <TitleSvg src={Title}/>
            </TitleContainer>
        </Header>
        <StartContainer>
            <StartCircle>
                <Satelite src={SateliteImg}/>
            </StartCircle>
            <StartText onClick={starterGame}>start</StartText>
            <PressStart onClick={starterGame}>press start</PressStart>
        </StartContainer>
        <AstronautArms src={AstronautAr}/>
        <PlanetsContainer>
            <Marte src={MarteImg}/>
            <Jupiter src={JupiterImg}/>
            <Saturno src={SaturnoImg}/>
            <LinePlanet/>
        </PlanetsContainer>
    </StartPageContainer>
    )
}
