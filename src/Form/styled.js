import styled from "styled-components";

export const StyledForm = styled.section`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
`;

export const StyledButton = styled.button`
    padding: 10px;
    background: teal;
    color: white;
    border: none;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background: hsl(180, 100%, 35%);
        transform: scale(1.2);
    }
`;