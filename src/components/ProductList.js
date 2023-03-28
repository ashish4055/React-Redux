import React, { useEffect, } from 'react'
import { useDispatch } from 'react-redux'
import { fetch_products } from '../store/actions/Actions'
import ProductCardList from './product-card/ProductCardList'

const ProductList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetch_products("products"))
    }, [dispatch])
    return (
        <>
            <ProductCardList />
        </>
    )
}

export default ProductList