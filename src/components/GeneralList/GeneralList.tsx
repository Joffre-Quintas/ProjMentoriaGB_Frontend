import { useEffect, useState } from 'react';
import IPerson from '../../types/interfacePerson';
import Card from '../Cards/Card';
import IEndpoint from '../../types/interfaceEndpoint';

import './GeneralList.scss';

export default function GeneralList(props:IEndpoint) {
    const [allPerson, setAllPerson] = useState<IPerson[]>(null!);

    useEffect(() => {
        async function listAPI() {   
            const response = await fetch(props.endpoint);
            const people: IPerson[] = await response.json()
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
            {allPerson && allPerson.map(person => {
                return (
                    <Card
                    key={person.uuid}
                    name={person.name}
                    lastName={person.lastName}
                    birthday={person.birthday}
                    age={person.age}
                    isLegalAge={person.isLegalAge}
                    uuid={person.uuid} />
                    )
                })}
            </div>
        )
    }
}