import pokemonService from './pokemonapi'

const pokemonservice = {}

pokemonservice.search = function (nombre){
    return pokemonService.get(`/api/v2/pokemon/${nombre}/`)
      .then(res => res.data )
}

export default pokemonservice