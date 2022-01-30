export async function postTextToServer(url, dataToPost) {
    console.log('POST sent')
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
        if (rawData.status == "200") {
            const data = await rawData.json()
            Client.updateResult(data)
        } else {
            Client.showError()
        }
    }
    catch (error) {
        console.log(error)
    }
}