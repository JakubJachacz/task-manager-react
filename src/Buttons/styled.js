import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
`;

export const Button = styled.button`
    background-color: transparent;
    color: hsl(180, 100%, 25%);
    border: none;
    margin: 0 0 0 20px;
    transition: 0.3s;

    &:hover {
        color: hsl(180, 100%, 30%); 
    }

    &:disabled {
        color: #ccc; 
    }
`;