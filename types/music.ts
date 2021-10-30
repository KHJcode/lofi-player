export interface IMusicItem {
    readonly id: string;
    readonly title: string;
    readonly thumbnail: string;
}

export interface IMusic extends IMusicItem {
    readonly author: string;
}
