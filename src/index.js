import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './lib/theme'

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById('root')
)
