import './../styles/App.css'
import {useState} from 'react'
import { MarkdownInputProps } from '../types/types';
import { Header } from './Header'
import { MarkdownGuide } from './MarkdownGuide';
import { MarkdownInput } from './MarkdownInput';
import { MarkdownOutput } from './MarkdownOutput';
import { styled } from 'styled-components';

const Container = styled.div`
    width:100vw;
    display:flex;
    height: 95%;
`;

function App() {
  const [showGuide, setShowGuide] = useState(false);
  const [markdown, setMarkdown] = useState('# Hello World');

  const ToggleButton = () => {
    setShowGuide(!showGuide);
  } ;

  const handleChange = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  const inputProps : MarkdownInputProps = {
    value: markdown,
    onChange: handleChange
  };

  return (
    <>
      <Header onToggleGuide={ToggleButton}/>
      {showGuide ?  <MarkdownGuide /> : null }
      <Container>
        <MarkdownInput {...inputProps} />
        <MarkdownOutput value={markdown}/>
      </Container>
    </>
    )
  }

export default App