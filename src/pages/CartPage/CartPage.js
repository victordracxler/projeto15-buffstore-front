import NavBar from "../../components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { URL } from "../../constants/urls";
import { useAuth } from "../../providers/auth";
import ItemCart from "./components/ItemCart";
import styled from "styled-components";
import { baseFont } from "../../constants/fonts";

export default function CartPage() {
    const {token} = useAuth();
    const [cartList, setCartList] = useState([]);
    const newCartList = [];

	useEffect(() => {
        
        const URLcart = URL + 'cart'
		const promise = axios.get(URLcart, {
            headers: { Authorization: `Bearer ${token}` }
          })

		promise.then((res) => {
            const cartListAux = res.data.products

            for (let i = 0; i< cartListAux.length; i++){
                if(!newCartList.find(item => item.productId === cartListAux[i])){
                    newCartList.push({productId: cartListAux[i], quantity:1})
                } else{
                    const item = newCartList.find(item => item.productId === cartListAux[i])
                    
                    let indexOfItem = 0
                    for (let j=0; j <newCartList.length; j++){
                        if (item === newCartList[j]){
                            indexOfItem = j
                        }
                    }
                    const newQuantity = newCartList[indexOfItem].quantity +1
                    newCartList[indexOfItem] = {productId: cartListAux[i], quantity:newQuantity}
                }
            }
            setCartList(newCartList)
            
        });

        promise.catch((err) => 
            console.log(err.data)
        );
        
        
	}, []);

    
    return(
        <>
        <NavBar/>
        <ItemCartContainer>
        <p>Meu carrinho</p>
        {cartList.map((item, index) => <ItemCart key={index} item={item}></ItemCart>)}
        </ItemCartContainer>
        </>
    )
}

const ItemCartContainer = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    && p{
        font-family: ${baseFont};
    }
`