
function Navbar() {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Aliff | Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#about">Abouts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#skills">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
