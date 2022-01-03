import { Button, Container, Modal, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import Header from '../../components/header/Header';
import { DivAddnewProduct, DivProducts, DivProductsContent, DivAddnewProductBtns } from './products.style';
import axios from 'axios';
import { getDate, IProduct } from '../../models/common.model';
import ProductList from './ProductList';

const Products = () => {
    const [products, setProducts] = React.useState<IProduct[]>([]);
    const [openModal, setOpenModal] = React.useState<true | false>(false);
    const getData = ()=>{
        axios.get<IProduct[]>('http://localhost:1500/products')
        .then((res)=> setProducts(res.data))
        .catch(err=>console.log(err));
    }
    React.useEffect(()=>{
        getData();
    },[]);
    const handleOpen = ()=> setOpenModal(true);
    const handleClose = ()=> setOpenModal(false);
    const validationSchema = yup.object({
        name: yup.string().required('name is required').min(3).max(25),
        description: yup.string().required("description is required").min(15).max(100),
        price: yup.number().required("price is required").min(0),
      });
      const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: 0, 
        },
        validationSchema: validationSchema,
        onSubmit: async (values, actions) => {
            const product: IProduct = {
                id: uuidv4(),
                name: values.name,
                description: values.description,
                price: values.price,
                date: getDate(),
            }
            axios.post<IProduct>('http://localhost:1500/products', product).catch(err=>console.log(err));
            actions.setSubmitting(false);
            getData();
            actions.resetForm();
            handleClose();
        },
      });
    return (
        <>
            <DivProducts>
                <Container maxWidth="xl">
                    <DivProductsContent>
                        <Header heading="All Products" btn="add new Product" handleCLick={handleOpen} />
                        <Modal
                            aria-labelledby="product-modal"
                            aria-describedby="product-modal-description"
                            open={openModal}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropProps={{
                            timeout: 700,
                            }}
                        >
                            <DivAddnewProduct>
                                <form onSubmit={formik.handleSubmit}>
                                <TextField
                                id="name" 
                                label="Product name"
                                value={formik.values.name}
                                onChange={formik.handleChange} 
                                error={Boolean(formik.touched.name && formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                                fullWidth
                                />
                                <br /><br />
                                <TextField
                                id="description" 
                                label="Product description" 
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.description && formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                                fullWidth
                                multiline
                                />
                                <br /><br />
                                <TextField
                                id="price"
                                label="Product price" 
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                error={Boolean(formik.touched.price && formik.errors.price)}
                                helperText={formik.touched.price && formik.errors.price}
                                fullWidth
                                />
                                <br /><br />
                                <DivAddnewProductBtns>
                                    <Button variant="contained" color="error" onClick={handleClose}>cancel</Button>
                                    <Button variant="contained" type="submit">Add Product</Button>
                                </DivAddnewProductBtns>
                                </form>
                            </DivAddnewProduct>
                        </Modal>
                        {
                            products.length === 0 ? <h1>Loading...</h1> :
                            products.map(product=>{
                                return <ProductList {...product} />
                            })
                        }
                    </DivProductsContent>
                </Container>
            </DivProducts>
        </>
    )
}

export default Products;
