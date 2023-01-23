import { SplitScreen } from './SplitScreen';
import './App.css';

const LeftHandComponent = () =>{
  return <h1 style={{backgroundColor: 'green'}}> Left </h1>
}
const RightHandComponent = () =>{
  return <p> Right </p>
}

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      rigit={RightHandComponent}
    />
   
  );
}

export default App;
