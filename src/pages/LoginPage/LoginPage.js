import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import { useAuth } from '../../providers/auth';
import { Input } from '../../components/Input';
import { backgroundColor, white } from '../../constants/colors';
import { ThreeDots } from 'react-loader-spinner';
import { SubmitButton } from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../constants/urls';
import axios from 'axios';

export default function LoginPage() {
	const [form, setForm] = useState({ email: '', password: '' });
	const [load, setLoad] = useState(false);
	const navigate = useNavigate();
	const { setToken, setUsername } = useAuth();

	function fillForm(e) {
		if (!load) {
			const { name, value } = e.target;
			const formContent = { ...form, [name]: value };
			setForm(formContent);
			//console.log(formContent)
		}
	}

	function login() {
		const URLlogin = URL + 'sign-in';
		//console.log(form);
		const promise = axios.post(URLlogin, form);

		setLoad(true);

		promise.then((res) => {
			setToken(res.data.token);
			setUsername(res.data.name);
			localStorage.setItem('bstoken', JSON.stringify(res.data.token));
			localStorage.setItem('bsusername', JSON.stringify(res.data.name));

			setLoad(false);
			navigate('/carrinho');
		});

		promise.catch((err) => {
			alert(err.response.data.message);
			setLoad(false);
		});
	}

	return (
		<>
			<NavBar />
			<LoginPageContainer>
				<Input
					placeholder="E-mail"
					name="email"
					value={form.email}
					onChange={fillForm}
					type="e-mail"
					disabled={load && true}
					load={load}
				/>
				<Input
					placeholder="Senha"
					name="password"
					value={form.password}
					onChange={fillForm}
					type="password"
					disabled={load && true}
					load={load}
				/>
				<SubmitButton onClick={login}>
					{load ? (
						<ThreeDots
							height="51"
							width="51"
							radius="9"
							color={white}
							ariaLabel="three-dots-loading"
							wrapperStyle={{}}
							wrapperClassName=""
							visible={true}
						/>
					) : (
						'Entrar'
					)}
				</SubmitButton>
			</LoginPageContainer>
		</>
	);
}

const LoginPageContainer = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding-top: 200px;
	margin-top: 80px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${backgroundColor};
`;
