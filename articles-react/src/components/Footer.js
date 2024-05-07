import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Welcome to Our Shop!</span><br />
                        <span>Best quality! Perfect deals!</span>
                    </div>
                    <div className="col-md-6">
                        <nav className="nav justify-content-end">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/Blog">Get to know more</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
