import './style.js'
import { Header } from './style'
import { Link, NavLink } from 'react-router-dom'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import { BsPersonFillAdd, BsFillPersonLinesFill } from 'react-icons/bs'


export function Menu() {
    return(
        <>
        <Header>
        
            <nav>

            <ul>
                <NavLink to="/" className={({isActive}) => isActive ? "select" : ""}><li> <AiFillHome/> Home</li></NavLink>
                <NavLink to="/register" className={({isActive}) => isActive ? "select" : ""}><li><BsPersonFillAdd/> Cadastro</li></NavLink>
                <NavLink to="/students" className={({isActive}) => isActive ? "select" : ""}><li> <BsFillPersonLinesFill/> Estudantes</li></NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "select" : ""}><li> <AiFillInfoCircle/> Sobre</li></NavLink>
            </ul>
            </nav>

        </Header>
        </>
    )
}