import styled from "styled-components"
import { backgroundColor } from "../../../constants/colors"
import { baseFont } from "../../../constants/fonts"
import { useAuth } from "../../../providers/auth"

export default function ItemCart({item}) {
    const { productsList } = useAuth()
    const product = productsList.find(p => p._id === (item.productId)) 
    return(
        <>
        <ItemCartContainer>
        <img src={product.image}/>
        <div>
        <p>Produto: {product.name}</p>
        <p>Tipo: {product.type}</p>
        <p>Preço: {product.price}</p>
        <p>Quantidade: {item.quantity}</p>
        </div>
        </ItemCartContainer>
        </>
    )
}

const ItemCartContainer = styled.div`
    background-color: ${backgroundColor};
    width: 300px;
    height: 200px;
    display: flex;
    padding: 20px;
    margin-bottom: 30px;
    
    && img{
        width: 100px;
        height: auto;
        margin-right: 10px;
    }
    p{
        font-family: ${baseFont};
        margin-bottom: 20px;
    }
`