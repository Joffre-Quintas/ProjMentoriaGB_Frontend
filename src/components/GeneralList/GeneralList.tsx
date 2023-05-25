import { useEffect, useState } from 'react';
import IPerson from '../../types/interfacePerson';
import Card from '../Cards/Card';

import './GeneralList.scss';

export default function GeneralList() {
    const [allPerson, setAllPerson] = useState<IPerson[]>(null!);

    useEffect(() => {
        async function listAPI() {   
            const response = await fetch('http://localhost:3000/');
            const people: IPerson[] = await response.json()
            setAllPerson(people)
        }
        listAPI()
    },[])

    return(
        <div className='generalListContainer'>
            {allPerson && allPerson.map(person => {
                return (
                    <Card
                        key={person.name + person.lastName}
                        name={person.name}
                        lastName={person.lastName}
                        birthday={person.birthday}
                        age={person.age}
                        isLegalAge={person.isLegalAge}
                    />
                )
            })}
        </div>
    )
}