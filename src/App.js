import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Chakra from './components/Chakra'
import Layout from './components/layouts/Layout'
import Graduate from './pages/Graduate'
import Savarti from './pages/Savarti'

import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

function App() {
  const maxW = 'container.lg'
  return (
    <>
      <Chakra>
        <Router>
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
              <Route
                path="/dalat"
                element={<NotFound title="Dalat - 2022" />}
              />
              <Route
                path="/unreleased"
                element={<NotFound title="Unreleased" />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </Chakra>
    </>
  )
}

export default App
