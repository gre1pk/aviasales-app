import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src="./img/Logo.svg" alt="logo" />
      </div>
    </header>
  )
}

export default Header
