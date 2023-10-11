import styled from "styled-components";

const InputContainer = styled.input`
    width:50%;
    bottom:0;
    left:0;
    height:100%;
    resize:none;
    `;

const StyledTextArea = styled(InputContainer)``;

export const MarkdownInput = () => {
    return (<StyledTextArea/>);
}

