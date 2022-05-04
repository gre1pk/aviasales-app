import Header from '../Header'
import MoreButton from '../More-button'
import Tabs from '../Tabs'
import TicketsList from '../Tickets-list'
import Filter from '../Filter'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <aside className={classes['sid-bar']}>
          <Filter />
        </aside>
        <div className={classes.content}>
          <Tabs />
          <TicketsList />
          <MoreButton />
        </div>
      </main>
    </div>
  )
}

export default App
