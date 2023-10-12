import styled from 'styled-components'

export const ContainerMain = styled.main`
    display:flex;
    width: 100vw;
    height: 100vh;
    align-items:center;
    margin-top: -8rem;
    justify-content:center;
    gap: 10rem;

    @media(max-width: 600px){
        padding: 0 2rem;
        flex-direction:column;
    }
`
export const Planet = styled.img`
    width: 33vw;
    position:relative;
    z-index: 1;

    @media(max-width: 600px){
        width: 40vw;
    }        
`
export const Info = styled.p`
    font-size: 2.5rem;
    width: 30vw;
    display:flex;
    flex-direction: column;
    gap: 4rem;
    transition: opacity 1s ease-out; 

    @media(max-width: 600px){
        width: auto;

    }
`
export const Continue = styled.button`
    border: none;
    width: fit-content;
    padding: 1.5rem 3rem;
    cursor: pointer;
    font-size: 2.5rem;
    background-color:black;
    color: white;
    text-transform: uppercase;
`
export const Form = styled.form`
    position: absolute; 
    transition: right 1s ease-out;
    text-align:center;
    font-size: 2.2rem;
    display:flex;
    flex-direction:column;
    gap: 4rem;

    @media(max-width: 600px){
        gap: 2rem;
        margin-top: 40%;
        margin-left: 5rem;
    }        

    `
export const Input = styled.input`
    font-family: 'Space Mono', monospace;
    outline:none;
    border: 2px solid black;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    text-align:center;
    width: 40%;
    `
export const Label = styled.label`
    font-family: 'Space Mono', monospace;
    font-style: italic;
`
export const FieldContainer = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    gap: 1rem;
    left: ${props => props.left || "-2rem"};
    position:relative;

    @media(max-width: 600px){
        gap: 5rem;
        left: 0;
        flex-direction:row;
    }
`
export const Line = styled.div`
    width: 190%;
    position:absolute;
    height: 2px;
    background-color: black;
    top: 70%;
    right: 70%;

    @media(max-width: 600px){
        width: 100%;
        display:none;
        
    }
`
export const Button = styled.button`
    font-family: 'Space Mono', monospace;
    outline:none;
    border: 2px solid black;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    background:black;
    border:none;
    color:white;
    text-transform:uppercase;
    font-weight: bold;
    cursor:pointer;
`