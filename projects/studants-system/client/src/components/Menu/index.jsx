import './style.js'
import { Header } from './style'
import { Link, NavLink } from 'react-router-dom'

export function Menu() {
    return(
        <>
        <Header>
            <img src="logo-rj.png" alt="logo-rj" id='logo'/>
            <nav>

            <ul>
                <NavLink to="/" className={({isActive}) => isActive ? "select" : ""}><li>Home</li></NavLink>
                <NavLink to="/register" className={({isActive}) => isActive ? "select" : ""}><li>Cadastro</li></NavLink>
                <NavLink to="/students" className={({isActive}) => isActive ? "select" : ""}><li>Estudantes</li></NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "select" : ""}><li>Sobre</li></NavLink>
            </ul>
            </nav>

        </Header>
        </>
    )
}