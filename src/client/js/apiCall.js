export async function postTextToServer (url, dataToPost) {
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
        console.log(rawData)
        const data = await rawData.json()
        Client.updateResult(data.stories)
    }
    catch(error) {
        console.log(error)
    }
}