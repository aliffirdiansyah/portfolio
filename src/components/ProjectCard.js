export default function ProjectCard({ project }) {
  return (
    <div className="card h-100">
      <img 
  src={project.image} 
  className="card-img-top" 
  alt={project.title}
  style={{ height: "200px", objectFit: "cover", width: "100%" }}
/>

      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
      </div>
      {project.link && (
  <div className="card-footer">
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="btn btn-primary"
    >
      View Project
    </a>
  </div>
)}

    </div>
  )
}
