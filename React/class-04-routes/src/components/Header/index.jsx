import { Link } from 'react-router-dom'
import './style.css'



export function Header() {
    
    
    return(
      <header>



         <div className='faixaTop'>
        
    
        
          <Link to="/"><p>Home</p></Link>
          <Link to="/gallery"><p>Galeria</p></Link> 
          <Link to="/contact"><p>Contacts</p></Link>

      </div>

      </header>
    )
}