import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <h1 className="mb-4">Contact Me</h1>

      <div className="d-flex gap-4 mt-4">
        <a 
          href="mailto:aliffirdiansyah5@gmail.com" 
          className="d-flex align-items-center text-decoration-none text-light"
        >
          <FaEnvelope size={28} className="me-2" /> Email
        </a>
        <a 
          href="https://wa.me/6287786705516" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="d-flex align-items-center text-decoration-none text-light"
        >
          <FaWhatsapp size={28} className="me-2 text-success" /> WhatsApp
        </a>
        <a 
          href="https://github.com/aliffirdiansyah" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="d-flex align-items-center text-decoration-none text-light"
        >
          <FaGithub size={28} className="me-2" /> GitHub
        </a>
        <a 
          href="https://linkedin.com/in/alif-firdiansyah"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center text-decoration-none text-light"
        >
          <FaLinkedin size={28} className="me-2 text-primary" /> LinkedIn
        </a>
      </div>
    </div>
  )
}
