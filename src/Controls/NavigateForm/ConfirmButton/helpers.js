export async function setCurrentLocation(droneId, lla) {
    const response = await fetch('http://localhost:8000/setLocation', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ droneId: droneId.toString(), lla })
    });

    return response.status === 200;
}
