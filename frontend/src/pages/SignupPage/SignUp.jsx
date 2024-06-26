import React from "react";
import { BsTwitterX } from "react-icons/bs";
import StandardForm from "../../components/Forms/StandardForm";
import axios from "../../../back_address";

const SignUp = () => {
  const handleSubmit = async (formValues) => {
    if (formValues) {
      try {
        await axios.post(`/user`, {
          email: formValues.email?.value,
          username: formValues.username?.value,
          name: formValues.name?.value,
          password: formValues.password?.value,
        });
      } catch (error) {
        console.error("There was an error while creating a new user: ", error);
      }
    }
  };
  return (
    <StandardForm
      fields={[
        {
          category: "input",
          name: "username",
          label: "username",
          pattern: "^[A-Za-z0-9_]+$",
          type: "text",
          maxLength: 10,
        },
        {
          category: "input",
          name: "name",
          label: "name",
          pattern: /^[A-Za-záéíóúÁÉÍÓÚ]+(\s[A-Za-záéíóúÁÉÍÓÚ]+)*$/,
          type: "text",
          maxLength: 10,
        },
        {
          category: "input",
          name: "email",
          label: "email",
          pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          type: "email",
        },
        {
          category: "input",
          name: "password",
          label: "password",
          pattern: "^(?=.*[A-Z])(?=.*[^a-zA-Z0-9s]).+$",
          type: "password",
          minLength: 8,
        },
        {
          category: "button",
          text: "Create account",
          type: "submit",
          colorStyle: "white",
          formatting: "mt-4",
        },
        {
          category: "div",
          content: (
            <div className="mt-2">
              <div className=" text-gray-username">
                Already have an account?{" "}
                <a href="/login">
                  <span className=" text-blue-main hover:underline">Login</span>
                </a>
              </div>
            </div>
          ),
        },
      ]}
      title={"Join X"}
      onSubmit={handleSubmit}
    ></StandardForm>
  );
};

export default SignUp;
