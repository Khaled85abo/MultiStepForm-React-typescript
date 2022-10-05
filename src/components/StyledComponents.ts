import styled from 'styled-components';

export const AppWrapper = styled.div`
    position: relative;
    background-color: white;
    border: 1px solid black;
    padding: 2rem;
    margin: 1rem;
    border-radius: 0.5rem;
    font-family: Arial;
    max-width: max-content;
`

export const Wrapper = styled.div`
    h2{
        text-align: center; 
        margin: 0; 
        margin-bottom: 2rem;
    }
    div{
        display: grid;
        gap: 1rem .5rem;
        justify-content: center;
        grid-template-columns: auto minmax(auto, 400px);
    }
`

export const PageIndicator = styled.div`
    position: absolute; 
    top: 0.5rem; 
    right: 0.5rem;
    font-weight: bold;
`

export const ActionButton = styled.div`
    margin-top: 1rem; 
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
`