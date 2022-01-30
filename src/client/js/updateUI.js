export function updateResult(result) {
    document.getElementById('result').innerHTML = ''
    if (result.status.code == '0') {
        console.log('changing text')
        const docFrag = document.createDocumentFragment()
        const positivity = document.createElement('div')
        positivity.innerHTML = `Rating on the sentiment: ${result.score_tag}`
        const agreement = document.createElement('div')
        agreement.innerHTML = `Agreement?: ${result.agreement}`
        const irony = document.createElement('div')
        irony.innerHTML = `Irony?: ${result.irony}`
        docFrag.append(positivity)
        docFrag.append(agreement)
        docFrag.append(irony)
        document.getElementById('result').appendChild(docFrag)
    }
    else {
        document.getElementById('result').innerHTML = 'Something went wrong'
    }
}