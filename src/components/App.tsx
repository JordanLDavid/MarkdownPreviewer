import './../styles/App.css'
import {useState} from 'react'
import { Header } from './Header'
import { HeaderProps } from './../types/events';
import { MarkdownGuide } from './MarkdownGuide';
import { MarkdownInput } from './MarkdownInput';

function App() {
  const [isGuideVisible, setVisibility] = useState(false);

  const ToggleButton = () => {
    setVisibility(!isGuideVisible);
    return;
  } ;


  return (
    <>
      <Header onToggleGuide={ToggleButton}/>
      {isGuideVisible ?  <MarkdownGuide /> : null }
      <MarkdownInput/>
    </>
  )
}

export default App