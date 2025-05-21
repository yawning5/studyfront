import type { Comment } from './Comment';

export interface Board {
    id: number;
    title: string;
    nickname: string;
    commentCount: number;
    content?: string;
    comments?: Comment[]; // 상세 조회 시만 포함됨
}

export interface BoardWriteInput {
    title: string;
    content: string;
}