import { useState } from 'react';
import TextoDigitado from "./TextoDigitado";
import { Astronauta, Container, FirstContainer, SkipD, SphereAstronauta, SunCircle, TextContainer, Title } from "./ContainerDialogos.style";
import AstronautaImg from '../../public/Astronaut.png'
import SphereAstronautImg from '../../public/sphereAstronaut.png'
import { FaLongArrowAltRight } from "react-icons/fa"
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Planets from '../PlanetsFooter/Planets';

export default function ConteinerDialogos() {
    const {texts, setShowSettings} = useContext(AppContext)
    const [currentText, setCurrentText] = useState('fala1');
    const textKeys = Object.keys(texts);
    const handleClick = () => {
        const currentIndex = textKeys.indexOf(currentText);
        if (currentIndex < textKeys.length - 1) {
            setCurrentText(textKeys[currentIndex + 1]);
        }
        if(currentText === "fala6"){
          setShowSettings(true)
        }
    }
    const skip = () => {
      setCurrentText("fala6")
    }
 
    return (
    <Container>
      <FirstContainer>
          {currentText != "fala6" ? <Astronauta src={AstronautaImg}/> : <SphereAstronauta src={SphereAstronautImg}/>}
          <SunCircle/>
      </FirstContainer>
        <TextContainer>
          <Title>Prof. Sylvan</Title>
          <TextoDigitado key={currentText} text={texts[currentText]}/>
        </TextContainer>
        <FaLongArrowAltRight onClick={handleClick} />
        <Planets/>
        <SkipD onClick={skip}>pular</SkipD>
    </Container>
  )
}
