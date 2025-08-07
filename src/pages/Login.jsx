import Styled from "styled-components";
import googleIcon from "../assets/img/google.png";
import facebookIcon from "../assets/img/facebook.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

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

const StyledSocialButton = Styled.button`
  display: block;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: #E3E3E3;
  border-radius: 15px;
  margin-top: 16px;

  & > img {
    width: 20px;
    height: 20px;
  }
  
  & > span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #344054;
    padding-left: 16px;
  }
`;

const StyledDivider = Styled.div`
  width: 100%;
  height: 1px;
  background: #F0F2F5;
  margin: 46px 0;
  position: relative;

  &:after {
    content: "${[(props) => props.content]}";
    position: absolute;
    width: 32px;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #667185;
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledLogin>
      <h2>Login</h2>
      <StyledSocialButton>
        <img src={googleIcon} alt="" />
        <span>{langData[language].loginWithGoogle}</span>
      </StyledSocialButton>
      <StyledSocialButton>
        <img src={facebookIcon} alt="" />
        <span>{langData[language].loginWithFacebook}</span>
      </StyledSocialButton>

      <StyledDivider content={langData[language].or} />

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
        {langData[language].dontHaveAccount}{" "}
        <Link to="/login">{langData[language].register}</Link>
      </StyledRegisterWrapper>
    </StyledLogin>
  );
};

export default Login;
