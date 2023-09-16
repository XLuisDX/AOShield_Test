import { UserList } from "./UserList";
import { UserForm } from "./UserForm";

export function Home() {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
}
