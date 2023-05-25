import IPerson from "../../types/interfacePerson";
import { URL } from '../../variavelURL';

import './Card.scss';

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
    return (
        <div key={props.uuid} className='card'>
            
            <div>
                <p className='card_label'>Nome:</p>
                <p>{props.name}</p>
            </div>
            <div>
                <p className='card_label'>Sobrenome:</p>
                <p>{props.lastName}</p>
            </div>
            <div>
                <p className='card_label'>Data de Nascimento:</p>
                <p>{props.birthday}</p>
            </div>
            <div>
                <p className='card_label'>Idade:</p>
                <p>{props.age} anos</p>
            </div>
            <div>
                {props.isLegalAge ? <p className="legalAge">De maior</p> : <p className="notLegalAge">De menor</p>}
            </div>
            <div className="card_actions">
                <button>Atualizar</button>
                <button>Exibir</button>
                <button onClick={() => deletePerson(props.uuid)}>Excluir</button>
            </div>
        </div>
    )
}