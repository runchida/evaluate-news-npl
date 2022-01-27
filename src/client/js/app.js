export function testappjs() {
    alert('client/index.js linked')
}

const button = document.getElementById('submit')
button.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
    const text = document.getElementById('news')
    if (text.value != '') {
        postTextToServer('/mothership', { text: text.value })
    }
    else {
        document.getElementById('result').innerHTML = 'No message to send'
    }
}

const postTextToServer = async (url, dataToPost) => {
    console.log('POST sent')
    const rawData = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToPost)
    })
    try {
        const data = await rawData.json()
        console.log(data.stories);
        updateResult(data.stories)
    }
    catch {
        console.log('error')
    }

    function updateResult (stories) {
        const storyList = document.createElement('ul')
        for (let i = 0; i < stories.length; i++) {
            const story = document.createElement('li')
            story.innerHTML = `<a href='${stories[i].links.permalink}'>${stories[i].title}</a>`
            storyList.appendChild(story)
        }
        document.getElementById('result').appendChild(storyList);
    }
}