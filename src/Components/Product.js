import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBarPanel from './NavBarPanel';
import { useDispatch } from 'react-redux';
import {add} from '../store/cartSlice'

const Product = () => {
    const dispatch = useDispatch();

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(data => data.json())
        .then(result => setProducts(result))
        .catch(err => console.error(err))
    },[]);

    const addToCart = (product) => {
        console.log(product);
        dispatch(add(product));

    }

    const cards = products.map(product => 
        (
            <div className='col-md-3'>
                <Card key={product.id} className='h-100' style={{ width: '18rem' }}>
     <div className='text-center'>
     <Card.Img variant="top" style={{width : '100px', height:'130px'}} src={product.image} />
     </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Title>{product.price} $</Card.Title>
        <Button onClick={()=> addToCart(product)} variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
            </div>
        ))
    return (
<>
<NavBarPanel></NavBarPanel>

<h1>Products</h1>
    
<div className='row'> 
        {cards}
    </div>
</>
  )
}

export default Product