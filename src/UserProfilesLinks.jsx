export function UserProfileLinks({ users }) {
  return (
    <div className="profile-links-container" style={{ padding: "20px", textAlign: "center" }}>
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      <div className="space-y-6">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">{user.twitter_handle}</p>
            <a
              href={`https://bsky.app/profile/${user.twitter_handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              View Profile on Bsky
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfileLinks;