import Styled from "styled-components";
import { useEffect } from "react";
import { useNotification } from "../contexts/notificationContext";

const StyledNotification = Styled.div`
    position: fixed;
    top: 25%;
    right: ${(props) => props.right};
    padding: 15px 10px;
    background: ${(props) => props.background};
    transition: 0.3s;
    font-size: 18px;
    color: #ffffff;
`;

const Notification = () => {
  const { notification, setNotification } = useNotification();

  useEffect(() => {
    if (!!notification) {
      setTimeout(() => {
        setNotification(null);
      }, 4000);
    }
  }, [notification]);
  return (
    <StyledNotification
      right={!!notification ? 0 : "-100%"}
      background={
        notification && notification.status === "success" ? "green" : "red"
      }
    >
      {notification && notification.text}
    </StyledNotification>
  );
};

export default Notification;
