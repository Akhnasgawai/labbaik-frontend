import React, { useState } from "react";
import Input from "../../components/Input/Input";
import SelectField from "../../components/SelectField/SelectField";
import userTypes from "../../data/TypeOfUser";
import Button from "../../components/Button/Button";

const AddUsers = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    user_type: "",
  });
  const handleCancel = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      user_type: "",
    });
  };

  const handleSubmit = () => {
    alert(JSON.stringify(user, null, 2));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserChange = (selectedOption) => {
    setUser((prev) => ({
      ...prev,
      user_type: selectedOption.value,
    }));
  };

  return (
    <div className="container m-2 p-4 px-4 pe-5">
      <div className="row mb-2 p-0">
        <div className="col-md m-1 me-4 p-0">
          <Input
            label="Name"
            placeholder="Enter Your Name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md m-1 p-0">
          <Input
            label="Email"
            placeholder="Enter Your Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-4 p-0">
        <div className="col-md m-1 me-4 p-0">
          <Input
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md m-1 p-0">
          <SelectField
            label="Type of User"
            options={userTypes}
            value={user.user_type}
            onChange={handleUserChange}
          />
        </div>
      </div>

      <div className="row gap-4">
        <div className="col p-0">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
        <div className="col p-0">
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
