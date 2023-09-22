import styled, { keyframes } from 'styled-components'
import StarsBg from '../../public/StarsBg.png'
import WaveImg from '../../public/pedra.svg'

const rotate = keyframes`
    100% {transform: rotate(360deg);}
`;
const planet = keyframes`
    0% {transform: translateX(0px);}
    50% {transform: translateX(100px);}
    100% {transform: translateX(0px);}
`;
const translate = keyframes`
    0% {transform: translateX(0) translateY(0);}
    50% {transform: translateX(20px) translateY(10px);}
    75% {transform: translateX(10px) translateY(-10px);}
    100% {transform: translateX(0px) translateY(0px);}
`;
const blinkAnimation = keyframes`
  0% {
    opacity: 1; /* Texto totalmente visível */
  }
  50% {
    opacity: 0; /* Texto totalmente invisível */
  }
  100% {
    opacity: 1; /* Texto totalmente visível novamente */
  }
`;


export const StartPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    font-weight: bold;
    align-items: center;   

    @media(max-width: 1000px){
     justify-content: center;   
     align-items: center;   
    }
`
export const Header = styled.header`
    display: flex;
    font-size: 3rem;
    align-items:center;
    margin-top: 1rem;
`
export const TitleContainer = styled.div`
`
export const TitleSvg = styled.img`
    width: 45vw;
    

    @media(max-width: 1000px){
     width: 80vw;
     margin-bottom: 5rem;
    }
    @media(max-width: 700px){
     width: 80vw;
     margin-bottom: 8rem;
     margin-left: 10rem;
    }

    `


export const StartContainer = styled.main`
    width: 100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
    export const StartCircle = styled.div`
    width: 40rem;
    height: 40rem;
    background-image: url(${StarsBg});
    background-size: 70%;
    border-radius: 50%;
    display:flex;
    text-transform: uppercase;
    justify-content:center;
    align-items:center;
    border: .8rem solid #FF4900;
    box-shadow: 0px 0px 15px #FF4900;
    animation: ${rotate} 70s linear infinite;

    

`
export const StartText = styled.p`
    color:white;
    margin-top: -4rem;
    font-size: 9.5rem;
    position:absolute; // Adicione esta linha
    text-transform: uppercase;
    cursor:pointer;

`
export const PressStart = styled.p`
    margin-top: 1rem;
    font-size: 2rem;
    text-transform: capitalize;
    color: #B5B5B5;
    animation: ${blinkAnimation} 1s ease infinite; /* Aplica a animação */
    cursor:pointer;
    transition: color ease 300ms;

    &:hover{
        color: #FF4900;
    }
`
export const Satelite = styled.img`
    width: 70px;
    margin-top: -48rem;
    transform: rotate(60deg);

`
export const Wave = styled.div`
    width: 100vw;
    height: 25vh;
    backround-size: contain;
    background-repeat: no-repeat;
    background-image: url(${WaveImg});
`

export const AstronautArms = styled.img`
    width: 50rem;
    transform: rotate(2deg);
    position: absolute;
    bottom: -2rem;
    right: 0rem;
    filter: brightness(95%);
    animation: ${translate} 18s linear infinite;

    @media(max-width: 1100px){
        width: 40rem;
    }
    @media(max-width: 900px){
        display:none;
    }
`
export const PlanetsContainer = styled.div`
    display:flex;
    width: 100vw;
    justify-content:center;
    gap: 20rem;
    margin-top: 3rem;
    `
export const Marte = styled.img`
    width: 45px;
`
export const Jupiter = styled.img`
    width: 85px;

`
export const Saturno = styled.img`
    width: 6%;

`
export const LinePlanet = styled.div`
    width: 120vw;
    height: 1px;
    border: 2px dashed #273036;
    margin-top: 4.5rem;
    position: absolute;
    z-index: -1;
    animation: ${planet} 50s linear infinite;

`
