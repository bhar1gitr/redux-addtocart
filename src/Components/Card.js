import React from 'react'
import { UseSelector, useSelector,useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {deleteITem} from '../store/cartSlice'
import NavBarPanel from './NavBarPanel';


const Cart = () => {
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const deleteItem = (product)=>{
        console.log(product);
        dispatch(deleteITem(product));
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
        <Button onClick={()=> deleteItem(product)} variant="danger">Delete</Button>
      </Card.Body>
    </Card>
            </div>
        ))
  return (

   <>
   <NavBarPanel></NavBarPanel>
     <div className='row'>
    {cards}
    </div>
   </>
  )
}

export default Cart