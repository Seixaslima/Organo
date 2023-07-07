export interface IColaborador {
  id: string
  favorito: boolean
  nome: string
  cargo: string
  imagem: string
  time: string
}

export interface INovoColaborador {
  nome: string
  cargo: string
  imagem: string
  time: string
}
