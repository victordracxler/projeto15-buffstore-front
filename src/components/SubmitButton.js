import styled from "styled-components";
import { buttonColor, white } from "../constants/colors";
import { baseFont } from "../constants/fonts"

export const SubmitButton = styled.button`
    width: 326px;
    height: 46px;
    background: ${buttonColor};
    border-radius: 5px;
    border: none;
    font-family: ${baseFont};
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: ${white};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
    opacity: ${(props) => props.load ? "0.6" : "1"};
    :hover{
        cursor: pointer;
    }`