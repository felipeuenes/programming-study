import { Link, NavLink } from 'react-router-dom'
import './style.css'



export function Header() {
    
    
    return(
      <header>



         <div className='faixaTop'>
        
    
        
          <NavLink to="/" className={({isAtive}) => isAtive ? 'active' : ''}><p>Home</p></NavLink>
          <NavLink to="/gallery"><p>Galeria</p></NavLink> 
          <NavLink to="/contact"><p>Contacts</p></NavLink>

      </div>

      </header>
    )
}