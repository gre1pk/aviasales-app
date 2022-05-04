import classes from './Ticket.module.scss'

function Ticket() {
  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <span className={classes.price}>12000 P</span>
        <div className={classes.logo}>
          <img src="./img/Logo.svg" alt="logo compony" />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>MOW – HKT</span>
          <span className={classes.date}>10:45 – 08:00</span>
        </div>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>В пути</span>
          <span className={classes.date}>21ч 15м</span>
        </div>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>2 пересадки</span>
          <span className={classes.date}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>MOW – HKT</span>
          <span className={classes.date}>10:45 – 08:00</span>
        </div>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>В пути</span>
          <span className={classes.date}>21ч 15м</span>
        </div>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>2 пересадки</span>
          <span className={classes.date}>HKG, JNB</span>
        </div>
      </div>
    </div>
  )
}

export default Ticket
