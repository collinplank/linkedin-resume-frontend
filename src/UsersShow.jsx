export function UsersShow({ user }) {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto p-6 h-[80vh] overflow-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">{user.first_name + " " + user.last_name}</h2>
      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-700">Experiences: ({user.experiences.length} total)</h3>
        {user.experiences.map((experience) => (
          <div key={experience.id} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
            <p className="text-sm text-gray-600">Start Date: {experience.start_date}</p>
            <p className="text-sm text-gray-600">End Date: {experience.end_date}</p>
            <p className="font-medium text-gray-800">Job Title: {experience.job_title}</p>
            <p className="text-gray-800">Company Name: {experience.company_name}</p>
            <p className="text-gray-600">Details: {experience.details}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-700">Education: ({user.educations.length} total)</h3>
        {user.educations.map((education) => (
          <div key={education.id} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
            <p className="text-sm text-gray-600">Start Date: {education.start_date}</p>
            <p className="text-sm text-gray-600">End Date: {education.end_date}</p>
            <p className="font-medium text-gray-800">Degree: {education.degree}</p>
            <p className="text-gray-800">University Name: {education.university_name}</p>
            <p className="text-gray-600">Details: {education.details}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-700">Skills: ({user.skills.length} total)</h3>
        {user.skills.map((skill) => (
          <div key={skill.id} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
            <p className="font-medium text-gray-800">{skill.skill_name}</p>
          </div>
        ))}
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-700">Projects: ({user.projects.length} total)</h3>
        {user.projects.map((project) => (
          <div key={project.id} className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
            <p className="font-medium text-gray-800">Name: {project.name}</p>
            <p className="text-gray-600">Description: {project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
