import IPerson from "../../types/interfacePerson";

import './Card.scss';


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
                <button>Excluir</button>
            </div>
        </div>
    )
}