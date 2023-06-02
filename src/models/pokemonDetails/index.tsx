

export type PokemonInfoState = {
    description: string,
    showMoves: boolean,
    loadingMove: boolean,
    currentMove: string
}    

export type PokemonInfoAction = {
    type: string;
    payload: PokemonInfoState;
};
  