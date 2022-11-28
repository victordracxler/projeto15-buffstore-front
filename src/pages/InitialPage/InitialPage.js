import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { API_URL, URL } from '../../constants/urls';
import ProductThumbnail from './components/ProductThumbnail.js';
import { baseFont } from '../../constants/fonts';
import { useAuth } from '../../providers/auth';
import CarouselComponent from './components/Carousel';
import { Background } from '../../components/Background';
import { white } from '../../constants/colors';

export default function InitialPage() {
	const { productsList, setProductsList } = useAuth();

	useEffect(() => {
		const route = 'products';
		axios
			.get(API_URL + route)
			.then((res) => setProductsList(res.data))
			.catch((err) => console.log(err.data));
	}, []);

	return (
		<>
			<Background>
				<NavBar />
				<CarouselComponent></CarouselComponent>
				<Title>Produtos</Title>
				<ProductsContainer>
					{productsList.map(ProductThumbnail)}
				</ProductsContainer>
			</Background>
		</>
	);
}

const Title = styled.div`
	margin-top: 50px;
	font-family: ${baseFont};
	color: ${white};
	text-align: center;
	font-size: 50px;
	font-weight: bold;
`;
const ProductsContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	font-family: ${baseFont};
`;
