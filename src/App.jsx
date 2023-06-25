import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vans from './pages/Vans';
import Header from './Header';
const App = () => {

  const Home = React.lazy(() => import('./pages/Home'));
  const About = React.lazy(() => import('./pages/About'));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
