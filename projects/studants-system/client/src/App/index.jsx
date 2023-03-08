
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

import { Container } from "./style"

export function App() {


  return (
   <Container>
      <header>
       <Header/>
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


