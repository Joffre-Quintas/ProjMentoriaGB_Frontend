import { useEffect, useState } from 'react';
import { URL } from '../../variavelURL';
import IPerson from '../../types/interfacePerson';

import './Modal.scss';

interface IModalProps {
    obj: IPerson,
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}
export default function Modal({ obj,state }: IModalProps) {
    const [person, setPerson] = useState({
        name: '',
        lastName:'',
        birthday: ''
    })
    const [showModal, setShowModal] = state;

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`${URL}/find-person/${obj.uuid}`)
            const data = await response.json()
            setPerson(data)
        }
        loadData()
    },[])

    function handleShowModal(e:React.FormEvent) {
        e.preventDefault()
        setShowModal((current:boolean) => !current)
    }

    function handleChangeInput(e:React.ChangeEvent<HTMLInputElement>) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setPerson(() => {
            return {
                ...person,
                [fieldName]: fieldValue
            }
        })
    }

    return(
        <div className='containerModal'>
            <div className='containerModal_modal'>
                <h1>Atualizar Registro</h1>
                <form>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" value={person && person.name} onChange={(e) => handleChangeInput(e)}/>
                    </div>
                    <div>
                        <label htmlFor="lastName">Sobrenome:</label>
                        <input type="text" name="lastName" id="lastName" value={person && person.lastName}/>
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de Nascimento:</label>
                        <input type="date" name="birthday" id="birthday" />
                    </div>
                    <button>Atualizar</button>
                    <button className='cancel' onClick={(e) => handleShowModal(e)}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}