import { useForm } from "react-hook-form";
import "../../style/auth_login.css";
import { UserLogin } from "../../interface/user_interface";
import { setlocalstorage } from "../../service/localStorage";
import { Login_utils } from "../../utils/login_api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IsSessions } from "../../service/isSessions";
import { useEffect, useState } from "react";
import Loading_button from "../loaders/loading_button";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserLogin>();
  const navidate: NavigateFunction = useNavigate();
  const data = IsSessions();
  const [isLoading, setIsLoading] = useState(true);

  const onsubmit = handleSubmit(async (value) => {
    setIsLoading(false);
    const data = {
      email: value.user,
      phone: value.user,
      password: value.password,
    };
    const result = await Login_utils(data);
    if (result?.user) {
      setlocalstorage("user", JSON.stringify(result));
    }else{
      setIsLoading(true);
      return
    }
  });

  useEffect(() => {
    if (data) navidate("/home");
  },[data,navidate]);

  return (
    <div className="login_container">
      <form className="login_login-form" onSubmit={onsubmit}>
        <h2>Log in</h2>
        <div className="login_form-group">
          <label>phone/email</label>
          <input
            type="text"
            placeholder="your enter email/phone"
            {...register("user", {
              required: true,
            })}
          />
          {errors.user?.type === "required" && <p>this field required</p>}
        </div>
        <div className="login_form-group">
          <label>password</label>
          <input
            type="password"
            placeholder="your enter password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && <p>this field required</p>}
        </div>
        {isLoading ? <button type="submit">Iniciar Sesión</button>:<Loading_button/>}
        <p>
          {" You do not have an account ? "}
          <a onClick={() => navidate("/sinup")}>{"create an account "}</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
