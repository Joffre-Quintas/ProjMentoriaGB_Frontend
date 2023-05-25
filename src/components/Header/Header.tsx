import './Header.scss';
import { Link } from 'react-router-dom'; 

export default function Header () {
    return(
        <header className='header'>
            <nav className='header_nav'>
                <ul>
                    <li><Link to={'/'}>Geral</Link></li>
                    <li><Link to={'/create-person'}>Registrar</Link></li>
                    <li>Maior Idade</li>
                    <li>Menor Idade</li>
                    <li>Ordem ASC</li>
                    <li>Ordem DESC</li>
                </ul>
            </nav>
        </header>
    )
}