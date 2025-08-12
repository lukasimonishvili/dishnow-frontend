import Styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";

const StyledContainer = Styled.div`
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
  padding-bottom: 50px;

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

const RecoverPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");
  const { language } = useLanguage();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <h2>{langData[language].changePassword}</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper error={errors.password}>
          <label htmlFor="password">{langData[language].password}</label>
          <input
            type="text"
            id="password"
            {...register("password", {
              required: langData[language].passwordRequired,
              validate: (value) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(
                  value
                ) || langData[language].invalidPassword,
            })}
          />
          <span>
            {errors && errors.password ? errors.password.message : "NA"}
          </span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.confirmPassword}>
          <label htmlFor="confirmPassword">
            {langData[language].confirmPassword}
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: langData[language].confirmPasswordRequired,
              validate: (value) =>
                value === password || langData[language].passwordsDontMatch,
            })}
          />
          <span>
            {errors && errors.confirmPassword
              ? errors.confirmPassword.message
              : "NA"}
          </span>
        </StyledInputWrapper>

        <button>{langData[language].changePassword}</button>
      </StyledForm>
    </StyledContainer>
  );
};

export default RecoverPassword;
