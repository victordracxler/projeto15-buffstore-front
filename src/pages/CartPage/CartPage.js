import NavBar from '../../components/NavBar';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { URL } from '../../constants/urls';
import { useAuth } from '../../providers/auth';
import ItemCart from './components/ItemCart';
import styled from 'styled-components';
import { baseFont } from '../../constants/fonts';
import { useNavigate } from 'react-router-dom';
import AddressForm from './components/AddressForm';

export default function CartPage() {
	const navigate = useNavigate();
	const {
		token,
		productsList,
		setTotalPrice,
		totalPrice,
		totalItems,
		setTotalItems,
	} = useAuth();
	const [cartList, setCartList] = useState([]);
	const newCartList = [];
	let totalPriceAux = 0;

	useEffect(() => {
		const URLcart = URL + 'cart';
		const promise = axios.get(URLcart, {
			headers: { Authorization: `Bearer ${token}` },
		});

		promise.then((res) => {
			const cartListAux = res.data.products;

			for (let i = 0; i < cartListAux.length; i++) {
				const product = productsList.find(
					(p) => p._id === cartListAux[i]
				);
				totalPriceAux = totalPriceAux + product.price;
				if (
					!newCartList.find(
						(item) => item.productId === cartListAux[i]
					)
				) {
					newCartList.push({
						productId: cartListAux[i],
						quantity: 1,
					});
				} else {
					const item = newCartList.find(
						(item) => item.productId === cartListAux[i]
					);

					let indexOfItem = 0;
					for (let j = 0; j < newCartList.length; j++) {
						if (item === newCartList[j]) {
							indexOfItem = j;
						}
					}
					const newQuantity = newCartList[indexOfItem].quantity + 1;
					newCartList[indexOfItem] = {
						productId: cartListAux[i],
						quantity: newQuantity,
					};
				}
			}
			setCartList(newCartList);
			setTotalPrice(totalPriceAux);
			setTotalItems(cartListAux.length);
		});

		promise.catch((err) => console.log(err.data));
	}, []);

	return (
		<>
			<NavBar />
			<ItemCartContainer>
				{cartList.length !== 0 ? (
					<>
						<p>Meu carrinho</p>
						<p>Itens selecionados: {totalItems}</p>
						{cartList.map((item, index) => (
							<ItemCart key={index} item={item}></ItemCart>
						))}
						<p>Total: {totalPrice.toFixed(2)}</p>
						<AddressForm />
					</>
				) : (
					<>
						<p>Não há itens no carrinho</p>
						<p onClick={() => navigate('/')}>Adicionar produtos</p>
					</>
				)}
			</ItemCartContainer>
		</>
	);
}

const ItemCartContainer = styled.div`
	margin-top: 120px;
	display: flex;
	flex-direction: column;
	align-items: center;
	&& p {
		font-family: ${baseFont};
		margin-bottom: 10px;
	}
`;
