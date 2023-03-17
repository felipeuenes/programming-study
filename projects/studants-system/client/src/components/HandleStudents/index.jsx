import { Container } from './style'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import { BsFillTrash3Fill, BsSearch } from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { FormUpdate } from '../FormUpdate';




export function HandleStudents() {

    const [listStudents, setListStudents] = useState([])
    const [studentData, setStudentData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [searchStudent, setSearchStudent] = useState('')

    const filterStudents = listStudents.filter((student) => {
        return(
            String(student.id).toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.name.toLowerCase().includes(searchStudent.toLowerCase()) ||
            student.city.toLowerCase().includes(searchStudent.toLowerCase()) 

        )
    })
    console.log(filterStudents);


    const modalOpen = (studentID) => {
        
        setShowModal(true)
        console.log(studentID);

        const student = listStudents.findIndex(student => student.id == studentID);
        setStudentData(listStudents[student])
    }
        const modalClose = () => setShowModal(false);
    console.log(studentData);
   

    const API = 'http://localhost:3000/students/';

    function fetchStudents(){
        axios.get(API)
        .then((res) => setListStudents(res.data))
        .catch((error) => alert(error));
    }

    useEffect(() => {
        fetchStudents();
    }, [])

    const [studentDataForm, setStudentDataForm] = useState({
        id: studentData.id,
        name: studentData.name,
        email: studentData.email,
        fone: studentData.fone,
        city: studentData.city,
        
      });

    function deleteStudent(id){

        const isDelete = confirm('Deseja deletar?');
        if (isDelete) {
         axios.delete(API + `${id}`)
         .then((res) => {
           alert(res.data);
           fetchStudents();
           
         })
         .catch((error) => alert(error.response.data));
        }
     }
     console.log(studentData.id);

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
                        value={searchStudent}
                        onChange={(event) => setSearchStudent(event.target.value)}
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
                                filterStudents.map((students) =>{
                                    return(
                                    <tr key={students.id}>
                                        <td>{students.id}</td>
                                        <td>{students.name}</td>
                                        <td>{students.fone}</td>
                                        <td>{students.city}</td>
                                        <td id='detals'>
                                            <BiEdit className='editIcon' onClick={() => modalOpen(students.id)}/>
                                            <BsFillTrash3Fill onClick={() => deleteStudent(students.id)}/>
                                        </td>
                                        
                                    </tr>
                                    )
                                })
                                }
                       
                           
                        </tbody>
                        </Table>
                </section>


                <section>
               

      <Modal show={showModal} onHide={modalClose}>
            <Modal.Header closeButton>
                 <Modal.Title>Aluno</Modal.Title>
            </Modal.Header>
                 <Modal.Body>
                            <FormUpdate 
                            modalClose={modalClose}
                            studentData={studentData} 
                            fetchStudents={fetchStudents}
                            
                            />

                 </Modal.Body>
            
            </Modal>
                </section>
            </article>
        </Container>
    )
}