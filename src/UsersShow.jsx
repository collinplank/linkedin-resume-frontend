export function UsersShow({ user }) {
  return (
    <div>
      <h1>Experience</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
    </div>
  );
}
