import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
	const [token, setToken] = useState(
		localStorage.getItem('bstoken')
			? JSON.parse(localStorage.getItem('bstoken'))
			: ''
	);
	const [username, setUsername] = useState(
		localStorage.getItem('bsusername')
			? JSON.parse(localStorage.getItem('bsusername'))
			: 'visitante'
	);

	const [productsList, setProductsList] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				username,
				setUsername,
				productsList,
				setProductsList,
				totalPrice,
				setTotalPrice
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
