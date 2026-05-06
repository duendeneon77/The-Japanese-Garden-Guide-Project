import './NavbarButton.css'
function ButtonNavbar({children,bg}){
    return(
        <button className="button-navbar"
            style={{      
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            {children}
        </button>
    )
}

export default ButtonNavbar