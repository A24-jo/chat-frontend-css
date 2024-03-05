import { LuPencilLine } from "react-icons/lu";
import "../../style/nav_input.css";
import { RiSearch2Line } from "react-icons/ri";

function NavInput() {
  return (
    <div className="container_nav_input">
      <div className="search_top">
        <select>
          <option value="hello">Active chats</option>
          <option value="hello">e chats</option>
        </select>
        <button>
          <LuPencilLine id="stick" size="17px" />
        </button>
      </div>
      <div className="search_bottom">
        <input type="text" placeholder="search ..." />
        <button>
          <RiSearch2Line id="lupa"  />
        </button>
      </div>
    </div>
  );
}

export default NavInput;
