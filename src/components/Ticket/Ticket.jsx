import { addMinutes } from 'date-fns'
import PropTypes from 'prop-types'

import { getTimeFromMins, getTimeFormat } from '../../handlers/timeFormating'

import CountTransfer from './CountTransfers'
import classes from './Ticket.module.scss'

function Ticket({ price, there, back, carrier }) {
  const { origin, destination, date, duration, stops } = there
  const {
    origin: originBack,
    destination: destinationBack,
    date: dateBack,
    duration: durationBack,
    stops: stopsBack,
  } = back
  const startTimeThere = getTimeFormat(date)
  const differenceThere = getTimeFromMins(duration)
  const endTimeThere = getTimeFormat(addMinutes(new Date(date), duration))
  const startTimeBack = getTimeFormat(dateBack)
  const differenceBack = getTimeFromMins(durationBack)
  const endTimeBack = getTimeFormat(addMinutes(new Date(dateBack), durationBack))

  return (
    <div className={classes.ticket}>
      <div className={classes.header}>
        <span className={classes.price}>{price} P</span>
        <div className={classes.logo}>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt={`${carrier} compony`} />
        </div>
      </div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>
            {origin} – {destination}
          </span>
          <span className={classes.date}>
            {startTimeThere} – {endTimeThere}
          </span>
        </div>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>В пути</span>
          <span className={classes.date}>{differenceThere}</span>
        </div>
        <CountTransfer transfersData={stops} />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>
            {originBack} – {destinationBack}
          </span>
          <span className={classes.date}>
            {startTimeBack}– {endTimeBack}
          </span>
        </div>
        <div className={classes.container}>
          <span className={classes['secondary-date']}>В пути</span>
          <span className={classes.date}>{differenceBack}</span>
        </div>
        <CountTransfer transfersData={stopsBack} />
      </div>
    </div>
  )
}

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  there: PropTypes.shape({}).isRequired,
  back: PropTypes.shape({}).isRequired,
  carrier: PropTypes.string.isRequired,
}
export default Ticket
