import { Container } from "./style";
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { useState } from "react";
import { Menu } from '../Menu'
import { Link } from "react-router-dom";

export function Header() {

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => setMenuActive(!menuActive);

    return(
        <>
        <Container>
            <button onClick={toggleMenu}>

                {
                    menuActive ? 
                    <IoMdClose className="menuIcon" /> :
                    <IoMdMenu className="menuIcon" />
                    
                }
            </button>
                <div className="logoMenu">
                    <div>
                    <h1>Sistema de Estudantes</h1>
                    <h3>Curso de Desenvolvimento Web</h3>
                    </div>
                </div>
            <Link to="/">
                <img src="./logo-rj.png" alt="logo" srcset="" />
            </Link>


        </Container>
        <div onClick={toggleMenu}>
            {
                menuActive && <Menu/>
            }
           
        </div>
        </>
    )
}