import { useState } from 'react';
import './Register.scss';
import { URL } from '../../variavelURL';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    interface IForm {
        name: string,
        lastName:string,
        birthday: string
    }

    const [form, setForm] = useState<IForm>({
        name: '',
        lastName:'',
        birthday: ''
    })

    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>) {
        const fieldInput = e.target.id;
        const fieldValue = e.target.value;

        setForm(() => {
            return {
                ...form,
            [fieldInput]: fieldValue
            }
        })
    }

    async function handleSubmitForm (e:React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        try {
          await fetch(`${URL}/create-person`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(form)
          }).then(() =>  navigate('/registerSucessfull'))

        } catch (err) {
            console.log(err)
        }
    }
    return(
        <form className="containerForm">
            <h1>Registro</h1>
            <div className='containerForm_divInputText'>
                <input type="text" name="name" id="name" placeholder=' ' onChange={(e)=> handleInputChange(e)}/>
                <label htmlFor="name">Nome</label>
            </div>
            <div className='containerForm_divInputText'>
                <input type="text" name="lastName" id="lastName" placeholder=' ' onChange={(e)=> handleInputChange(e)}/>
                <label htmlFor="lastName">Sobrenome</label>
            </div>
            <div className='containerForm_divBirthday'>
                <label htmlFor="birthday">Data de Nascimento</label>
                <input type="date" name="birthday" id="birthday" onChange={(e)=> handleInputChange(e)}/>
            </div>
            <div className='containerForm_divSubmit'>
                <button onClick={(e) => handleSubmitForm(e)}>Cadastrar</button>
            </div>
        </form>
    )
}