import { Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, Typography, Rating, Grid, Stack, CardActions, Button, LinearProgress, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom"
const ProductCardList = () => {
    const productList = useSelector(state => state.allProducts?.productList);
    return (
        <>
            <Grid container spacing={3} >
                {
                    productList.length ?
                        productList.map((element, index) => {
                            const { title, category, price, id } = element;
                            const headers = title.split(' ');
                            return (
                                <Grid item xs={12} sm={4} md={4} lg={3} key={element.id} >
                                    <Card sx={{ maxWidth: 280 }} >
                                        <CardMedia
                                            component="img"
                                            height="150"
                                            image={element.image}
                                            alt="product image"
                                        />
                                        <CardContent>
                                            <Typography variant="body1" fontWeight="bold" >{category}</Typography>
                                            <Grid container>
                                                <Grid xs={8} item>
                                                    <Typography component="span">Price</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography component="span" fontStyle="italic">$.{price}</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" sx={{ textTransform: 'none' }} startIcon={<ShoppingCartIcon size="small" />} variant="outlined" color="primary">
                                                Add To Cart
                                            </Button>
                                            <Button size="small" sx={{ textTransform: 'none', ml: 2 }} startIcon={<InfoIcon size="small" />} variant="outlined" color="warning"
                                                component={Link}
                                                to={`/products/${id}`}>
                                                Details
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                        : <Stack sx={{ width: '50%', color: 'grey.500' }} spacing={2} direction="row" justifyContent="center">
                            <CircularProgress color="primary" />
                        </Stack>
                }
            </Grid>
        </>
    )
}

export default ProductCardList