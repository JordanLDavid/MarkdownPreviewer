import styled from "styled-components"

const GuideContainer = styled.div`
    color:blue;
`;

export const MarkdownGuide = () => {
    return (
        <GuideContainer>
        <a>Markdown Cheat Sheet</a> <br />
        <code># H1</code><br />
        <code>## H2</code><br />
        <code>### H3</code><br />
        <code>**bold**</code><br />
        <code>*italic*</code><br />
        <code>[Link](http://a.com)</code><br />
        <code>![Image](http://url/a.png)</code><br />
        <code>`inline code`</code><br />
        <code>```block code```</code><br />
        <code>- list item</code><br />
        </GuideContainer>
    )
}