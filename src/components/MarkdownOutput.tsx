import styled from "styled-components";
import { MarkdownOutputProps } from "../types/types";
import ReactMarkdown from 'react-markdown'
const OutputContainer = styled.div`
    display:flex;
    width:50%
`;

export const MarkdownOutput = ({value}:MarkdownOutputProps) => {
    return (<OutputContainer><ReactMarkdown>{value}</ReactMarkdown></OutputContainer>);
}

