import { BsCheckCircle } from 'react-icons/bs';
import './RegisterSucessfull.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterSucessfull() {
    const navigate = useNavigate();
    

    useEffect(() => {
        const redirect = setTimeout(() => {
            navigate('/');
        }, 3000);

        return () => {
            clearTimeout(redirect);
        };
    }, []);

    return(
        <div className='registersucessfull'>
            <p>Cadastro realizado com sucesso!</p>
            <BsCheckCircle/>
        </div>
    )
}