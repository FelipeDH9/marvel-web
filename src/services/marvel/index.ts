import axios,{Axios, Method} from 'axios'
import md5 from 'js-md5'
import {GetComicsByIdSchema, GetCharactersSchema, GetCharactersResponse, GetCharacterByIdResponse, GetComicsByIdResponse, GetDoRequestSchema} from './schema'

const doRequest = async ({ method = 'GET', body, headers, params, path }:GetDoRequestSchema) => {
  try {
    // const timestamp = new Date().getTime();
    // const hash = md5(timestamp + String(process.env.REACT_APP_PRIVATE_KEY) + String(process.env.REACT_APP_PUBLIC_KEY));
    // const customParams = {
    //   ts: timestamp,
    //   apikey: String(process.env.REACT_APP_PUBLIC_KEY),
    //   hash
    // };
    // console.log('customParams', customParams)
    // const {data}= await axios.request({
    //   method,
    //   params: {...params, customParams},
    //   url: `https://gateway.marvel.com/v1/public${path}`,
    //   data: body,
    //   headers
    // })
    const ts = new Date().getTime();
    const hash = md5(ts + String(process.env.REACT_APP_PRIVATE_KEY) + String(process.env.REACT_APP_PUBLIC_KEY));
    const apikey = String(process.env.REACT_APP_PUBLIC_KEY)
    const {data}= await axios.request({
      method,
      params: {...params, ts, apikey,hash},
      url: `https://gateway.marvel.com/v1/public${path}`,
      data: body,
      headers
    })

    return data
  } catch (error) {
    console.log({ error })
    return error
  }
}
// pegar todos os personagens
export const getCharacters = async (params?:GetCharactersSchema) => {
  const hasParams = params ? { ...params } : {}
  const characters = await doRequest({
    method: 'GET',
    path: '/characters',
    params: hasParams
  })
  return characters as GetCharactersResponse
}

// pegar o personagem pelo seu id, sempre 1 personagem
export const getCharacterById = async (characterId: number) =>{
  const character = await doRequest({
    method: 'GET',
    path: `/characters/${characterId}`
  })
  return character as GetCharacterByIdResponse
}

// pegar os quadrinhos que tal personagem participou, sempre 1 personagem
export const getComicsById = async ({characterId, params}:{characterId: number, params?: GetComicsByIdSchema}) =>{
  const hasParams = params ? { ...params } : {}
  const comics = await doRequest({
    method:'GET',
    path: `/characters/${characterId}/comics`,
    params: hasParams
  })
  return comics as GetComicsByIdResponse
}