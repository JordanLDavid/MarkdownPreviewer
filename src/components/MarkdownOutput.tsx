import styled from "styled-components";
import { MarkdownOutputProps } from "../types/types";
import ReactMarkdown from 'react-markdown'
const OutputContainer = styled.div`
    width:50%;
    max-height:100%;
    max-width:50%;
    min-width:50%;
    overflow:off;
    word-wrap: break-word;
    background-color:#F0F0F0;
`;

export const MarkdownOutput = ({value}:MarkdownOutputProps) => {
    return (<OutputContainer><ReactMarkdown>{value}</ReactMarkdown></OutputContainer>);
}

