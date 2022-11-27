import styled from "styled-components";
import { navBarColor, white } from "../constants/colors";
import { logoFont } from "../constants/fonts";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/auth";
import { CartOutline, LogInOutline } from "react-ionicons";
import { LogOutOutline } from "react-ionicons";
import { WelcomeTitle } from "./WelcomeTitle";
import { useState } from "react";
import { URL } from "../constants/urls";
import axios from "axios";

export default function NavBar() {
    const navigate = useNavigate();
    const [load, setLoad] = useState(false);
    const { username, token, setUsername, totalItems, setTotalItems, setTotalPrice} = useAuth();

    function logout() {
        const URLlogout = URL+"sign-out/"
        const promise = axios.delete(URLlogout, {
            headers: { Authorization: `Bearer ${token}` }
          })

        setLoad(true)

        promise.then((res) => {
          navigate("/")
          setUsername("visitante");
          localStorage.removeItem('bstoken');
          localStorage.removeItem('bsusername');
          setTotalPrice(0);
	      setTotalItems(0);
        })
    
        promise.catch((err) => {
          alert(err.response.data.message)
          setLoad(false)
        })
    
      }
      function navigateCart(){
        if (username === "visitante"){
            navigate("/cadastro")
        } else{
            navigate("/carrinho")
        }
      }
    return(
        <>  
            <NavBarContainer>
                <Title onClick={()=> navigate("/")}>Buff Store</Title>
                
                <PathsContainer>
                    <PathItem onClick={()=> navigate("/")}>Produtos</PathItem>
                    <CartContainer onClick={navigateCart}>
                        <CartOutline
                        color={white} 
                        height="25px"
                        width="25px"
                        />
                        <div>{totalItems}</div>
                    </CartContainer>
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
                    onClick={()=> navigate("/entrar")}
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
const CartContainer = styled.div`
    display: flex;
    width: 40px;
    justify-content: space-between;
    align-items: center;
    color: ${white};
`