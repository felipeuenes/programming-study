import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: auto;

    main{
        max-width: 32.0rem;
        margin: 0 auto;
        padding: 2.4rem 0 7.6rem;
        text-align: justify;
    }

    footer{
        background-color: black;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .8rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

`;