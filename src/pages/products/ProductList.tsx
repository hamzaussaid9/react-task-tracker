import React from 'react'
import { IProduct } from '../../models/common.model';
import { DivDisplayProducts } from './products.style';

const ProductList:React.FC<IProduct> = (
    {id, date, description, price, name}
    ) => {
    return (
        <DivDisplayProducts key={id}>
            <h3>{name}</h3>
            <p className="description">{description}</p><br />
            <div className="product-price">
            <p>price: <span> {price}$</span></p>
            <p className="date">Date: <span>{date}</span></p>
            </div>
        </DivDisplayProducts>
    )
}

export default ProductList;
