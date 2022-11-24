import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './style/GlobalStyle'
import Typography from './style/Typography'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>
)
