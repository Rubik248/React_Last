import MainPage from './pages/MainPage/MainPage'
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DiscountProductsPage from './pages/DiscountProductsPage/DiscountProductsPage'
import ProductPage from "./pages/ProductPage/ProductPage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import BasketPage from "./pages/BasketPage/BasketPage"
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage"



export const routes = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/category',
        element: <CategoryPage/>
    },
    {
        path: '/discount',
        element: <DiscountProductsPage/>
    },
    {
        path: "/product/:id",
        element: <ProductPage/>
    },
    {
        path: 'category/products/:id',
        element: <ProductsPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
    {
        path: '/basket',
        element: <BasketPage/>
    },
    {
        path: '/allproducts',
        element: <AllProductsPage/>
    }
]