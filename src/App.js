import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './components/layouts/Layout'
import Savarti from './pages/Savarti'
import Graduate from './pages/Graduate'
import theme from './lib/theme'

import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import { ChakraProvider } from '@chakra-ui/react'
import Dalat from './pages/Dalat'

function App() {
  const maxW = 'container.lg'
  return (
    <>
      <Router>
        <ChakraProvider theme={theme}>
          <Layout maxW={maxW}>
            <Routes>
              <Route exact path="/" element={<Home title="Home" />} />
              <Route
                path="/graduate"
                element={<Graduate title="Graduatee - 2020" />}
              />
              <Route
                path="/with-svi"
                element={<Savarti title="With SVI - 2020:2022" />}
              />
              <Route path="/dalat" element={<Dalat title="Dalat - 2022" />} />
              <Route
                path="/unreleased"
                element={<NotFound title="Unreleased" />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </Router>
    </>
  )
}

export default App
