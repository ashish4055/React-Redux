import { Paper, Typography, Box, Card, CardMedia, IconButton, Rating, CircularProgress } from '@mui/material';
import MoreIcon from '@mui/icons-material/More';
import { Container, Stack } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { select_product } from '../store/actions/Actions';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { price, title, description, image, category, rating } = useSelector(state => state.selectedProduct?.productList || [])


    useEffect(() => {
        if (id !== '' && id) {
            dispatch(select_product(`${id}`))
        }
    }, [dispatch, id])

    return (
        <>
            {
                rating?.rate ? <Container maxWidth="xl" mt={5} px={5}>
                    <Typography variant="h6" fontWeight="bold" >Product Details</Typography>
                    <Stack direction="row" justifyContent="center" py={2}>
                        <Paper elevation={2} sx={{ minWidth: "80%", p: 5 }}>
                            <Card sx={{ display: "flex" }} elevation={0}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 250, px: 2 }}
                                    src={image}
                                    loading='lazy'

                                />

                                <Box sx={{ display: "flex", flexDirection: "column", px: 5 }} >
                                    <Typography variant="h6">{title}</Typography>
                                    <Typography>
                                        <IconButton sx={{ my: 1, color: 'green' }} size='large'>
                                            <MoreIcon fontSize='large' />
                                            $ {price}
                                        </IconButton>
                                    </Typography>
                                    <Typography>
                                        <Rating name="half-rating" value={Math.floor(rating.rate)} precision={1} readOnly />
                                    </Typography>
                                    <Typography component="div" fontWeight="bold" fontSize="large" my={1}>
                                        {category}
                                    </Typography>
                                    <Typography variant='paragraph'>
                                        {description}
                                    </Typography>
                                </Box>
                            </Card>
                        </Paper>
                    </Stack>
                </Container >
                    : <Stack sx={{ width: '50%', color: 'grey.500' }} spacing={2} direction="row" justifyContent="center">
                        <CircularProgress color="primary" />
                    </Stack>
            }
        </>
    )
}

export default ProductDetails