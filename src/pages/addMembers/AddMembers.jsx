import React, { useState } from "react";
import Input from "../../components/Input/Input";
import RadioButton from "../../components/RadioButton/RadioButton";
import SelectField from "../../components/SelectField/SelectField";
import areas from "../../data/Area";

const AddMembers = () => {
  const handleAreaChange = (selectedOption) => {
    setMemberData((prevData) => ({
      ...prevData,
      area: selectedOption.value,
    }));
  };

  const [memberData, setMemberData] = useState({
    name: "",
    father_name: " ",
    surname: "",
    house_name: "",
    education: "",
    profession: "",
    address: "",
    area: "",
    birth_certificate: "",
    aadhar_card: "",
    ration_card: "",
    health_card: "",
    voter_id: "",
    is_anjuman_member: "",
    is_tanzeem_member: "",
  });

  const handleOptionChange = (e) => {
    const { name, value } = e.target;

    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(memberData, null, 2));
  };

  const handleCancel = () => {
    setMemberData({
      name: "",
      father_name: " ",
      surname: "",
      house_name: "",
      education: "",
      profession: "",
      address: "",
      area: "",
      birth_certificate: "",
      aadhar_card: "",
      ration_card: "",
      health_card: "",
      voter_id: "",
      is_anjuman_member: "",
      is_tanzeem_member: "",
    });
  };
  return (
    <div className="container m-2 p-4 px-4 pe-5">
      <div className="row mb-2 p-0">
        <div className="col-md m-1 me-4 p-0">
          <Input
            label="Name"
            placeholder="Enter Name"
            value={memberData.name}
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md m-1 p-0">
          <Input
            label="Surname"
            placeholder="Enter Surname"
            name="surname"
            value={memberData.surname}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-2 p-0">
        <div className="col-md m-1 me-4 p-0">
          <Input
            label="Father Name"
            placeholder="Enter Father Name"
            name="father_name"
            value={memberData.father_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md m-1 p-0">
          <Input
            label="House Name"
            placeholder="Enter House Name"
            name="house_name"
            value={memberData.house_name}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-2 p-0">
        <div className="col-md m-1 me-4 p-0">
          <Input
            label="Education"
            placeholder="Enter Education"
            name="education"
            value={memberData.education}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md m-1 p-0">
          <Input
            label="Profession"
            placeholder="Enter Profession"
            name="profession"
            value={memberData.profession}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-2 p-0">
        <div className="col-md-8 m-1 me-4 p-0">
          <Input
            label="Address"
            placeholder="Enter Address"
            name="address"
            value={memberData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md m-1 p-0">
          <SelectField
            options={areas}
            label="Select Area"
            name="area"
            value={memberData.area}
            onChange={handleAreaChange}
          />
        </div>
      </div>
      <div className="row m-0 p-0">
        <div className="col-md-8 m-0 p-0">
          <RadioButton
            name="birth_certificate"
            value1="Yes"
            value2="No"
            label="Does He/She possess the Birth certificate?"
            checked={memberData.birth_certificate}
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-md-8 m-1 p-0">
          <RadioButton
            name="aadhar_card"
            value1="Yes"
            value2="No"
            checked={memberData.aadhar_card}
            label="Does He/She possess the Aadhar Card?"
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-md-8 m-1 p-0">
          <RadioButton
            name="ration_card"
            value1="Yes"
            value2="No"
            checked={memberData.ration_card}
            label="Does He/She possess the Ration Card?"
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-md-8 m-1 p-0">
          <RadioButton
            name="voter_id"
            value1="Yes"
            value2="No"
            checked={memberData.voter_id}
            label="Does He/She possess the Voter ID?"
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-md-8 m-1 p-0">
          <RadioButton
            name="health_card"
            value1="Yes"
            value2="No"
            checked={memberData.health_card}
            label="Does He/She possess the Health Card?"
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-md-8 m-1 p-0">
          <RadioButton
            name="is_anjuman_member"
            value1="Yes"
            value2="No"
            checked={memberData.is_anjuman_member}
            label="Is He/She a member of Anjuman?"
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="row m-0 p-0">
        <div className="col-md-8 m-0 p-0">
          <RadioButton
            name="is_tanzeem_member"
            value1="Yes"
            value2="No"
            checked={memberData.is_tanzeem_member}
            label="Is He/She a member of Tanzeem?"
            onChange={handleOptionChange}
          />
        </div>
      </div>

      <div className="d-flex gap-4 justify-content-end">
        <button className="btn-secondary btn" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddMembers;
