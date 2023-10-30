import styles from './Header.module.css'

function Header () {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className='header__row'>
                    <div className='header__logo'>Logo</div>
                    <div className='header__nav'>Nav</div>
                </div>
            </div>
        </header>
    )
}

export default Header;