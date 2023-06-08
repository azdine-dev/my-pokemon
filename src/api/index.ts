export const PokeFetch = (url :string) => {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};
