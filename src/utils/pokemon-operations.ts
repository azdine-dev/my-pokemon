import * as URL from '../constants/url';
export const beautifyName = (name :string)=>{
  if(name.replace){
    return name.replace(/[_-]/g,' ').replace(/\b\w/g, l => l.toUpperCase())
  }else{
    return name;
  }
};
export const getPokemonDisplayImageFromName = (name :string)=>{
  return URL.POKEMON_IMAGE_URL+name+'.jpg'
}
//Its ridiculous to do multiple API call for id *Should've used the GRAPHQL endpoint though
export const getIDfromURL = (pokeURL :string)=>{
    const idMather = pokeURL.match(/([^\/]*)\/*$/);
    if(idMather){
        return  idMather[1];
    }
}
export const getPokemonBaseSpriteFromURL = (url :string)=>{
  var spriteName = getIDfromURL(url)+".png";
  var spriteUrl= URL.POKEMON_SPRITES_URL+spriteName;
  return spriteUrl;
}

export const getPokemonAnimatedSpriteFromURL = (url :string)=>{
  var spriteName = getIDfromURL(url)+".gif";
  var spriteUrl= URL.POKEMON_ANIMATED_SPRITES_URL+spriteName;
  return spriteUrl;
}

export const getURLFromPayload = (payload :any)=>{
  const { query , id, param } = payload;
  var result = query+'/';
  if(id)
    result+=id+'/'
  if(param){
      let paramString ="?";
      Object.keys(param).map((key)=>{
        paramString+=key+"="+param[key]+"&"
        return key;
      });
      result+=paramString;
  }
  return URL.POKE_API_ENDPOINT+result;
};
