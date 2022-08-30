navigator.geolocation.getCurrentPosition(
    location => {
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        console.log(`Current location: Latitude: ${lat}, Longitude: ${long}`)
    },
    error => {
        console.log(`An error arised: ${error.message} Error code: ${error.code}`);
    }
)