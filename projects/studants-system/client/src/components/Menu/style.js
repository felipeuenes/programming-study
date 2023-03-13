import styled from "styled-components";

export const Header = styled.div`
    
   background: #000c;
   width: 100%;
   padding: 2.4rem;
   height: calc(100vh - 10.0rem);
   position: absolute;

   z-index: 1;
   display: grid;
   place-content: center;

   ul{
        list-style: none;
        font-size: 2.6rem;
        text-align: center;

        display: grid;
        gap: 4.8rem;
        
    }

    a{
        color: white;
        padding: .2rem;
        border-radius: .4rem;
        border-bottom: .2rem solid transparent;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
    }
    a:hover{
        border-bottom-color: ${({theme}) => theme.colors.neutral8};
    }
    .select{
        color: #77ccdd;
    }
`;