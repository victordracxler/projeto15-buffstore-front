import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { white } from '../../../constants/colors';

export default function ProductThumbnail(product) {
	const { _id, name, type, price, image } = product;

	return (
		<StyledLink key={_id} to={`/produto/${_id}`}>
			<ProductContainer>
				<img src={image} alt={name} />
				<div>
					<h1>{name}</h1>
					<h2>R$ {price.toFixed(2)}</h2>
				</div>
			</ProductContainer>
		</StyledLink>
	);
}

const StyledLink = styled(Link)`
	text-decoration: none;
`;

const ProductContainer = styled.div`
	height: 250px;
	width: 145px;
	border-radius: 3px;
	padding: 8px;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	margin: 0 15px 11px 15px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	color: ${white};

	img {
		width: 100%;
		height: 200px;
	}

	h1 {
		font-weight: 700;
		font-size: 18px;
	}
	h2 {
		font-size: 16px;
		font-weight: 700;
	}
`;
