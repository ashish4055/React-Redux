import { Typography } from "@mui/material";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import ProductList from "../components/ProductList";

export const appRoutes = [
    {
        path: '/',
        element: <Header />,
        children: [
            {
                index: true,
                element: <ProductList />,
            },
            {
                path: '/products',
                element: <ProductList />,
                name: 'Products',
            },
            {
                path: '/products/:id',
                element: <ProductDetails />,
                name: 'ProductDetails',
            },
            {
                path: '*',
                element: <Typography variant="h1" component='h1' color="red" align="center" mt={3}>404 Not Found</Typography>
            }
        ]
    }
]