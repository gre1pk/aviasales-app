import { useDispatch, useSelector } from 'react-redux'

import { selectAll, selectNot, selectOne, selectThree, selectTwo } from '../../store/actions/filterActions'

import classes from './Filter.module.scss'

function Filter() {
  const { transfersNot, transfersOne, transfersTwo, transfersThree } = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()
  const allCheck = transfersNot && transfersOne && transfersTwo && transfersThree
  return (
    <div className={classes.container}>
      <p className={classes.text}>Количество пересадок</p>
      <label className={classes.option} htmlFor="all">
        <input
          id="all"
          className={classes['check-input']}
          type="checkbox"
          checked={allCheck}
          onChange={() => dispatch(selectAll())}
        />
        <span className={classes['check-box']} />
        Все
      </label>
      <label className={classes.option} htmlFor="transfersNot">
        <input
          className={classes['check-input']}
          id="transfersNot"
          type="checkbox"
          checked={transfersNot}
          onChange={() => dispatch(selectNot())}
        />
        <span className={classes['check-box']} />
        Без пересадок
      </label>
      <label className={classes.option} htmlFor="transfersOne">
        <input
          className={classes['check-input']}
          id="transfersOne"
          type="checkbox"
          checked={transfersOne}
          onChange={() => dispatch(selectOne())}
        />
        <span className={classes['check-box']} />1 пересадка
      </label>
      <label className={classes.option} htmlFor="transfersTwo">
        <input
          className={classes['check-input']}
          id="transfersTwo"
          type="checkbox"
          checked={transfersTwo}
          onChange={() => dispatch(selectTwo())}
        />
        <span className={classes['check-box']} />2 пересадки
      </label>
      <label className={classes.option} htmlFor="transfersThree">
        <input
          className={classes['check-input']}
          id="transfersThree"
          type="checkbox"
          checked={transfersThree}
          onChange={() => dispatch(selectThree())}
        />
        <span className={classes['check-box']} />3 пересадки
      </label>
    </div>
  )
}

export default Filter
