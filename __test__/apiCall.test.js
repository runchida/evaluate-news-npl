import { postTextToServer } from "../src/client/js/apiCall";
import 'regenerator-runtime/runtime';
const $ = require('jquery');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 200 }),
  })
);

describe("Testing UI Update function", () => {
    test("Testing post function", async () => {
        const res = await postTextToServer('/mothership', "Text to post")
        expect(fetch).toHaveBeenCalledTimes(1);
    })
})