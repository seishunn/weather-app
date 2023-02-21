export const createMapPath = (lat: number, lon: number, zoom: number = 60000) => {
    if (lat && lon) {
        return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d${zoom}
        !2d${lon}
        !3d${lat}
        !2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1676653425088!5m2!1sru!2sru`
    }
}