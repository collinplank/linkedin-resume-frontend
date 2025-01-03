export function UsersIndex({ users, onShow }) {
  return (
    <div>
      <h1>Profiles</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.first_name + " " + user.last_name}</h2>
          <p>{user.email}</p>
          <p>{user.phone_number}</p>
          <p>{user.short_bio}</p>
          <p>{user.linkedin_url}</p>
          <p>{user.twitter_handle}</p>
          <p>{user.website_url}</p>
          <p>{user.online_resume_url}</p>
          <p>{user.github_url}</p>
          <img src={user.photo} />
          <button onClick={() => onShow(user)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
