export function updateResult(stories) {
    const storyList = document.createElement('ul')
    for (let i = 0; i < stories.length; i++) {
        const story = document.createElement('li')
        story.innerHTML = `<a href='${stories[i].links.permalink}'>${stories[i].title}</a>`
        storyList.appendChild(story)
    }
    document.getElementById('result').appendChild(storyList);
}