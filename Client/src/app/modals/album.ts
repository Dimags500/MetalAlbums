// export type Root = Root2[]


export interface IAlbum {
  id: string
  author: string
  albumName: string
  year: number
  albumPicture: string
  songs: ISong[]
}

export interface ISong {
  songName: string
  year: number
  trackNumber: number
}