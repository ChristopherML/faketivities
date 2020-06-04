export interface IProfileEditable {
  displayName: string,
  bio: string,
}

export interface IProfile extends IProfileEditable {
  username: string,
  image: string,
  photos: IPhoto[],
}

export interface IPhoto {
  id: string,
  url: string,
  isMain: boolean,
}