import { SphereGeometry, Mesh, MeshStandardMaterial } from 'three';

function createSphere() {
    // create a geometry
    const geometry = new SphereGeometry();

    // create a default (white) Basic material
    const material = new MeshStandardMaterial({ color: 'purple' });

    // create a Mesh containing the geometry and material
    const sphere = new Mesh(geometry, material);

    sphere.rotation.set(1, 80, 800.8);

    return sphere;
}

export { createSphere };
