export async function getCurrentLocation(droneId) {
    const response = await fetch(`http://localhost:8000/getLocation?droneId=${droneId}`);
    const json = await response.json();

    return json;
}

export async function setCurrentLocation(droneId, lla) {
    const response = await fetch('http://localhost:8000/setLocation', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ droneId, lla })
    });
    const json = await response.json();

    return json;
}
