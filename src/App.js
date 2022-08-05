import React from "react"
import './App.css';
import * as THREE from "three";

let scene, camera, renderer, cube;

function init(){
  
scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

animate();
}

function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
	console.log(cube.rotation.x)
}

function App(){ 
  return  <div className="App">{init()}</div>
};

export default App;
