import './style.css'
import {World} from "./src/World/World.js";

(function main() {
    // Get a reference to the container element
    const container = document.querySelector('#app')

    // 1. Create an instance of the World app
    const world = new World(container);

    // 2. Render the scene
    world.start();
})()
