const pokemonReducer = (state, action) => {
    switch(action.type) {
        case 'GET_GENERATIONS':
            return {
                ...state,
                generations: action.payload,
                loading: false
            }
        case 'GET_GENERATION_POKEMON':
            return {
                ...state,
                pokemons: action.payload,
                loading: false
            }
        case 'FILTER_POKEMON':
            return {
                ...state,
                pokemons: action.payload,
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
        
    }

    
}

export default pokemonReducer