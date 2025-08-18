import Styled from "styled-components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext.jsx";
import langData from "../assets/lang.json";
import api from "../api.jsx";
import { useNotification } from "../contexts/notificationContext.jsx";

const StyledRegister = Styled.div`
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

const StyledLoginWrapper = Styled.p`
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

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const password = watch("password");
  const { language } = useLanguage();
  const { setNotification } = useNotification();

  const onSubmit = async (data) => {
    const inputDateStr = data.birthDay;
    const [day, month, year] = inputDateStr.split("/");
    const dateObj = new Date(`${year}-${month}-${day}`);
    const formattedDate = dateObj.toISOString().split("T")[0];

    let registerData = {
      name: data.name,
      lastName: data.lastName,
      birthday: formattedDate,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    try {
      const result = await api.post("/user/register", registerData);
      setNotification({
        text: langData[language].registerSuccess,
        status: "success",
      });
      reset();
    } catch (error) {
      console.error(error);
      setNotification({
        text: langData[language].somethingWrong,
        status: "error",
      });
    }
  };

  return (
    <StyledRegister>
      <h2>{langData[language].createAccount}</h2>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInputWrapper error={errors.name}>
          <label htmlFor="name">{langData[language].name}</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: langData[language].nameRequired })}
          />
          <span>{errors && errors.name ? errors.name.message : "NA"}</span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.lastName}>
          <label htmlFor="lastName">{langData[language].lastName}</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: langData[language].lastNameRequired,
            })}
          />
          <span>
            {errors && errors.lastName ? errors.lastName.message : "NA"}
          </span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.email}>
          <label htmlFor="email">{langData[language].email}</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: langData[language].emailRequired,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: langData[language].invalidEmail,
              },
            })}
          />
          <span>{errors && errors.email ? errors.email.message : "NA"}</span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.birthDay}>
          <label htmlFor="birthDay">{langData[language].birthday}</label>
          <input
            type="text"
            id="birthDay"
            placeholder="dd/mm/yyyy"
            {...register("birthDay", {
              required: langData[language].birthDayRequired,
              validate: (value) =>
                /^([0-2]\d|3[01])\/(0\d|1[0-2])\/\d{4}$/.test(value) ||
                langData[language].invalidBirthday,
            })}
          />
          <span>
            {errors && errors.birthDay ? errors.birthDay.message : "NA"}
          </span>
        </StyledInputWrapper>
        <StyledInputWrapper error={errors.password}>
          <label htmlFor="password">{langData[language].password}</label>
          <input
            type="password"
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
        <button>{langData[language].createAccount}</button>
      </StyledForm>
      <StyledLoginWrapper>
        {langData[language].alreadyMemeber}{" "}
        <Link to="/login">{langData[language].login}</Link>
      </StyledLoginWrapper>
    </StyledRegister>
  );
};

export default Register;
