import { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../providers/auth';
import { baseFont } from '../../../constants/fonts';
import { API_URL, URL } from '../../../constants/urls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddressForm() {
	const { token, productsList, totalPrice, totalItems } = useAuth();
	const [address, setAdress] = useState('');
	const navigate = useNavigate();

	function handleCheckout(e) {
		e.preventDefault();

		const URLcheckout = API_URL + 'checkout';
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};

		const body = {
			address,
			productsList,
			totalPrice,
		};

		axios
			.post(URLcheckout, body, config)
			.then((res) => {
				console.log(res.data);
				navigate('/sucesso');
			})
			.catch((err) => console.log(err.response));
	}

	return (
		<StyledForm onSubmit={handleCheckout}>
			<label htmlFor="address">Endereço</label>
			<input
				value={address}
				type="text"
				id="address"
				onChange={(e) => setAdress(e.target.value)}
				required
			/>
			<CheckoutButton type="submit">Fechar compra</CheckoutButton>
		</StyledForm>
	);
}

const CheckoutButton = styled.button`
	width: 160px;
	height: 50px;
	border: none;
	border-radius: 5px;
	background-color: #28f002;
	color: #ffffff;
	font-weight: 700;
	font-size: 20px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: ${baseFont};
	margin-bottom: 30px;
	label {
		font-weight: 700;
		margin-top: 30px;
	}

	input {
		height: 25px;
		width: 300px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
`;
