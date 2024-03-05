import "../style/nav.css"
import ActiveNow from "./nav/active_now";
import List_chats from "./nav/list_chats";
import NavInput from "./nav/nav_input";

function Nav() {
  return (
    <div className="nav_container">
      <div className="nav_input">
        <NavInput />
      </div>
      <div className="activeNow">
        <ActiveNow/>
        </div>
      <div className="listChat">
        <List_chats/>
      </div>
    </div>
  );
}

export default Nav;
