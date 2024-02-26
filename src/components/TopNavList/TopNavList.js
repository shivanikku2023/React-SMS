const TopNavList = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark mt-5">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Staff
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Admission
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Student
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Facilities
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default TopNavList;
