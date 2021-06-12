const socket = io()

socket.on('message', (message) => {
    console.log(message)
})
// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated', count)
// })

// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     socket.emit('increment')
// })

document.querySelector('#messageForm').addEventListener('submit', (event) => {
    event.preventDefault()
    
    let text = document.getElementById('msg')

    socket.emit('sendMessage', text.value)
    text.value = ''
})