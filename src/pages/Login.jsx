import Styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import api from "../api.jsx";
import { useNotification } from "../contexts/notificationContext.jsx";
import { useUser } from "../contexts/userContext.jsx";

const StyledLogin = Styled.div`
  width: 454px;
  margin: 0 auto;
  padding-top: 90px;

  @media screen and (max-width: 514px) {
    width: 100%;
    padding: 0 30px;
  }

  & > h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    text-align: center;
    letter-spacing: -0.04em;
    color: #1B1818;
    margin-bottom: 32px;
  }
`;

const StyledForm = Styled.form`
  width: 100%;

  & > button {
    display: block;
    margin-top: 46px;
    width: 100%;
    height: 55px;
    background: #EB5017;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #CD3700;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #FFFFFF;
  }
`;

const StyledInputWrapper = Styled.div`
  width: 100%;
  margin-bottom: 8px;

  & > span {
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    color: ${(props) => (props.error ? "#D92D2A" : "transparent")};
    display: block;
    margin-top: 4px;
    padding-left: 16px;
  }

  & > label {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
    line-height: 145%;
    font-style: normal;
    color: #101928;
    display: block;
    margin-bottom: 4px;
  }

  & > input {
    width: 100%;
    height: 56px;
    background: #FFFFFF;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${(props) => (props.error ? "#D92D2A" : "#E3E3E3")};
    border-radius: 15px;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 145%;
    padding-left: 16px;
  }
`;

const StyledRegisterWrapper = Styled.p`
  width: 100%;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-top: 30px;
  margin-bottom: 60px;

  & > a {
    font-weight: 600;
    line-height: 145%;
    color: #EB5017;
  }
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { language } = useLanguage();
  const { setNotification } = useNotification();
  const { logIn } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    let loginData = {
      email: data.email,
      password: data.password,
    };
    try {
      const result = await api.post("/login", loginData);
      await logIn(result.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setNotification({
        text: langData[language].somethingWrong,
        status: "error",
      });
    }
  };

  return (
    <StyledLogin>
      <h2>{langData[language].login}</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper error={errors.email}>
          <label htmlFor="email">{langData[language].email}</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: langData[language].emailRequired,
            })}
          />
          <span>{errors && errors.email ? errors.email.message : "NA"}</span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.password}>
          <label htmlFor="password">{langData[language].password}</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: langData[language].passwordRequired,
            })}
          />
          <span>
            {errors && errors.password ? errors.password.message : "NA"}
          </span>
        </StyledInputWrapper>

        <button>{langData[language].login}</button>
      </StyledForm>
      <StyledRegisterWrapper>
        <Link to="/forgot-password">{langData[language].forgotPassword}?</Link>
      </StyledRegisterWrapper>
    </StyledLogin>
  );
};

export default Login;
