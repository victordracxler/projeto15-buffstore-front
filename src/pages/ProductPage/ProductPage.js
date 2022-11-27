import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import { navBarColor } from '../../constants/colors';
import { baseFont } from '../../constants/fonts';
import { URL } from '../../constants/urls';
import { useAuth } from '../../providers/auth';

export default function ProductPage() {
	const params = useParams();
	const [product, setProduct] = useState({});
	const productId = params.id;
	const { token } = useAuth();
	const navigate = useNavigate();

	const { _id, name, type, price, image, description } = product;
	// const priceBRL = price?.toLocaleString('pt-br');

	useEffect(() => {
		const getUrl = URL + 'products/' + productId;

		axios
			.get(getUrl)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	function handleAddToCart(e) {
		if (token.length === 0) {
			alert('Você deve fazer login para adicionar ao carrinho!');
			return;
		}

		const headers = { Authorization: `Bearer ${token}` };

		axios
			.post(URL + 'addtocart', { productId }, { headers })
			.then((res) => {
				console.log(res.data);
				alert('Adicionado ao carrinho com sucesso!');
				navigate('/carrinho')
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<NavBar />
			<Wrapper>
				<h1>{name}</h1>
				<img src={image} alt={name} />

				<div className="price-cart">
					<h2>R$ {price?.toFixed(2).toLocaleString('pt-br')}</h2>
					<button onClick={handleAddToCart}>
						Adicionar ao carrinho
					</button>
				</div>

				<div className="desc-box">
					<div className="desc-title">
						<h3>Descrição:</h3>
					</div>
					<div className="desc">
						<p>{description}</p>
					</div>
				</div>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: ${baseFont};

	h1 {
		font-size: 26px;
		font-weight: 700;
		margin-bottom: 30px;
	}

	img {
		max-width: 300px;
		height: auto;
		margin-bottom: 30px;
	}

	.price-cart {
		width: 300px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	h2 {
		font-size: 26px;
		font-weight: 700;
		margin-bottom: 30px;
		color: #28f002;
	}
	button {
		height: 30px;
		border: none;
		border-radius: 5px;
		background-color: #28f002;
		color: #ffffff;
		font-weight: 700;
	}

	.desc-box {
		max-width: 400px;
		border-radius: 15px;
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	}

	.desc-title {
		padding: 5px;
		height: 30px;
		background-color: aquamarine;
		font-weight: 700;
		text-align: center;
	}
	.desc {
		min-height: 60px;
		background-color: gray;
	}
`;
