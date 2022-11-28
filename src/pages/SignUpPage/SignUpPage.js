import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import { Input } from '../../components/Input';
import { backgroundColor, white } from '../../constants/colors';
import { ThreeDots } from 'react-loader-spinner';
import { SubmitButton } from '../../components/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { API_URL, URL } from '../../constants/urls';
import axios from 'axios';
import { LinkToClick } from '../../components/LinkToClick';
import swal from 'sweetalert';

export default function SignUpPage() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});
	const [load, setLoad] = useState(false);
	const navigate = useNavigate();

	function fillForm(e) {
		if (!load) {
			const { name, value } = e.target;
			const formContent = { ...form, [name]: value };
			setForm(formContent);
			//console.log(formContent)
		}
	}

	function signUp() {
		const URLsignUp = API_URL + 'sign-up';
		console.log(form);
		const promise = axios.post(URLsignUp, form);

		setLoad(true);

		promise.then((res) => {
			setLoad(false);
			navigate('/entrar');
		});

		promise.catch((err) => {
			swal({
				title: err.response.data,
			});
			setLoad(false);
		});
	}

	return (
		<>
			<NavBar />
			<SignUpPageContainer>
				<Input
					placeholder="Nome"
					name="name"
					value={form.name}
					onChange={fillForm}
					type="text"
					disabled={load && true}
					load={load}
				/>
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
				<Input
					placeholder="Confirme sua senha"
					name="passwordConfirmation"
					value={form.passwordConfirmation}
					onChange={fillForm}
					type="password"
					disabled={load && true}
					load={load}
				/>
				<SubmitButton onClick={signUp}>
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
						'Cadastrar'
					)}
				</SubmitButton>
				<LinkToClick onClick={() => navigate('/entrar')}>
					<p>Já tem uma conta? Entre agora!</p>
				</LinkToClick>
			</SignUpPageContainer>
		</>
	);
}

const SignUpPageContainer = styled.div`
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
