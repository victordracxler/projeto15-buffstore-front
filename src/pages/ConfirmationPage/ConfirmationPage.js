import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import { baseFont } from '../../constants/fonts';
import { useAuth } from '../../providers/auth';

export default function ConfirmationPage() {
	const { token, productsList, totalPrice, totalItems } = useAuth();

	return (
		<>
			<NavBar />
			<ConfirmationWrapper>
				<h1>Pedido realizado com sucesso!!</h1>
			</ConfirmationWrapper>
		</>
	);
}

const ConfirmationWrapper = styled.div`
	margin-top: 120px;

	h1 {
		font-size: 30px;
		font-weight: 700;
		font-family: ${baseFont};
	}
`;
