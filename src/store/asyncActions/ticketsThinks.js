import AviaServices from '../../services/aviasalesServices'
import { setKaySearch, setTicketsList, loadError } from '../actions/ticketsActions'

const aviaServices = new AviaServices()

export const getTicketsID = () => (dispatch) => {
  aviaServices
    .getKay()
    .then((res) => dispatch(setKaySearch(res.searchId)))
    .catch(() => dispatch(loadError()))
}

export const getTicketsList = (id) => (dispatch) => {
  aviaServices
    .getTicket(id)
    .then((res) => dispatch(setTicketsList(res)))
    .catch(() => dispatch(loadError()))
}
