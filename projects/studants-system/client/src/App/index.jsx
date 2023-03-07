
import { Outlet } from "react-router-dom"
import { Menu } from "../components/Menu"
import { Container } from "./style"

export function App() {


  return (
   <Container>
      <header>
        <Menu/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Web Developement Course</p>
      </footer>

   </Container>
  
  )
}


