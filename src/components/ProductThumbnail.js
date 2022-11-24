import styled from 'styled-components';

export default function ProductThumbnail(product) {
	const { _id, name, type, price, image } = product;

	return (
		<ProductContainer key={_id}>
			<img src={image} alt={name} />
			<h1>{name}</h1>
			<h2>{price}</h2>
		</ProductContainer>
	);
}

const ProductContainer = styled.div`
	height: 209px;
	width: 145px;
	border-radius: 3px;
	padding: 8px;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	margin: 0 15px 11px 15px;

	img {
		width: 100%;
	}
`;
