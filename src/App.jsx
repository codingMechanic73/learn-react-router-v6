import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVansDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

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
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
              <Route path='income' element={<Income />} />
              <Route path='reviews' element={<Reviews />} />
            </Route>
            <Route path="vans">
              <Route index element={<Vans />} />
              <Route path=':id' element={<VanDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
