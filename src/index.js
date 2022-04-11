import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './lib/theme'
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
  document.getElementById('root')
)
