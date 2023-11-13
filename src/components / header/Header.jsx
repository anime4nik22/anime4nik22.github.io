import './header.css'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className='header__row'>
                    <div className='header__logo'>Logo</div>
                    <nav className='header__nav'>
                        <ul>
                            <li>
                                <a href="#!">Главная</a>
                            </li>
                            <li>
                                <a href="#!">Контакты</a>
                            </li>
                            <li>
                                <a href="#!">Доставка</a>
                            </li>
                            <li>
                                <a href="#!">ДСП</a>
                            </li>
                            <li>
                                <a className="header__nav-btn" href="#!">ВОЙТИ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='container'>
                <div className='text__numb'>01</div>
                <div className='text__glav'>Доставка <br></br> лесоматериалов <br></br> любой сложности</div>
                <div className="text__desc">Перевозим материалы <br></br> по всей России. Возьмёмся за <br></br> работу любой сложности. <br></br> Высококвалифицированный рабочий <br></br> персонал. Имеются <br></br> страховки </div>
                <div className="text__cont">+7 (603) 555-0123</div>            
            </div>
        </header>
    )
}

export default Header;