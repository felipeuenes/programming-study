import styled from "styled-components";

export const Container = styled.div`

    border: .2rem solid #ddd;
    background: #f5f5f588;
    border-radius: .8rem;
    padding: 1.2rem;

    section{
        margin-top: 1.6rem;
        display: flex;
        flex-direction: column;
    }
    label{
        font-size: 1.2rem;
        line-height: 2.4rem;
    }
    input{
        padding: 0.2rem .8rem;
        border: .1rem solid #bbb;
        height: 2.0em;
    }
    input:focus{
        outline: .1rem solid orange;
        border: .1rem solid orange;
    }
    .erro{
        color: red;
        font-size: 1.2rem;
        display: block;
        position: absolute;
        margin-top: 6.0rem;
    }
    button{
        width: 100%;
        margin-top: 3.2rem;
        border: none;
        background: #008080;
        color: white;
        border-radius: .4rem;
        padding: .4rem;
        font-size: 1.4rem;
    }
    button:hover{
        background: #006060;
        cursor: pointer;
    }
`;