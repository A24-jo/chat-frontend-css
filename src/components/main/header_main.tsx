import { AiOutlineMore } from "react-icons/ai";
import "../../style/header_main.css";
import { BsBookmark } from "react-icons/bs";
import { BiAt } from "react-icons/bi";

function Header() {
  return (
    <div className="header_main_header">
      <div className="avatar_header_main">
        <div className="avatar">A</div>
        <h4>nombre del avatar</h4>
      </div>
      <div className="button_header">
        <input type="text" placeholder="search message"/>
        <button><BiAt size="20px" /></button>
        <button><BsBookmark size="20px"/></button>
        <button><AiOutlineMore size="20px" /></button>
      </div>
    </div>
  );
}

export default Header;
