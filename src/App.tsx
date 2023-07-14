import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll} from '@react-three/drei';
import {World3d} from './components/World3d'
import { DomInterface } from './components';
import './App.css';

function App() {


 
  return (
    <>
   
    <main style={{width:"100vw", height:"100vh", background: "transparent"}}>
      <div><h1>This is  a DOM element</h1></div>
      <Canvas >
       <ScrollControls pages={4} damping={0.2} horizontal> 
        <World3d/>
        <Scroll html>
          <DomInterface/>
        </Scroll>
        
       </ScrollControls>
      </Canvas>
      
   </main>
      
    </>
  )
}
export default App;

