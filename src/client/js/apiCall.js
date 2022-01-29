export async function postTextToServer (url, dataToPost) {
    console.log('POST sent')
    console.log(dataToPost)
    const rawData = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': "text/plain",
            'charset': 'UTF-8'
        },
        body: dataToPost
    })
    try {
        console.log(rawData)
        const data = await rawData.json()
        //Client.updateResult(data.stories)
    }
    catch(error) {
        console.log(error)
    }
}