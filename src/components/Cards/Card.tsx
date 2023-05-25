import IPerson from "../../types/interfacePerson";

import './Card.scss';

export default function Card(props:IPerson) {
    return (
        <div key={props.name + props.lastName} className='card'>
            <div>
                <span className='card_label'>Nome:</span><span>{props.name}</span>
            </div>
            <div>
                <span className='card_label'>Sobrenome:</span><span>{props.lastName}</span>
            </div>
            <div>
                <span className='card_label'>Data de Nascimento:</span><span>{props.birthday}</span>
            </div>
            <div>
                <span className='card_label'>Idade:</span><span>{props.age}</span>
            </div>
            <div>
                {props.isLegalAge ? <span className="legalAge">De maior</span> : <span className="notLegalAge">De menor</span>}
            </div>
        </div>
    )
}