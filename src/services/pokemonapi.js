import trae from 'trae'
import configService from './config'

const pokemonService = trae.create({
    baseUrl: configService.baseUrl
})

export default pokemonService