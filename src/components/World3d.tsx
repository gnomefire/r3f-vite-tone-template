import {PointLight, useScroll, Scroll, Image, MeshReflectorMaterial, PerspectiveCamera, Text, TorusKnot } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {useRef} from 'react'
import { MeshStandardMaterial } from "three";
export const World3d=()=>{
    const scroll = useScroll()
    const image1 = useRef()
    const knot = useRef()
    useFrame((state)=>{
        knot.current.rotation.y = ( scroll.offset * 10)
    })
        
      
   
    return(
        <>

<PerspectiveCamera/>
<Text >This is kNOT
    <meshBasicMaterial color="blue"/>
</Text>
<Scroll>
    <group >
<Image ref={image1}  url="/wallpapers.png" position={[0,0,-4]} scale={[16,9]}/>
</group>
</Scroll>

<TorusKnot position={[0,2,-2]} ref={knot}>
<meshStandardMaterial color="violet"/>
    <pointLight />
</TorusKnot>
</>
    )}
    