import { Outlet, Route, createBrowserRouter, createRoutesFromElements, useLocation } from "react-router-dom";
import SearchArea from "../../components/SearchArea/SearchArea";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import { getProductById } from "../../services/ApiRequests";

function Layout() {
  return (
			<>
      	<SearchArea />
      	<Outlet />
			</>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<div>404</div>}>
      <Route path="/" element={<CatalogPage />} />
      <Route
        index
        path="/:productId"
        element={<ProductPage />}
        loader={async ({ params }) => {
          const data = await getProductById(`/${params.productId}?`);
          return data;
        }}
      />
    </Route>
  ),
);

export default router;
