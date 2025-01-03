export function UsersShow({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-6 h-[80vh] overflow-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {user.first_name + " " + user.last_name}
      </h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experiences: ({user.experiences.length} total)</h3>

        {user.experiences.map((experience) => (
          <div key={experience.id} className="bg-white p-6 rounded-lg mb-4 shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-medium text-gray-800">{experience.job_title}</p>
              <p className="text-sm text-gray-500">
                {experience.start_date} - {experience.end_date}
              </p>
            </div>

            <p className="text-gray-600 font-medium">{experience.company_name}</p>
            <p className="text-gray-600 mt-2">{experience.details}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education: ({user.educations.length} total)</h3>

        {user.educations.map((education) => (
          <div key={education.id} className="bg-white p-6 rounded-lg mb-4 shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <p className="text-lg font-medium text-gray-800">{education.degree}</p>
              <p className="text-sm text-gray-500">
                {education.start_date} - {education.end_date}
              </p>
            </div>

            <p className="text-gray-600 font-medium">{education.university_name}</p>
            <p className="text-gray-600 mt-2">{education.details}</p>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills: ({user.skills.length} total)</h3>

        {user.skills.map((skill) => (
          <div key={skill.id} className="bg-white p-4 rounded-lg mb-4 shadow-md border border-gray-200">
            <p className="text-lg font-medium text-gray-800">{skill.skill_name}</p>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projects: ({user.projects.length} total)</h3>

        {user.projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg mb-4 shadow-md border border-gray-200">
            <p className="text-lg font-medium text-gray-800 mb-2">{project.name}</p>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
