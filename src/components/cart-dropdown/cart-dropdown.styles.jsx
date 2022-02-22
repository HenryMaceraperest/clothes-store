import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 340px;
    height: 380px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
    margin-top: auto;
`;

export const CartItemStyle = styled.div`
    height: 340px;
    width: 315px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: black;
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 100px auto;
`;