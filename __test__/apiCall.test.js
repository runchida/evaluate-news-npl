import { postTextToServer } from "../src/client/js/apiCall";
import 'regenerator-runtime/runtime';
const $ = require('jquery');

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ stories: { title: 'Dog', links: { permalink: 'abudabi' } } }),
    })
);

describe("Testing UI Update function", () => {
    test("Testing post function", async () => {
        const res = await postTextToServer('/mothership', {bye: 'bye'})
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})