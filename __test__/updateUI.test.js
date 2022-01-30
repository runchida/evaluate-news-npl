import { updateResult } from "../src/client/js/updateUI";
const $ = require('jquery');

window.document.body.innerHTML = `<body>
    <div id="result"></div>
    </body>`

const result = { status: { code: 0 }, score_tag: "P", irony: "IRONY", agreement: "AGREEMENT" }
describe("Testing UI Update function", () => {
    test("Test: updateResult()", () => {
        expect(updateResult).toBeDefined();
        const div = $('#result')
        updateResult(result)
        expect(div[0].innerHTML).toMatch(/IRONY/);
        expect(div[0].innerHTML).toMatch(/sentiment/);
    })
})