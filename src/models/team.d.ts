import {UserType} from "./user";

/**
 * 队伍类别
 */
export type TeamType = {
    id: number;
    name: string;
    userId: number;
    description: string;
    expireTime?: Date;
    maxNum: number;
    hasJoin: boolean;
    password?: string,
    avatarUrl?: string,
    status: number;
    createTime: Date;
    updateTime: Date;
    createUser?: UserType;
    hasJoinNum?: number;
};
