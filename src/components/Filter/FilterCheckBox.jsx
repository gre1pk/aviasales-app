import PropTypes from 'prop-types'

import classes from './Filter.module.scss'

function FilterCheckBox({ id, checked, onChange, text }) {
  return (
    <label className={classes.option} htmlFor={id}>
      <input id={id} className={classes['check-input']} type="checkbox" checked={checked} onChange={() => onChange()} />
      <span className={classes['check-box']} />
      {text}
    </label>
  )
}

FilterCheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

export default FilterCheckBox
