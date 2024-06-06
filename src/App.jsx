
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import Image1 from './Components/Image1';
import Image3 from './Components/Image3';
import Image2 from './Components/Image2';
import TextInfo from './Components/TextInfo';

function App() {
  const bg = "https://pixabay.com/images/id-3608029/"
  return (
    <div className="App">
    <Image1/>
    <TextInfo/>
    <Image2/>
    <TextInfo/>
    <Image3/>
    </div>
  );
}

export default App;