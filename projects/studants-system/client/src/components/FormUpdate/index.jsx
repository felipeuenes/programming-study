import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios';


export function FormUpdate({modalClose, studentData, fetchStudents}) {


  const [validated, setValidated] = useState(false);
  const [studentDataForm, setStudentDataForm] = useState({
    id: studentData.id,
    name: studentData.name,
    email: studentData.email,
    fone: studentData.fone,
    city: studentData.city,
    
  });
  
  // console.log(studentDataForm);


  const API = 'http://localhost:3000/students/';

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    event.preventDefault();
    updateStudent();
  };



  function updateStudent(){

    axios.put(API + `${studentData.id}`, studentDataForm)
    .then((res) => {
      alert(res.data);
      fetchStudents();
      modalClose()
    })
    .catch((error) => alert(error.response.data));

  
  }
  function deleteStudent(){

   const isDelete = confirm('Deseja deletar?');
   if (isDelete) {
    axios.delete(API + `${studentData.id}`)
    .then((res) => {
      alert(res.data);
      fetchStudents();
      modalClose()
    })
    .catch((error) => alert(error.response.data));
   }

  }




    function handleInputsChange(event){
        const {name, value} = event.target;
        console.log({name, value});
        setStudentDataForm({...studentDataForm,
        [name]: value
      })
    }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <Row className="mb-3">
        <Form.Group as={Col} md="2" controlId="id">
          <Form.Label>ID</Form.Label>
          <Form.Control
          type="text"
          placeholder="ID do aluno"
          required
          disabled
          name='id'
          value={studentDataForm.id}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório!
          </Form.Control.Feedback>
       
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group  md="9" controlId="name">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
          type="text"
          placeholder="Nome do aluno"
          required 
          name='name'
          value={studentDataForm.name}
          onChange={handleInputsChange}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório!
          </Form.Control.Feedback>
       
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group md="5" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
          type="email"
          placeholder="Email do aluno"
          required
          name='email'
          value={studentDataForm.email}
          onChange={handleInputsChange}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório!
          </Form.Control.Feedback>

        </Form.Group>
   </Row>
    <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="fone">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
          type="tel"
          placeholder="(00) 9 9999-9999"
          required
          name='fone'
          value={studentDataForm.fone}
          onChange={handleInputsChange}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório!
          </Form.Control.Feedback>
        </Form.Group>
      
        <Form.Group as={Col} md="6" controlId="city">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control
          type="text"
          placeholder="Cidade do aluno"
          required
          name='city'
          value={studentDataForm.city}
          onChange={handleInputsChange}
          />
          <Form.Control.Feedback type="invalid">
            Campo obrigatório!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Modal.Footer>
            <Button variant="danger" onClick={deleteStudent}>
                Delete
            </Button>
           
            <Button type="submit" variant='success'>Atualizar</Button>
        </Modal.Footer>
     
    </Form>
  );
}
