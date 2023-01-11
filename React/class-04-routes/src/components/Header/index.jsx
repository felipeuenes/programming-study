import { Link, NavLink } from 'react-router-dom'
import './style.css'



export function Header() {
    
    
    return(
      <header>



         <div className='faixaTop'>
        
    <nav>

        <ul>

          <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li>Home</li></NavLink>
          <NavLink to="/gallery" className={({isAtive}) => isAtive ? 'active' : ''}><li>Galeria</li></NavLink> 
          <NavLink to="/contact" className={({isAtive}) => isAtive ? 'active' : ''}><li>Contatos</li></NavLink>
        </ul>
    </nav>

      </div>

      </header>
    )
}