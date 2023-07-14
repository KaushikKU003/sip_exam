import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
<>
<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
  <img src="https://source.unsplash.com/random/?travellogo"alt="Logo" width="35" height="30" class="d-inline-block align-text-top"></img>
    <div class="navbar-brand" href="/">Travel_Inida</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/menu">Menu</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="/aboutus">About Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
       
      </form>
    </div>
  </div>
</nav>

      <Outlet />
    </>

     );
} 
export default Layout;