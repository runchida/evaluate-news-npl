import { updateResult } from "../src/client/js/updateUI";
const $ = require('jquery');

window.document.body.innerHTML = `<body>
    <form>
        <label for="news">What's happening: </label>
        <input id="news" type="text" placeholder="Mothership to Earth" required autocomplete="off" />
        <button id="submit">Spy on human</button>
    </form>
    <div id="result"></div>
    </body>`

const stories = [{ title: 'Dog', links: { permalink: 'abudabi' } }, { title: 'Cat', links: { permalink: 'alakazam' } }]
describe("Testing UI Update function", () => {
    test("Test: updateResult()", () => {
        expect(updateResult).toBeDefined();
        const div = $('#result')
        updateResult(stories)
        expect(div[0].innerHTML).toMatch(/Dog/);
        expect(div[0].innerHTML).toMatch(/Cat/);
    })
})