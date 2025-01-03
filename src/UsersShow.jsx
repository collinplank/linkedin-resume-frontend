export function UsersShow({ user }) {
  return (
    <div>
      <h2>{user.first_name + " " + user.last_name}</h2>
      <h2>Experiences: ({user.experiences.length} total) </h2>
      {user.experiences.map((experience) => (
        <div key={experience.id}>
          <p>Start Date: {experience.start_date}</p>
          <p>End Date: {experience.end_date}</p>
          <p>Job Title: {experience.job_title}</p>
          <p>Company Name: {experience.company_name}</p>
          <p>Details: {experience.details}</p>
        </div>
      ))}
      <h2>Education: ({user.educations.length} total) </h2>
      {user.educations.map((education) => (
        <div key={education.id}>
          <p>Start Date: {education.start_date}</p>
          <p>End Date: {education.end_date}</p>
          <p>Degree: {education.degree}</p>
          <p>University Name: {education.university_name}</p>
          <p>Details: {education.details}</p>
        </div>
      ))}
      <h2>Skills: ({user.skills.length} total) </h2>
      {user.skills.map((skill) => (
        <div key={skill.id}>
          <p>Skill: {skill.skill_name}</p>
        </div>
      ))}
      <h2>Projects: ({user.projects.length} total) </h2>
      {user.projects.map((project) => (
        <div key={project.id}>
          <p>Name: {project.name}</p>
          <p>Description: {project.description}</p>
        </div>
      ))}
    </div>
  );
}
