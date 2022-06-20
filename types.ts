export type allOptions = Gender | Length | Popularity

export enum Gender {
    BOY = "Boy",
    GIRL = "Girl",
    UNISEX = "Unisex"
}

export enum Popularity {
    UNIQUE = "Unique",
    TRENDY = "Trendy"
}

export enum Length {
    LONG = "Long",
    SHORT = "Short",
    ALL = "All"
}


export interface OptionsState {
    gender: Gender
    popularity: Popularity
    length: Length
}
  
export interface OptionType {
    title: string,
    category: string,
    buttons : Gender[] | Length[] | Popularity[]
}
  