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
        const data = await rawData.json()
        console.log(data.stories);
        Client.updateResult(data.stories)
    }
    catch {
        console.log('error')
    }
}