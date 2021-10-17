const functions = require('./index');
const context = require('../testing/context');
const { test } = require('@jest/globals');

test('Http trigger', async() => {
    const request = {
        query: { name: 'pancho' }
    };

    await functions(context, request);
    expect(context.res.body).toEqual('Hello, pancho');
    expect(context.log.mock.calls.length).toBe(2);
});