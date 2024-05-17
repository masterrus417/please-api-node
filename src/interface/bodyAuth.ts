//интерфейсы для работы с авторизацией

interface UserRequestBody {
  username: string;
  password: string;
  email: string;
  first_name?: string;
  last_name?: string;
}

export default UserRequestBody;