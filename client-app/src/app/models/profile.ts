export interface IProfileEditable {
  displayName: string,
  bio: string,
}

export interface IProfile extends IProfileEditable {
  username: string,
  image: string,
  following: boolean,
  followersCount: number,
  followingCount: number,
  photos: IPhoto[],
}

export interface IPhoto {
  id: string,
  url: string,
  isMain: boolean,
}