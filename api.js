import { data } from 'autoprefixer';
import axios from 'axios';
import { stringify } from 'postcss';


let api = axios.create()

const getAuthorization = async () => {
  return await api.post('https://id.twitch.tv/oauth2/token?client_id=aswr2ewgtj03zvhv9zffswp29jf1ro&client_secret=zx2rqjit2mdo8zebeouaed1syqive1&grant_type=client_credentials')
}
const getTopGames = async () => {
  const token = await getAuthorization();
  return await api.get('https://api.twitch.tv/helix/games/top',{
    headers: {
      'Authorization':  `Bearer ${token.data.access_token}`,
      'Client-Id' : 'aswr2ewgtj03zvhv9zffswp29jf1ro'
    }
})
  //alert(JSON.stringify(token))
}

const modifyGames = async (input) =>{
  const name = input
  //alert(JSON.stringify(input))
  const token = await getAuthorization();
    return await api.get(`https://api.twitch.tv/helix/search/categories?query=${name}`,{
    headers: {
      'Authorization':  `Bearer ${token.data.access_token}`,
      'Client-Id' : 'aswr2ewgtj03zvhv9zffswp29jf1ro'
    }
  })
}

const initGames = async () => {
  const token = await getAuthorization();
  return await api.get('https://api.twitch.tv/helix/search/categories?query=a',{
    headers: {
      'Authorization':  `Bearer ${token.data.access_token}`,
      'Client-Id' : 'aswr2ewgtj03zvhv9zffswp29jf1ro'
    }
})
}



export { getAuthorization, getTopGames, initGames, modifyGames}
export default api;
