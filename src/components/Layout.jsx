import './Layout.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="layaoutApp">
      <nav>
        <ul>
          <li>
            <Link to="/">Principal</Link>
          </li>
          <li>
            <Link to="/Promociones">Promociones</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>    
      <Outlet />
    </>
  )
};

export default Layout;