import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { API_URL, URL } from '../../constants/urls';
import ProductThumbnail from '../../components/ProductThumbnail.js';
import { baseFont } from '../../constants/fonts';
import { useAuth } from '../../providers/auth';

export default function InitialPage() {
	const {productsList, setProductsList} = useAuth()
	
	useEffect(() => {
		const route = 'products';
		axios
			.get(URL + route)
			.then((res) => setProductsList(res.data))
			.catch((err) => console.log(err.data));
	}, []);

	return (
		<>
			<NavBar />
			<ProductsContainer>
				{productsList.map(ProductThumbnail)}
			</ProductsContainer>
		</>
	);
}

const ProductsContainer = styled.div`
	margin-top: 100px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	font-family: ${baseFont};
`;
