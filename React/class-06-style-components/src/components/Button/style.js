import styled from "styled-components";


export const ButtonHome = styled.button`
    background-color: ${({theme}) => theme.Color.main};
    color: ${({theme}) => theme.Color.complementary};
    padding: 1.6rem;
    border-radius: .8rem;
    border: none;
    margin-top: 1.6rem;

    &:hover{
        background-color: #0000aa;
        cursor: pointer;
    }

`