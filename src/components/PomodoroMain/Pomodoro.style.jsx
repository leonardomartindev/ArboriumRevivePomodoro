import styled from "styled-components"
export const PomoContainer = styled.div`
    width: 100vw;
    display:flex;

    flex-direction:column;
    gap: 1.5rem;
    align-items:center;
    margin-top: 8rem;

    div{
        position:relative;
    }    
    `
export const PomoPlanet = styled.div`
    height: 300px;
    background: linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%);
    width: 300px;
    border-radius: 50%;
`
export const PomoTimer = styled.h1`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 40%;
    color:white;
    font-size: 5rem;
    font-weight: normal;
`
export const PomoName = styled.button`
    font-family: 'Space Mono', monospace;
    font-size: 2rem;
    width: auto;
    border: none;
    color: #aaa;
    text-align:center;
    padding: 5px 15px;
    border-bottom: #aaa 2px solid;
    cursor: pointer;
    transition: ease 300ms all;
    &:hover{ 
        background-color: #DCDCDC;
        color: #373737;
    }
`
export const ButtonContainer = styled.div`
    display:flex;
    gap: 1.5rem;
`
export const PomoPlay = styled.div`
    color:white;
    background-color:black;
    padding: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 4rem;
    border-radius: 14px;
    cursor:pointer;
    display: ${props => props.isRunning ? "none" : "flex"}
`
export const PomoPause = styled.div`
    color:white;
    background-color:black;
    padding: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 4rem;
    border-radius: 14px;
    cursor:pointer;
    display: ${props => props.isRunning ? "flex" : "none"}


`
export const PomoReset = styled.div`
    color:white;
    background-color:black;
    padding: 1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 4rem;
    border-radius: 14px;
    cursor:pointer;
    display: ${props => props.isRunning ? "flex" : "none"}
`
export const PomoPlayers = styled.div`
    display:flex;
    gap: 1.5rem;
`

export const PomoMenu = styled.div`
    font-size: 4rem;
    position:absolute;
    top: 10px;
    right: 10px;
    cursor:pointer;


`

export const PomoCycle = styled.div`
    position:absolute;
    left: 20px;
    top: 20px;
    gap: 12px;
    display:flex;
    flex-direction:column;
`
export const CycleItem = styled.div`
    width: 42px;
    height: 42px;
    background-color: #D9D9D9;
    border-radius: 50%;
    background: ${props => props.completed ? "linear-gradient(215deg, #AA8478 14.83%, #945A4F 30.03%, #6D170E 46.75%, #70130B 59.67%, #000 87.79%)" : "#D9D9D9"}

`
export const CycleLine = styled.div`
    display:flex;
    gap: 1rem;
`

