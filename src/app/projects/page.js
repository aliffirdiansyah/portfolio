import projects from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
