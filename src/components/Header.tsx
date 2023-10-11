import {HeaderProps} from './../types/types';

import styled from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:gray;
    height:5%;
`;

const Title = styled.h1`
    color:black;
    font-size: 10px;
    left: 10px;
`;
const StyledButton = styled.button`
    background-color:black;
    color:white;
    padding-top: 5px;
    padding-bottom: 5px;

    &:hover{
        background-color:white;
        color:black;
    }
`;

export const Header = ({onToggleGuide}:HeaderProps) => {
    return (<HeaderContainer><Title>Markdown Previewer</Title>
    <StyledButton onClick={(()=>onToggleGuide())}>Show Guide</StyledButton></HeaderContainer>);
}
