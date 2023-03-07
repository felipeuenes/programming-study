import styled from "styled-components";

export const Header = styled.div`
    
    flex-direction: row;
    background-color: black;
    color: white;
    height: 10.0rem;
    display: flex;
    justify-content: center;
    align-items: center;

    
    ul{
        display: flex;
        color: white;
        gap: 3.6rem;
        list-style: none;
        justify-content: center;
        align-items: center;
        font-size: 2.2rem;
        font-weight: 600;
    }
    a{
        color: white;
    }
    .select{
        color: #44bbff;
    }
    a:hover{
        color: #88aaff;
    }

    #logo{
        width: 8.0rem;
        position: absolute;
        left: 2.0rem;
    }
`;