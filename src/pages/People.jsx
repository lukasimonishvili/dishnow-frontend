import Styled from "styled-components";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const mockUserData = [
      {
        id: 1,
        name: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        role: "USER",
        verified: true,
      },
      {
        id: 2,
        name: "Jane",
        lastName: "Smith",
        email: "janesmith@example.com",
        role: "ADMIN",
        verified: true,
      },
      {
        id: 3,
        name: "Michael",
        lastName: "Brown",
        email: "michaelbrown@example.com",
        role: "USER",
        verified: false,
      },
      {
        id: 4,
        name: "Emily",
        lastName: "Johnson",
        email: "emilyjohnson@example.com",
        role: "MODERATOR",
        verified: true,
      },
      {
        id: 5,
        name: "David",
        lastName: "Williams",
        email: "davidwilliams@example.com",
        role: "USER",
        verified: true,
      },
      {
        id: 6,
        name: "Sarah",
        lastName: "Davis",
        email: "sarahdavis@example.com",
        role: "ADMIN",
        verified: false,
      },
      {
        id: 7,
        name: "Daniel",
        lastName: "Miller",
        email: "danielmiller@example.com",
        role: "USER",
        verified: true,
      },
      {
        id: 8,
        name: "Olivia",
        lastName: "Wilson",
        email: "oliviawilson@example.com",
        role: "MODERATOR",
        verified: false,
      },
      {
        id: 9,
        name: "James",
        lastName: "Taylor",
        email: "jamestaylor@example.com",
        role: "ADMIN",
        verified: true,
      },
      {
        id: 10,
        name: "Sophia",
        lastName: "Anderson",
        email: "sophiaanderson@example.com",
        role: "USER",
        verified: false,
      },
    ];

    setUsers(mockUserData);
  }, []);

  const handleRoleChange = (e, index) => {
    setUpdatingUser({ index, status: e.target.value });
  };

  const updateUserStatus = () => {
    const userToUpdateId = users[updatingUser.index].id;
    console.log(
      "we are about to change user by id " +
        userToUpdateId +
        " to status " +
        updatingUser.status
    );
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
              <select
                defaultValue={user.role}
                onChange={(e) => handleRoleChange(e, index)}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="MODERATOR">Moderator</option>
              </select>
              <StyledUpdateRolePopup
                displayvalue={index === updatingUser.index ? "block" : "none"}
              >
                <p>Are you sure?</p>
                <button onClick={updateUserStatus}>Yes</button>
                <button
                  onClick={() => setUpdatingUser({ index: -1, status: "USER" })}
                >
                  No
                </button>
              </StyledUpdateRolePopup>
            </div>
            <div>{user.verified ? "yes" : "no"}</div>
          </div>
        ))}
      </StyledTable>
    </StyledPeople>
  );
};

export default People;
