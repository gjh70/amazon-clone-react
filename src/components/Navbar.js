export function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav-logo">Amazon Clone</div>
        <div className="nav-search">
          <input type="text" placeholder="Search Amazon" />
          <button>Search</button>
        </div>
      </nav>
    );
  }

  export default Navbar