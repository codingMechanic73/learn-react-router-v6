import { Route } from "react-router-dom";
import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Dashboard from "./pages/Host/Dashboard";
import HostLayout, { loader } from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import Error from "./components/Error";
import NotFound from "./pages/NotFound";
import { requireAuth } from "./util";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />
        <Route path="about" element={<About />} />
        <Route
          path="vans"
          element={<Vans />}
          errorElement={<Error />}
          loader={vansLoader}
        />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />

        <Route
          path="host"
          element={<HostLayout />}
          loader={async ({ request }) => await requireAuth(request)}
        >
          <Route index element={<Dashboard />} />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
