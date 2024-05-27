import { Model } from 'sequelize';
interface UserAttributes {
    id: number;
    username: string;
    email: string;
}
declare class User extends Model<UserAttributes> implements UserAttributes {
    id: number;
    username: string;
    email: string;
}
export default User;
