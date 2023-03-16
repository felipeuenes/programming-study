import './style'
import { Container } from './style'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import axios from 'axios';
import { useState } from 'react';




export function FormRegister() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [fone, setFone] = useState('')
    
    const API = 'http://localhost:3000/students';

    function onSubmit(data) {
    
        console.log(data);

        axios.post(API, data)
        .then((res) => {
            alert(res.data)
            setFone('')
            reset()
        })
        .catch((error) => alert(error.response.data))

        
      
    }




    console.log(errors);


    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" {...register("name", {required: true})} placeholder='Seu nome...'/>

                    {errors.name && <span className='erro'>Campo obrigatório</span>}
                </section>
                <section>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register("email" , {required: true})} placeholder='seunome@email.com'/>

                    {errors.email && <span className='erro'>Campo obrigatório</span>}
                </section>
                <section>
                    <label htmlFor="fone">Telefone</label>
                    <InputMask mask={'(99) 9 9999-9999'} maskChar='' type="tel" id="fone" {...register("fone" , {required: true})} placeholder='(00) 0 0000-0000' value={fone} onChange={(event) => setFone(event.target.value)}/>

                    {errors.email && <span className='erro'>Campo obrigatório</span>}
                </section>
                <section>
                    <label htmlFor="city">Cidade:</label>
                    <input type="text" id="city" {...register("city" , {required: true})} placeholder='Sua cidade...'/>

                    {errors.email && <span className='erro'>Campo obrigatório</span>}
                </section>
                <button>Cadastrar</button>
            </form>
        </Container>
    )
}