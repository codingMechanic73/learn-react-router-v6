import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails';
import Layout from './components/Layout';
const App = () => {

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/vans' element={<Vans />} />
            <Route path='/vans/:id' element={<VanDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
