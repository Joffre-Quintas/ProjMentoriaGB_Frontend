import { useEffect, useState } from 'react';
import { URL } from '../../variavelURL';

import './Modal.scss';

export default function Modal({ obj }) {
    const [person, setPerson] = useState()

    useEffect(() => {
        async function loadData() {
            const response = await fetch(`${URL}/find-person/${obj.uuid}`)
            const data = await response.json()
            setPerson(data)
        }
        loadData()
    },[])

    return(
        <div className='containerModal'>
            <div className='containerModal_modal'>
                <h1>Atualizar Registro</h1>
                <form>
                    <div>
                        <label htmlFor="name">Nome:</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div>
                        <label htmlFor="lastName">Sobrenome:</label>
                        <input type="text" name="lastName" id="lastName" />
                    </div>
                    <div>
                        <label htmlFor="birthday">Data de Nascimento:</label>
                        <input type="date" name="birthday" id="birthday" />
                    </div>
                    <button>Atualizar</button>
                </form>
            </div>
        </div>
    )
}