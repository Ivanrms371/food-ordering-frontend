export const LOCAL_COORDS = {
  lat: -33.52715933860216,
  lng: -56.897917394235556,
};

export const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const getUserLocation = () =>
  new Promise<{ success: boolean; distance: number }>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject({ success: false, distance: -1 });
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const userLate = position.coords.latitude;
      const userLng = position.coords.longitude;

      const km = getDistanceFromLatLonInKm(
        LOCAL_COORDS.lat,
        LOCAL_COORDS.lng,
        userLate,
        userLng
      );

      resolve({ success: true, distance: km });
    });
  });
