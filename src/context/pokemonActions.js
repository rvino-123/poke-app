import axios from 'axios'

const POKE_URL = process.env.REACT_APP_POKEAPI_URL

const pokemon = axios.create({
    baseURL: POKE_URL
})

// ALL FUNCTIONS BELOW WERE JUST REPEATED SO I DECIDED TO MAKE ONE FUNCTION ISTEAD
// export const getPokemonGenerations = async() => {
//     if (!isKeyExists("generations")) {
//         const response = await pokemon.get('/generation')
//         localStorage.setItem('generations', JSON.stringify(response.data.results))
//         return response.data.results
//     } else {
//         const localStorageItem = JSON.parse(localStorage.getItem("generations") || "[]")
//         return localStorageItem
//     }
// }

// export const getPokemonbyGeneration = async(generationName) => {
//     if (!isKeyExists(`${generationName}-pokemon`)) {
//         const response = await pokemon.get(`/generation/${generationName}`)
//         localStorage.setItem(`${generationName}-pokemon`, JSON.stringify(response.data))
//         return response.data.pokemon_species
//     } else {
//         const localStorageItem = JSON.parse(localStorage.getItem(`${generationName}-pokemon`) || "[]")
//         return localStorageItem.pokemon_species
//     }
// }

// export const getPokemon = async (pokemonName) => {
//     if (!isKeyExists(pokemonName)) {
//         const response = await pokemon.get(`pokemon/${pokemonName}`)
//         localStorage.setItem(pokemonName, JSON.stringify(response.data))
//         return response.data
//     } else {
//         const localStorageItem = JSON.parse(localStorage.getItem(pokemonName) || "{}")
//         console.log(localStorageItem)
//         return localStorageItem
//     }
// }

export const getEntity = async (entityType, entityName = "", entityDataType) => {

        if (!isKeyExists(entityName)) {
            const response = await pokemon.get(`${entityType}/${entityName}`)
            
            if (entityName === "")  {entityName = "generations"}
            localStorage.setItem(entityName, JSON.stringify(response.data))
            return response.data
        } else {
            const localStorageItem = JSON.parse(localStorage.getItem(entityName) || entityDataType)
            return localStorageItem
        }
        

}

export const filterPokemon = (pokemonArray, queryString) => 
pokemonArray.filter((pokemon) => pokemon['name'].startsWith(queryString))


// Helper Functions


function isKeyExists(key) {
    if (localStorage.getItem(key) !== null) {
        return true
    } else {
        return false
    }
}
