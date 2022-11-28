import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './assets/styles/GlobalStyle';
import CartPage from './pages/CartPage/CartPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import InitialPage from './pages/InitialPage/InitialPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<InitialPage />} />
					<Route path="/entrar" element={<LoginPage />} />
					<Route path="/cadastro" element={<SignUpPage />} />
					<Route path="/carrinho" element={<CartPage />} />
					<Route path="/produto/:id" element={<ProductPage />} />
					<Route path="/sucesso" element={<ConfirmationPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
