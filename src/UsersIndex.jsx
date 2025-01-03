export function UsersIndex({ users, onShow }) {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Profiles</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img
              src={user.photo}
              alt={user.first_name}
              className="w-24 h-24 rounded-full mb-4 border border-gray-300"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.first_name + " " + user.last_name}</h2>
            <p className="text-gray-600 text-sm mb-1">{user.email}</p>
            <p className="text-gray-600 text-sm mb-1">{user.phone_number}</p>
            <p className="text-gray-600 text-sm mb-4 text-center">{user.short_bio}</p>
            <div className="space-y-2">
              {user.linkedin_url && (
                <a
                  href={user.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {user.twitter_handle && <p className="text-gray-600 text-sm">Twitter: {user.twitter_handle}</p>}
              {user.website_url && (
                <a
                  href={user.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Website
                </a>
              )}
              {user.online_resume_url && (
                <a
                  href={user.online_resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Resume
                </a>
              )}
              {user.github_url && (
                <a
                  href={user.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
            <button
              onClick={() => onShow(user)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              More Info
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
