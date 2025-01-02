export function UsersIndex({ users }) {
  return (
    <div>
      <h1>Profiles</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{users.first_name}</h2>
          <h2>{users.last_name}</h2>
          <p>{users.email}</p>
          <p>{users.phone_number}</p>
          <p>{users.short_bio}</p>
          <p>{users.linkedin_url}</p>
          <p>{users.twitter_handle}</p>
          <p>{users.website_url}</p>
          <p>{users.online_resume_url}</p>
          <p>{users.github_url}</p>
          <p>{users.photo}</p>
        </div>
      ))}
    </div>
  );
}
