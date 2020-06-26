export type PostType = {
    id: number
    name: string
    message: string
    likeCount: number
};

export type ContactsType= {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
};

export type PhotosType = {
    small: string | null
    large: string | null
};

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
};

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}
