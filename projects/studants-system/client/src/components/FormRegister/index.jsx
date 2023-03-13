import './style'
import { Container } from './style'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'


export function FormRegister() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    function onSubmit(data) {
    
        console.log(data);
        alert("Aluno cadastrado!")
        reset()
    }

    console.log(errors);
    return(
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" {...register("name", {required: true})} />

                    {errors.name && <span className='erro'>Campo obrigatório</span>}
                </section>
                <section>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register("email" , {required: true})}/>

                    {errors.email && <span className='erro'>Campo obrigatório</span>}
                </section>
                <section>
                    <label htmlFor="fone">Telefone</label>
                    <InputMask mask={'(99) 9 9999-9999'} maskChar='' type="tel" id="fone" {...register("fone" , {required: true})}/>

                    {errors.email && <span className='erro'>Campo obrigatório</span>}
                </section>
                <section>
                    <label htmlFor="city">Cidade:</label>
                    <input type="text" id="city" {...register("city" , {required: true})}/>

                    {errors.email && <span className='erro'>Campo obrigatório</span>}
                </section>
                <button>Cadastrar</button>
            </form>
        </Container>
    )
}