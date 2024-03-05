import { BsEmojiSmile, BsSendFill } from "react-icons/bs";
import "../style/main.css";
import { RiAttachment2 } from "react-icons/ri";
import Header from "./main/header_main";

function Main() {
  return (
    <>
      <div className="header-main">
        <Header />
      </div>
      <div className="container-chat-main">
        <div className="chat-main">texttso</div>
        <div className="send-main">
          <input placeholder="write message for send" type="text" />
          <div>
            <BsEmojiSmile size="20px" color="white" />{" "}
          </div>
          <div>
            <RiAttachment2 size="20px" color="white" />{" "}
          </div>
          <button>
            send <BsSendFill id="BsSendFill" size="15px" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
