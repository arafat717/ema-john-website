import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCard = getShoppingCart();
        console.log(storedCard)
        const savecart = [];
        for(const id in storedCard){
            const addedproduct = products.find(product=>product.id === id);
            if(addedproduct){
                const quantity = storedCard[id];
                addedproduct.quantity = quantity;
                savecart.push(addedproduct)
            }
        }
        setCart(savecart)
    },[products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        // const newCart = [...cart, product];

        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity=1;
            newCart=[...cart,product]
        }
        else{
            exists.quantity=exists.quantity+1;
            const remaining = cart.filter(pd=>pd.id!==product.id);
            newCart=[...remaining,exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;