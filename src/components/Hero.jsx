export default function Hero() {
  return (
    <div className="text-center py-5">
      <img
  src="/images/profile.jpg"
  alt="Profile"
  className="rounded-circle mb-3"
  width="300"
  height="300"
  style={{ objectFit: "cover" }}
/>

      <h1>Hello, I'm Alif 👋</h1>
      <p className="lead">Fullstack Web Developer</p>
      <a href="https://drive.google.com/file/d/14i1hkbXji-7nPCdezdvFZTdFgtnJQmpT/view?usp=sharing" className="btn btn-success" download>Download My CV</a>
    </div>
  )
}
