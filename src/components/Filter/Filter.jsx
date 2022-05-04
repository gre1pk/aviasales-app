import classes from './Filter.module.scss'

function Filter() {
  return (
    <div className={classes.container}>
      <p className={classes.text}>Количество пересадок</p>
      <label className={classes.option} htmlFor="checkbox">
        <input className={classes['check-input']} type="checkbox" />
        <span className={classes['check-box']} />
        Все
      </label>
      <label className={classes.option} htmlFor="checkbox">
        <input className={classes['check-input']} type="checkbox" />
        <span className={classes['check-box']} />
        Без пересадок
      </label>
      <label className={classes.option} htmlFor="checkbox">
        <input className={classes['check-input']} type="checkbox" checked />
        <span className={classes['check-box']} />1 пересадка
      </label>
      <label className={classes.option} htmlFor="checkbox">
        <input className={classes['check-input']} type="checkbox" />
        <span className={classes['check-box']} />2 пересадки
      </label>
      <label className={classes.option} htmlFor="checkbox">
        <input className={classes['check-input']} type="checkbox" />
        <span className={classes['check-box']} />3 пересадки
      </label>
    </div>
  )
}

export default Filter
