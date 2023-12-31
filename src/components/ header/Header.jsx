import './header.css'
function Header () {
    return (
        <header >
            
            <div class="container">
                <div class="header-top">
                    <div class="header-top-left">
                        <div class="header-logo">
                            Logo
                        </div>
                        <div class="header-menu-list">
                            <a href="#">
                                Главная
                            </a>
                            <a href="#">
                                Контакты
                            </a>
                            <a href="#">
                                Доставка
                            </a>
                            <a href="#">
                                ДСП
                            </a>

                        </div>
                    </div>
                    <div class="header-top-right">
                        <div class="header-button">
                            Войти
                        </div>
                        <div class="nav-open"  onClick={(e) => {
                                        var header = document.getElementById('main-header');
                                        header.classList.toggle('fixed'); 
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="8" y="10" width="32" height="6" rx="1.5" fill="#EFEFEF"/>
                                        <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M9.5 20C8.67157 20 8 20.6716 8 21.5V24.5C8 25.3284 8.67157 26 9.5 26H38.5C39.3284 26 40 25.3284 40 24.5V21.5C40 20.6716 39.3284 20 38.5 20H9.5ZM9.5 30C8.67157 30 8 30.6716 8 31.5V34.5C8 35.3284 8.67157 36 9.5 36H38.5C39.3284 36 40 35.3284 40 34.5V31.5C40 30.6716 39.3284 30 38.5 30H9.5Z" fill="#EFEFEF"/>
                                    </svg>
                                 </div>
                        
                    </div>
                </div>
                <div class="header-content">
                    <div class="header-content-left">
                        <div class="header-number">
                            01
                        </div>
                        <div class="header-text">
                            <div class="header-title">
                                Доставка лесоматериалов любой сложности 
                            </div>
                            <div class="header-description">
                                Перевозим материалы по всей России. Возьмёмся за работу любой сложности. Высококвалифицированный рабочий персонал. Имеются страховки 
                            </div>
                        </div>
                    </div>
                    <div class="header-content-right">
                        <a href="tel:+76035550123" class="header-phone">
                            +7 (603) 555-0123
                        </a>
                    </div>
                </div>
            </div>
            <div class="fixed-burder"> 
                 <div class="fixed-burger-top">
                        <div class="header-logo">
                            Logo
                        </div>
                        <div class="nav-open nav-open-burder"  onClick={(e) => {
                                        var header = document.getElementById('main-header');
                                        header.classList.toggle('fixed'); 
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                        <rect x="10.272" y="32.8995" width="32" height="4" rx="1.5" transform="rotate(-45 10.272 32.8995)" fill="#EFEFEF"/>
                                        <rect opacity="0.3" x="13.1006" y="10.2721" width="32" height="4" rx="1.5" transform="rotate(45 13.1006 10.2721)" fill="#EFEFEF"/>
                                    </svg>
                        </div>
                 </div>
                 <div class="fixed-burger-bottom">
                    <div class="fixed-burger-menu">
                        <a href="#">
                            Главная
                        </a>
                        <a href="#">
                            Контакты
                        </a>
                        <a href="#">
                            Доставка
                        </a>
                        <a href="#">
                            ДСП
                        </a>
                    </div>
                    <div class="header-button">
                            Войти
                    </div>
                 </div>
            </div>
        </header>
    )
}

export default Header;