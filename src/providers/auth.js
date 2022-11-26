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

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				username,
				setUsername,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
