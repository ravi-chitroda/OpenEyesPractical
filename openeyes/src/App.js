import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    let hasError = false;
    let alphaRegex = /^[^\s][a-zA-Z0-9\s]+$/;
    let emailRegex = /\S+@\S+\.\S+/;
    let phoneRegex = /^\d{10}$/;
    if (name == "") {
      hasError = true;
      setNameError("Name is required");
    } else if (!alphaRegex.test(name)) {
      hasError = true;
      setNameError("Name must be only alphanumeric");
    } else {
      setNameError("");
    }

    if (email == "") {
      hasError = true;
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      hasError = true;
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }

    if (phoneNumber == "") {
      hasError = true;
      setPhoneNumberError("Phone number is required");
    } else if (!phoneRegex.test(phoneNumber)) {
      hasError = true;
      setPhoneNumberError("Not valid number");
    } else {
      setPhoneNumberError("");
    }

    if (!hasError) {
      setUsers([
        ...users,
        {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
        },
      ]);
    } else {
      alert("fail");
    }
  };
  // console.log("users", users);

  const handleRemoveButton = (index) => {
    // console.log("index", index);
    const newUsers = users.filter((user, i) => {
      return index !== i;
    });
    setUsers(newUsers);
  };

  return (
    <div className="App">
      <table>
        <tr>
          <td>Name</td>
          <td>
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>{nameError}</td>
        </tr>
        <tr>
          <td>Phone Number</td>
          <input
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <td>{phoneNumberError}</td>
        </tr>
        <tr>
          <td>Email</td>
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <td>{emailError}</td>
        </tr>
      </table>
      <button onClick={handleSubmit}>Add</button>
      <br />
      <br />
      <br />
      <table>
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {users.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td>
                <button
                  onClick={() => {
                    handleRemoveButton(index);
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
