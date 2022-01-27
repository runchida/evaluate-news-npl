import { onClick } from "../src/client/js/formHandler"
const $ = require('jquery');

describe("Testing submit form or click button", () => {
    test("Test: onClick()", () => {
        expect(onClick).toBeDefined();
    })
})