import IPerson from "../../types/interfacePerson";
import { URL } from '../../variavelURL';
import { useState } from 'react';
import Modal from "../Modal/Modal";

import './Card.scss';

//Icons
import { FiRefreshCcw } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

async function deletePerson(uuid:string) {
    try {
        await fetch(`${URL}/delete-person/${uuid}`, {
            method: 'DELETE'
        })
        alert('Pessoa deletada com sucesso!')
        window.location.reload()
    } catch (err) {
        console.log(err)
    }
}


export default function Card(props:IPerson) {
    const [showModal,setShowModal] = useState(false);
    
    function handleShowModal(e:React.FormEvent) {
        e.preventDefault()
        setShowModal(() => !showModal)
    }

    return (
        <>
            <div key={props.uuid} className='card'>
                
                <div>
                    <p className='card_label'>Nome Completo:</p>
                    <p>{props.name} {props.lastName}</p>
                </div>
                <div>
                    <p className='card_label'>Data de Nascimento:</p>
                    <p>{props.birthday}</p>
                </div>
                <div>
                    <p className='card_label'>Idade:</p>
                    <p>{props.age} {props.age <= 1 ? 'ano' : 'anos'}</p>
                </div>
                <div>
                    {props.isLegalAge ? <p className="legalAge">De maior</p> : <p className="notLegalAge">De menor</p>}
                </div>
                <div className="card_actions">
                    <button onClick={(e) => handleShowModal(e)}><FiRefreshCcw/> Atualizar</button>
                    <button onClick={() => deletePerson(props.uuid)}><RiDeleteBinLine/> Excluir</button>
                </div>

            </div>
            {showModal && <Modal obj={props} state={[showModal, setShowModal]}/>}
        </>
    )
}