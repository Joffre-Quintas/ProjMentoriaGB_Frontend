import './Header.scss';

export default function Header () {
    return(
        <header className='header'>
            <nav className='header_nav'>
                <ul>
                    <li>Geral</li>
                    <li>Registrar</li>
                    <li>Mair Idade</li>
                    <li>Menor Idade</li>
                    <li>Ordem AsC</li>
                    <li>Ordem DESC</li>
                </ul>
            </nav>
        </header>
    )
}