import styled from "styled-components";
import { backgroundColor, white } from "../constants/colors";
import { baseFont } from "../constants/fonts";

export const WelcomeTitle = styled.div`
    width: 150px;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
    color: ${white};
    background-color: ${backgroundColor};
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`