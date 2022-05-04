import classes from './MoreButton.module.scss'

function MoreButton() {
  return (
    <button className={classes['more-btn']} type="button">
      Показать еще 5 билетов!
    </button>
  )
}

export default MoreButton
