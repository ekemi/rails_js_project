class Locations {

    constructor(){
        this.locations = []
        this.adapter = new LocationsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadLocations()
    }
    initBindingsAndEventListeners() {
        this.locationsContainer = document.getElementById('locations-container')
        this.newLocationName = document.getElementById('new-location-name')
        this.newLocationLat = document.getElementById('new-location-lat')
        this.newLocationPhoto = document.getElementById('new-location-photo')
        this.locationForm = document.getElementById('new-location-form')
        this.locationForm.addEventListener('submit', this.createLocation.bind(this))
    }

    createLocation(e) {
        e.preventDefault()
        const name = this.newLocationName.value
        const lat = this.newLocationLat.value
        const long = this.newLocationLong.value
        const photo = this.newLocationPhoto.value
        this.adapter.createLocation(name, lat,long, photo).then(location=>{
            this.locations.push(newlocation(location))
            this.resetField()
            this.render()
            this.likeListener()
        })

        fetchAndLoadLocations() {
            this.adapter.getLocations()
            .then(locations =>{
                locations.forEach(location=> thislocations.push(new Location(location)))
            })
            .then(()=>{
                this.render()
                this.likeListener()
            })

            resetField() {
                this.newLocationName.value = ""
                this.newLocationLat.value=""
                this.newLocationLong.value=""
                this.newLocationPhoto.value=""
            }

            render() {
                this.locationsContainer.innerHTML = this.locations.map(location=>
                    location.renderCard()).join('')
            }

            likeListener() {
                this.button = document.getElementsByTagName('button')
                let i = 0 
                for (i = 0; i<= this.button.length;i++){
                    'click', this.likeIncrement.bind(this)
                }
            }

            likeIncrement(e) {
                const likes = parseInt(e.target.value)
                const newValue = likes + 1
                const id = parseInt(e.target.id)
                e.target.innerText = `${newValue} Likes`
                e.target.value = newValue
                this.adapter.updateLike(id,newValue)
            }
        }

    }
}