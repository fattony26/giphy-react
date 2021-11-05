const baseUrl = 'https://api.giphy.com/v1/gifs'

export function getRandom() {
    return fetch (`${baseUrl}/random?${process.env.api_key}`)
    .then(res => res.json());
}