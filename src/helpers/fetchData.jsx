async function getCoord(city){

    // hier den fetch zu den Koordinaten
    
    return {lat: 12, lon: 15}
}



export async function getCurrentWeatherByCity(city){
    const coordResult = await getCoord(city)

    // weather fetch


    return weatherObject

}



export async function getWeatherForecast(city){
    const coordResult = await getCoord(city)

    //  weather fetch

    return weatherObj
}


