import styled, { keyframes } from 'styled-components'


const rotate = keyframes`
    100% {transform: rotate(180deg);}
`;

export const SideBar = styled.aside`
    background:white;
    border-left: 4px solid black;
    width: 30vw;
    height: 100vh;
    display:flex;
    z-index: 1;
    align-items:center;
    flex-direction:column;
    position:fixed;
    top: 0;
    right: ${props => (props.visible ? "0" : "-40vw")};
    transition: right 300ms ease-in-out;
`

export const CloseBar = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    padding: 1rem 1.5rem;
    font-size: 2rem;
    font-weight: bold;
    border: none;
    background-color:black;
    cursor: pointer;
`
export const Form = styled.form`
    margin-top: 8rem;
    width: 90%;
    display:flex;
    flex-direction:column;
    gap: 2.5rem;

`
export const Field = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1rem;
`
export const Label = styled.label`
    font-size: 2rem;
    font-family: 'Space Mono', monospace;

`
export const Input = styled.input`
    outline:none;
    border: 3px solid black; 
    border-radius: 12px;
    padding: 1rem;
    font-size: 1.6rem;
    font-family: 'Orbitron', sans-serif;
`
export const SaveBtn = styled.button`
    position:absolute;
    bottom: 12px;
    right: 20px;
    border: none;
    background-color:white;
    font-family: 'Space Mono', monospace;
    font-size: 2rem;
    cursor: pointer;
    z-index: 2;
`
export const Circle = styled.div`
    border: 2px solid black;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    position:absolute;
    bottom: -30%;
    right: -40%;
    animation: ${rotate} 10s linear infinite;

`
export const Rocket = styled.div`
    position:absolute;
    bottom: 30%;
    left: -6%;
    font-size: 4rem;
    background-color:white;
    padding: 15px;
    width: fit-content;
    transform: rotate(-55deg);

`

