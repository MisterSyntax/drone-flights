export async function getCurrentLocation(droneId) {
    const response = await fetch(`http://localhost:8000/getLocation?droneId=${droneId}`);
    const json = await response.json();

    return json;
}
