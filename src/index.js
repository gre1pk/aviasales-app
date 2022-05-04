import ReactDOM from 'react-dom/client'

import App from './components/App'
import './scss/style.scss'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App />)
