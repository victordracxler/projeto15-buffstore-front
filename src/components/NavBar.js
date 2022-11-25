import styled from "styled-components"
import { navBarColor, white } from "../constants/colors"
import { logoFont } from "../constants/fonts"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../providers/auth"
import { LogInOutline } from "react-ionicons"
import { LogOutOutline } from "react-ionicons"
import { WelcomeTitle } from "./WelcomeTitle"
import { useState } from "react"
import { URL } from "../constants/urls"
import axios from "axios"

export default function NavBar() {
    const navigate = useNavigate()
    const [load, setLoad] = useState(false)
    const { username, sessionUserID, setUsername} = useAuth()

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

    function logout() {
        const URLlogin = URL+"sign-out/"+sessionUserID
        console.log(URL+"sign-out/"+sessionUserID)
        const promise = axios.delete(URLlogin)

        setLoad(true)

        promise.then((res) => {
          navigate("/")
          setUsername("visitante")
        })
    
        promise.catch((err) => {
          alert(err.response.data)
          setLoad(false)
        })
    
      }
    return(
        <>  
            <NavBarContainer>
                <Title onClick={navigateInitialPage}>Buff Store</Title>
                <PathsContainer>
                    <PathItem onClick={navigateLoginPage}>Login</PathItem>
                    <PathItem onClick={navigateSignUpPage}>SignUp</PathItem>
                    <PathItem onClick={navigateCartPage}>CartPage</PathItem>
                    <WelcomeTitle> Olá, {username}! 
                    { username !== "visitante" ?

                    <LogOutOutline
                    color={white} 
                    height="25px"
                    width="25px"
                    onClick={logout}
                    />

                    :

                    <LogInOutline
                    color={white} 
                    height="25px"
                    width="25px"
                    onClick={navigateLoginPage}
                    />
                    }
                    </WelcomeTitle>
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