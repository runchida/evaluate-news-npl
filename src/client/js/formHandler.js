export function onClick(event) {
    event.preventDefault()
    const text = document.getElementById('news')
    if (text.value != '') {
        console.log(text.value)
        Client.postTextToServer('/mothership', text.value)
    }
    else {
        document.getElementById('result').innerHTML = 'No message to send'
    }
}