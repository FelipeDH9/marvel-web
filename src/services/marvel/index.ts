import axios,{Axios, Method} from 'axios'
import md5 from 'js-md5'
import {GetComicsByIdSchema, GetCharactersSchema, GetCharactersResponse, GetCharactersBtIdResponse, GetComicsByIdResponse, GetDoRequestSchema} from './schema'

const doRequest = async ({ method = 'GET', body, headers, params, path }:GetDoRequestSchema) => {
  try {
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + String(process.env.REACT_APP_PRIVATE_KEY) + String(process.env.REACT_APP_PUBLIC_KEY));
    const customParams = {
      hash,
      ts: timestamp,
      apikey: String(process.env.REACT_APP_PUBLIC_KEY),
    };

    const {data}= await axios.request({
      method,
      params: {...params, customParams},
      url: `https://developer.marvel.com/v1/public${path}`,
      data: body,
      headers
    })
    return data
  } catch (error) {
    console.log({ error })
    return error
  }
}

export const getCharacters = async (params?:GetCharactersSchema) => {
  const hasParams = params ? { ...params } : {}
  const characters = await doRequest({
    method: 'GET',
    path: '/characters',
    params: hasParams
  })
  console.log(characters)
  return characters as GetCharactersResponse
}

export const getCharactersById = async (characterId: number) =>{
  const character = await doRequest({
    method: 'GET',
    path: `/characters/${characterId}`
  })
  return character as GetCharactersBtIdResponse
}

export const getComicsById = async ({characterId, params}:{characterId: number, params?: GetComicsByIdSchema}) =>{
  const hasParams = params ? { ...params } : {}
  const comics = await doRequest({
    method:'GET',
    path: `/characters/${characterId}/comics`,
    params: hasParams
  })
  return comics as GetComicsByIdResponse
}