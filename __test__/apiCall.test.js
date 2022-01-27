import { postTextToServer } from "../src/client/js/apiCall";
import 'regenerator-runtime/runtime';
const $ = require('jquery');

describe("Testing UI Update function", () => {
    test("Testing post function", async () => {
        const res = await postTextToServer('/mothership', {bye: 'bye'})
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})