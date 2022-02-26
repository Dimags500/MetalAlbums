// export type Root = Root2[]


export interface IAlbum {
  id?: string
  authorID: number
  name: string
  year: number
  albumPicture: string
  songs: ISong[]
}

export interface ISong {
  songName: string
  year: number
  trackNumber: number
}