import { useForm } from "react-hook-form";
import "../../style/auth_singoff.css";
import { UserFormData } from "../../interface/user_interface";
import { Register_utils } from "../../utils/login_api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading_button from "../loaders/loading_button";

function Singoff() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserFormData>();

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const onsubmit = handleSubmit(async (value) => {
    setIsLoading(false);
    const result = await Register_utils(value);
    if (result === 1) {
      navigate("/");
    }
    setIsLoading(true);
  });

  return (
    <div className="singoff_container">
      <form className="singoff_form" onSubmit={onsubmit}>
        <p>REGISTER</p>
        <span>
          <label>name</label>
          <input
            type="text"
            placeholder="enter your name"
            {...register("name", {
              minLength: 3,
              required: true,
            })}
          />
          {errors.name?.type === "required" && <p>estecanpo es requerido </p>}
          {errors.name?.type === "minLength" && <p>enter a name validate </p>}
        </span>
        <span>
          <label> phone</label>
          <input
            type="text"
            placeholder="enter your phone"
            {...register("phone", {
              required: true,
              pattern: /^[0-9]{9}$/,
            })}
          />
          {errors.phone?.type === "required" && <p>this field required</p>}
          {errors.phone?.type === "pattern" && <p>enter a phone validate</p>}
        </span>
        <span>
          <label>email</label>
          <input
            type="text"
            placeholder="enter your email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email?.type === "pattern" && <p>not is a email valid </p>}
          {errors.email?.type === "required" && <p>this field required</p>}
        </span>
        <span>
          <label>password</label>
          <input
            type="text"
            placeholder="enter your password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            })}
          />
          {errors.password?.type === "required" && <p>this field required</p>}
          {errors.password?.type === "pattern" && (
            <p>not is a password valid, example Password123 </p>
          )}
        </span>
        <span>
          <label>confirm password</label>
          <input
            type="text"
            placeholder="enter your password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
          />
          {errors.confirmPassword?.type === "required" && (
            <p>this field required</p>
          )}
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword.message}</p>
          )}
        </span>
        {isLoading ? <button type="submit">Submit</button> : <Loading_button />}
        <h4>
          Already have an acount ? <a onClick={() => navigate("/")}> Signin</a>
        </h4>
      </form>
    </div>
  );
}

export default Singoff;
