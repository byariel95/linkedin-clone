import { Role } from "../emuns/role.enum";
import { PostFeed } from "./feed-post.model";

export class UserModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
    posts: PostFeed[];
    password: string;
    createdAt: Date;
    updatedAt: Date;
}