const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

document.querySelector('#messageForm').addEventListener('submit', (event) => {
    event.preventDefault()
    
    let text = event.target.elements.msg

    socket.emit('sendMessage', text.value, (error) => {
        if (error) {
            return console.log(error)
        }

        console.log('Message delivered!')
    })
    text.value = ''
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }, (error) => {
            if (error) {
                return console.log(error)
            }

            console.log('Location shared!')
        })
    })
})