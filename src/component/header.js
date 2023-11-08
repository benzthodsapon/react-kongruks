import Logo from "../image/logo.png"
import "./Header.css"
export default function Header(props){
    // const {tittle} = props
    return(
        <nav>
            <img className="logo" src={Logo} alt="logo"></img>
            <a href="/">{props.tittle}</a>
        </nav>
        
    );
}
