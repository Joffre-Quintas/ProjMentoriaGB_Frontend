import './Header.scss';
import { Link } from 'react-router-dom'; 

export default function Header () {
    return(
        <header className='header'>
            <nav className='header_nav'>
                <ul>
                    <li><Link to={'/'}>Geral</Link></li>
                    <li><Link to={'/create-person'}>Registrar</Link></li>
                    <li><Link to={'/list-of-legalage'}>Maior Idade</Link></li>
                    <li><Link to={'/list-of-not-legalage'}>Menor Idade</Link></li>
                    <li><Link to={'/list-of-asc-alfabetic'}>Ordem ASC</Link></li>
                    <li><Link to={'/list-of-desc-alfabetic'}>Ordem DESC</Link></li>
                </ul>
            </nav>
        </header>
    )
}