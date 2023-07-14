import {Scroll, Image, MeshReflectorMaterial, PerspectiveCamera, Text, TorusKnot } from "@react-three/drei";
export const World3d=()=>{
    
    
        
      
   
    return(
        <>
        
<PerspectiveCamera/>
<Scroll>
<Image url="/wallpapers.png" position={[0,0,-4]} scale={[32,18]}/>
</Scroll>
<Text>This is NOT a DOM element</Text>
<TorusKnot position={[0,2,-2]}>
<MeshReflectorMaterial mirror={0} />
</TorusKnot>
</>
    )}
    