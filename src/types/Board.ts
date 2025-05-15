export interface Board {
    id: number;
    title: string;
    nickname: string;
    commentCount: number;
    content?: string;
    comments?: Comment[];
}