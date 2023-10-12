import styled from 'styled-components'

export const Container = styled.div`
    border: 2px solid black;
    width: 82vw;
    margin: auto;
    margin-top: 10rem;
    padding: 1rem 1rem 0 2rem;
    border-radius: 14px;
    display:flex;
    user-select: none;
    background:white;
    position:relative;
    box-shadow: 0px 0px 20px rgba(0,0,0, .2);

    p{ 
        font-size: 1.8rem;

        @media(max-width: 600px){
            padding-bottom: 5rem;
        }
    }
    svg{
        position:absolute;
        right: 20px;
        bottom: 5px;
        font-size: 5rem;
        cursor: pointer;
        transition: all ease 300ms;
        &:hover{
            right: 35px;
            color: #ff5500;
        }
       
    }
    @media(max-width: 600px){
        margin-top: 5rem;
        flex-direction: column;
        align-items:center;
        min-height: 400px;
    }
`

export const TextContainer = styled.div`
    display:flex;
    flex-direction:column;

`
export const Title = styled.h1``
export const Astronauta = styled.img`
    position:relative;
    z-index: 1;

    @media(max-width: 600px){
        width: 30vw;
    }
`
export const SphereAstronauta = styled.img`
    position:relative;
    width: 400px;
    left: -40px;
    z-index: 1;

    @media(max-width: 600px){
        width: 40vw;
        left: 0px;
    }
`

export const FirstContainer = styled.div`
    position:relative;

`
export const SunCircle = styled.div`
    width: 280px;
    height: 280px;
    position:absolute;
    top:15%;
    border-radius: 50%;
    background-color: #FFD100;
    z-index: 0;

    @media(max-width: 600px){
        width: 30vw;
        height: 30vw;
    }

`
export const Arrow = styled.div``

export const SkipD = styled.button`
    font-size: 2rem;
    background:none;
    border:none;
    font-family: Space Mono;
    color: #878787;
    text-transform: uppercase;
    position:absolute;
    top: -4.55rem;
    right: 1rem;
    cursor: pointer;
    padding: 1rem;
    transition: all 300ms ease;
    &:hover{ 
        background: black;
        color:white;
        border-radius: 6px;
    }
`