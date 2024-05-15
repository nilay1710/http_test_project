const {normalizeURL, getURLsFromHTML} = require('./crawl.js')
const {test, expect} = require('@jest/globals')




test('normalizeURL', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})


test('normalizeURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})

test('normalizeURL remove capitals', () => {
    const input = 'https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})

test('normalizeURL strip http', () => {
    const input = 'http://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)

})

test('getURLsFromHTML absolute', () => {
    const inputBody = '<html><body><a href="https://blog.boot.dev/path/">Boot.dev</a></body></html>'
    const inputURL = 'https://blog.boot.dev'
    const actual = getURLsFromHTML(inputBody,inputURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)

})

test('getURLsFromHTML relative', () => {
    const inputBody = '<html><body><a href="/path/">Boot.dev</a></body></html>'
    const inputURL = 'https://blog.boot.dev'
    const actual = getURLsFromHTML(inputBody,inputURL)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)

})

test('getURLsFromHTML both', () => {
    const inputBody = '<html><body><a href="https://blog.boot.dev/path1/">Boot.dev</a><a href="/path2/">Boot.dev</a></body></html>'
    const inputURL = 'https://blog.boot.dev'
    const actual = getURLsFromHTML(inputBody,inputURL)
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/"]
    expect(actual).toEqual(expected)

})

test('getURLsFromHTML invalid', () => {
    const inputBody = '<html><body><a href="invalid">Boot.dev</a></body></html>'
    const inputURL = 'https://blog.boot.dev'
    const actual = getURLsFromHTML(inputBody,inputURL)
    const expected = []
    expect(actual).toEqual(expected)

})




