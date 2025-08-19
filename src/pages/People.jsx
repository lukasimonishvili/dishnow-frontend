import Styled from "styled-components";
import { useState, useEffect } from "react";
import { secureApi } from "../api";
import { useNotification } from "../contexts/notificationContext";

const StyledPeople = Styled.div`
    width: 100%;

    & > h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
    }
`;

const StyledTable = Styled.div`
    width: 100%;
    margin-top: 30px;

    & > div {
        width: 100%;
        display: flex;
        padding: 15px 0;

        &:nth-child(odd) {
            background: #E0E0E0;
        }

        & > div {
            width: calc(100% / 6);
            text-align: center;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.01em;
            color: #000000;

            &:nth-child(5) {
                position: relative;
            }
        }
    }
`;

const StyledUpdateRolePopup = Styled.div`
    display: ${(props) => props.displayvalue};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    border: 1px solid #2F80ED;
    padding: 7px;
    border-radius: 8px;

    & > p {
        margin-bottom: 8px;
    }

    & > button {
        width: 50%;
        text-align: center;
    }
`;

const People = () => {
  const [users, setUsers] = useState([]);
  const [updatingUser, setUpdatingUser] = useState({
    index: -1,
    status: "USER",
  });
  const [fetcher, setFetcher] = useState(0);
  const { setNotification } = useNotification();

  const fetchUsers = async () => {
    try {
      const response = await secureApi.get("/user/getAll");
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetcher]);

  const handleRoleChange = (e, index) => {
    setUpdatingUser({ index, status: e.target.value });
  };

  const updateUserStatus = async () => {
    const userToUpdate = users[updatingUser.index];
    userToUpdate.role = updatingUser.status === "MANAGER" ? 1 : 0;
    try {
      const response = await secureApi.put(
        "/user/update/" + userToUpdate.id,
        userToUpdate
      );
      setUpdatingUser({ index: -1, status: "USER" });
      setFetcher((prev) => prev + 1);
      setNotification({
        text: "User role changed",
        status: "success",
      });
    } catch (err) {
      setNotification({
        text: "Somethin went wrong! try again later",
        status: "error",
      });
    }
    setUpdatingUser({ index: -1, status: "USER" });
  };

  return (
    <StyledPeople>
      <h2>People</h2>
      <StyledTable>
        <div>
          <div>ID</div>
          <div>Name</div>
          <div>Lastname</div>
          <div>Email</div>
          <div>role</div>
          <div>Verified</div>
        </div>
        {users.map((user, index) => (
          <div key={user.id}>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.lastName}</div>
            <div>{user.email}</div>
            <div>
              {user.role === "ADMIN" ? (
                <div>{user.role}</div>
              ) : (
                <>
                  <select
                    defaultValue={user.role}
                    onChange={(e) => handleRoleChange(e, index)}
                  >
                    <option value="USER">User</option>
                    <option value="MANAGER">MANAGER</option>
                  </select>
                  <StyledUpdateRolePopup
                    displayvalue={
                      index === updatingUser.index ? "block" : "none"
                    }
                  >
                    <p>Are you sure?</p>
                    <button onClick={updateUserStatus}>Yes</button>
                    <button
                      onClick={() =>
                        setUpdatingUser({ index: -1, status: "USER" })
                      }
                    >
                      No
                    </button>
                  </StyledUpdateRolePopup>
                </>
              )}
            </div>
            <div>{user.verified ? "yes" : "no"}</div>
          </div>
        ))}
      </StyledTable>
    </StyledPeople>
  );
};

export default People;
