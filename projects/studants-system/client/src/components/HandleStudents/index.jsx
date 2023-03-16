import { Container } from './style'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { BsSearch } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FormUpdate } from '../FormUpdate';



export function HandleStudents() {

    const [listStudents, setListStudents] = useState([])
    const [showModal, setShowModal] = useState(false);


    const modalOpen = () => setShowModal(true);
    const modalClose = () => setShowModal(false);
    
   

    const API = 'http://localhost:3000/students';

    function fetchStudents(){
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error));
    }

    useEffect(() => {
        fetchStudents();
    }, [])

    console.log(listStudents);

    

    return(
        <Container>
            <article>
                <section className='titleSeach'>
                    <h2>Alunos</h2>
                    <div className='inputSection'>
                        <input
                        type="text"
                        id='inputSearchStudents'
                        placeholder=' '
                        />
                        <label htmlFor="inputSearchStudents" className='labelInputSearch'>Buscar aluno</label>
                        <BsSearch className='searchIcon'/>
                    </div>
                </section>
                <section className='tableStudents'>
                     <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Cidade</th>
                            <th>Detalhes</th>
                            </tr>
                        </thead>
                        <tbody>
                            { listStudents &&
                                listStudents.map((students) =>{
                                    return(
                                    <tr key={students.id}>
                                        <td>{students.id}</td>
                                        <td>{students.name}</td>
                                        <td>{students.fone}</td>
                                        <td>{students.city}</td>
                                        <td>
                                            <BiEdit className='editIcon' onClick={modalOpen}/>
                                        </td>
                                        
                                    </tr>
                                    )
                                })
                                }
                            {/* <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@</td>
                            </tr> */}
                           
                        </tbody>
                        </Table>
                </section>


                <section>
               

      <Modal show={showModal} onHide={modalClose}>
            <Modal.Header closeButton>
                 <Modal.Title>Aluno</Modal.Title>
            </Modal.Header>
                 <Modal.Body>
                            <FormUpdate/>

                 </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary" onClick={modalClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={modalClose}>
                        Salvar alterações
                    </Button>
        </Modal.Footer>
      </Modal>
                </section>
            </article>
        </Container>
    )
}