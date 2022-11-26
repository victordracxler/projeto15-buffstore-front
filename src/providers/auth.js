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
	const [sessionUserID, setSessionUserID] = useState('');

	return (
		<AuthContext.Provider
			value={{
				token,
				setToken,
				username,
				setUsername,
				sessionUserID,
				setSessionUserID,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
