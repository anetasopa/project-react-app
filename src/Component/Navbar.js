export  function Navabar() {
  return (
    <nav className="navbar mb-4" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <div className="is-title is-size-3 has-text-weight-bold">Product</div>
        </a>

        <a href="/" role="button" cclassNamelass="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>

          <a href="/" className="navbar-item">
            Documentation
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="/" className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a href="/" className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}