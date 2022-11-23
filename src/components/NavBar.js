import styled from "styled-components"
import { navBarColor } from "../constants/colors"
import { logoFont } from "../constants/fonts"
import { useNavigate } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate()

    function navigateInitialPage(){
        navigate("/")
    }

    function navigateLoginPage(){
        navigate("/entrar")
    }

    function navigateSignUpPage(){
        navigate("/cadastro")
    }
    
    function navigateCartPage(){
        navigate("/carrinho")
    }
    return(
        <>  
            <NavBarContainer>
                <Title onClick={navigateInitialPage}>Buff Store</Title>
                <PathsContainer>
                    <PathItem onClick={navigateLoginPage}>Login</PathItem>
                    <PathItem onClick={navigateSignUpPage}>SignUp</PathItem>
                    <PathItem onClick={navigateCartPage}>CartPage</PathItem>
                </PathsContainer>
            </NavBarContainer>
        </>
    )
}

const NavBarContainer = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${navBarColor};
`
const Title = styled.div`
    width: 100%;
    font-family: ${logoFont};
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    font-size: 30px;
`
const PathsContainer = styled.div`
    font-family: ${logoFont};
    display: flex;
    justify-content: space-around;
`
const PathItem = styled.div`
    font-family: ${logoFont};
`