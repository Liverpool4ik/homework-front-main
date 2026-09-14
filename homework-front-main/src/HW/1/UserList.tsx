type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number;
  name: string;
  age: number;
  address: AddressType;
  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: UserType[];
  // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType)=> {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((oneUser) => (
          <li key={oneUser.id} id={`hw01-user-${oneUser.id}`}>
            <strong>{oneUser.name}</strong> (Age: {oneUser.age})<strong> Address:</strong>
            {oneUser.address.street}, {oneUser.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};
