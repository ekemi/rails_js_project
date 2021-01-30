class LocationsAdapter {

    constructor() {
        // localhost.....
        this.baseURL = ''

    }


    getLocations(){
        fetch(this.baseURL)
        .then(res =>res.json())
    }

    createLocation(name,latitude, lobgitude, photo){
        const locationData = {
            name: 'name',
            latitude: 'latitude',
            longitude: 'longitude',
            photo: {
                url: photo
            }
        }

        return fetch(this.baseURL,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(locationData)
        }).then(res => res.json())
    }

    updateLike(id, newValue){
        const value = {
            likes: newValue
        }
        return fetch(`${this.baseURL}/${id}`,{
            method: 'PATH',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify({value}),
        }).then(res =>res.json())
    }
}