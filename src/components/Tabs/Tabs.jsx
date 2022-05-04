import classes from './Tabs.module.scss'

function Tabs() {
  return (
    <div className={classes.tabs}>
      <button className={`${classes.active} ${classes.btn} ${classes['first-el']}`} type="button">
        Самый дешевый
      </button>
      <button className={classes.btn} type="button">
        Самый быстрый
      </button>
      <button className={`${classes.btn} ${classes['last-el']}`} type="button">
        Оптимальный
      </button>
    </div>
  )
}

export default Tabs
