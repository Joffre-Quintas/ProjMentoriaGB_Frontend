import IPersonOrdner from '../../types/interfacePersonOrdner';
import { URL } from '../../variavelURL';

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


export default function Card(props:IPersonOrdner) {
    return (
        <div key={props.uuid} className='card'>
            <div>
                <p>{props.pos}.</p>
            </div>
            <div>
                <p className='card_label'>Nome Completo:</p>
                <p>{props.completName}</p>
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
                <button>Atualizar</button>
                <button>Exibir</button>
                <button onClick={() => deletePerson(props.uuid)}>Excluir</button>
            </div>
        </div>
    )
}