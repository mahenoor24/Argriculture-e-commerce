// ProductCard.js
import React from 'react';
import { CCard, CCardImage, CCardText, CCardBody } from "@coreui/react";
import './ProductCard.css';
const ProductCard = ({ image, text,price }) => {
    return (

        <CCard className="product_card">
            <CCardImage orientation="top" src={image} className="product_image" />
            <CCardBody>
                
                <CCardText className='product_text'>{text}</CCardText>
                <div className='product'>
                <button className="product_buy" >Buy Now</button>
                <button className="product_buy" >Rent Now</button>
                </div>
            </CCardBody>
        </CCard>
    );
};

export default ProductCard;
