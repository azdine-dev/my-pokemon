import { availablePokeTypes } from "./available-types";


function generateRandomFromArray(arr:string[]){
    return   arr[Math.floor(Math.random() * arr.length)];   
}

export function getRandonmPokemonType() {
    return generateRandomFromArray(availablePokeTypes);
}