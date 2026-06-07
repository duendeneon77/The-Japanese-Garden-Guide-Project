import "./AdminParagraph.css"

function AdminParagraph() {

    const isLogged = !!localStorage.getItem("loggedUser");

    if (!isLogged) {
        return null;
    }

    return (
        <div id="adminDiv">
        <p id="adminParagraph">
            VERSÃO DO ADMINISTRADOR
        </p>
        </div>
    );
}

export default AdminParagraph;