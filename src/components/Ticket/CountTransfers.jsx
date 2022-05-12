import PropTypes from 'prop-types'

import classes from './Ticket.module.scss'

function CountTransfer({ transfersData }) {
  const count = {
    0: ['без пересадок'],
    1: ['1 пересадка'],
    2: ['2 пересадки'],
    3: ['3 пересадки'],
  }

  const countTransfets = transfersData.length

  const sityTransfers = transfersData.join(', ')
  return (
    <div className={classes.container}>
      <span className={classes['secondary-date']}>{count[countTransfets]}</span>
      <span className={classes.date}>{sityTransfers}</span>
    </div>
  )
}

CountTransfer.propTypes = {
  transfersData: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CountTransfer
