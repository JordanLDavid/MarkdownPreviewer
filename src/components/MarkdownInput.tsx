import styled from "styled-components";
import { MarkdownInputProps } from "../types/types";
const InputContainer = styled.div`
    display:flex;
    width:50%;
    min-width:50%;
    max-width:50%;
    `;

const StyledTextArea = styled.textarea`
    width:100%;
    resize:none`;

export const MarkdownInput = (input:MarkdownInputProps) => {
    return (<InputContainer>
                <StyledTextArea defaultValue={input.value} onChange={(event)=>input.onChange(event)}/>
            </InputContainer>);
}

