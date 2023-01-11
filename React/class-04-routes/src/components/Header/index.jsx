import { Link, NavLink } from 'react-router-dom'
import './style.css'



export function Header() {
    
    
    return(
      <header>



         <div className='faixaTop'>
        
    
        <ul>

          <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><li>Home</li></NavLink>
          <NavLink to="/gallery"><li>Galeria</li></NavLink> 
          <NavLink to="/contact"><li>Contatos</li></NavLink>
        </ul>

      </div>

      </header>
    )
}