import ButtonNavbar from "./NavBarButtonComponent/NavbarButton";
import './Navbar.css'
function Navbar() {
  const navButtons = [
    { id: "nb1", label: "Especies", bg:"/navbarmobile/momijibranche.png" },
    { id: "nb2", label: "Tipos", bg:"/navbarmobile/rockgarden.png"},
    { id: "nb3", label: "Filosofia" , bg:"/navbarmobile/meditation.png"},
    { id: "nb4", label: "Substituições", bg:"/navbarmobile/sakurabranche.png"},
  ];
  return (
    <div className="navbar-div">
      <nav>
        
        {navButtons.map((navButton) => (
            <ButtonNavbar 
            key={navButton.id}
            bg={navButton.bg}
            >
              {navButton.label}
            </ButtonNavbar>
          )
        )
      }
      
      </nav>
    </div>
  );
}

export default Navbar;
