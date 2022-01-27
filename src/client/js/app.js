export function testappjs() {
    alert('client/index.js linked')
}

const button = document.getElementById('submit')
button.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
    const text = document.getElementById('news')
    if(text.value != '') {
        postTextToServer('/mothership', { text: text.value })
    } 
    else {
        document.getElementById('result').innerHTML = 'No message to send'
    } 
}

const postTextToServer = async (url, dataToPost) => {
    console.log('POST sent')
    const postData = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToPost)
    })
    .then 
}