import {HeaderProps} from './../types/events';

import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:gray;
    width: 100vw;
`;

const Title = styled.a`
    color:black;
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
