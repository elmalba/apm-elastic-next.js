
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/"  className="navbar-brand">Js Conf
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/regions"  className="nav-link">Regiones 
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/parks/"  className="nav-link">Parques 
              </Link>
            </li>

          </ul>
       
        </div>
      </nav>
    );
}
