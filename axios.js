(() =>{
	
	let lat
	let lon

	let ubication = document.getElementById('ubicacion')
	let temperature = document.getElementById('temperatura')
	let humidity = document.getElementById('humedad')
	let description = document.getElementById('descripcion')
	let icon = document.getElementById('icon')

	if (navigator.geolocation){
			
		navigator.geolocation.getCurrentPosition((position) => {
  			
  			lat = position.coords.latitude
  			lon = position.coords.longitude
  			// console.log(lat)
  			// console.log(lon)

  			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b8e5fbdfbb4d2f65bab28229672d7c6f`
  			// console.log(url)

  			const $axios = document.getElementsByClassName('axios')
			axios.get(url)
			.then(res => {
				// console.log(res.data)
				// console.log(res.data.weather[0].icon)

				const urlIcon = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
				// console.log(urlIcon)
				ubication.innerHTML = `<strong>${res.data.name}</strong>`
				temperature.innerHTML = `<strong>Temperature:</strong> ${res.data.main.temp}° C`
				humidity.innerHTML = `<strong>Humidity: </strong>${res.data.main.humidity}%`
				description.innerHTML = `<strong>Weather: </strong>${res.data.weather[0].main}`
				icon.src = urlIcon
			})
			.catch(err => {
				console.log('Ups, ocurrio un error en la peticion')
			})
			.finally(() =>{
				// console.log('Finally Execute')
			})

		});
	}else{
		console.log('Lo sentimos tu navegador no soporta la geolocalizacion...')
	}

})()
