import { useEffect, useState } from 'react';
import IPerson from '../../types/interfacePerson';
import Card from '../Cards/Card';
import { URL } from '../../variavelURL';

import './GeneralList.scss';

export default function GeneralList() {
    const [allPerson, setAllPerson] = useState<IPerson[]>(null!);

    useEffect(() => {
        async function listAPI() {   
            const response = await fetch(URL);
            const people: IPerson[] = await response.json()
            setAllPerson(people)
        }
        listAPI()
    },[])

    if(!allPerson) {
        return <p>Carregando...</p>
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