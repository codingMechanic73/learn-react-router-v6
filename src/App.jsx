import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';

const App = () => {

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='host' element={<HostLayout />}>
              <Route element={<Dashboard />} index />
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=':id' element={<VanDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
