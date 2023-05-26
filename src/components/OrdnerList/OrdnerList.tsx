import { useEffect, useState } from 'react';
import CardToOrdner from '../CardToOrdner/CardToOrdner';
import IEndpoint from '../../types/interfaceEndpoint';

import './OrdnerList.scss';
import IPersonOrdner from '../../types/interfacePersonOrdner';

export default function GeneralList(props:IEndpoint) {
    const [allPerson, setAllPerson] = useState<IPersonOrdner[]>(null!);

    useEffect(() => {
        async function listAPI() {   
            const response = await fetch(props.endpoint);
            const people: IPersonOrdner[] = await response.json()
            setAllPerson(people)
        }
        listAPI()
    },[])

    if(!allPerson) {
        return <p>Carregando...</p>
    } else if (allPerson.length == 0 ) {
        return <p>Não há pessoas neste perfil.</p>
    } else {
        return(
            <div className='generalListContainer'>
            {allPerson && allPerson.map((person,index) => {
                return (
                    <CardToOrdner
                    key={person.uuid}
                    completName={person.completName}
                    birthday={person.birthday}
                    age={person.age}
                    isLegalAge={person.isLegalAge}
                    uuid={person.uuid} 
                    pos={index + 1}/>                    
                    )
                })}
            </div>
        )
    }
}