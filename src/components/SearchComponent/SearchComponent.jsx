import React from "react";
import Input from "../Input/Input";
import SelectField from "../SelectField/SelectField";
import area from "../../data/Area";
import Button from "../../components/Button/Button";
const SearchComponent = () => {
  return (
    <div className="container px-4 pt-4  me-2">
      <div className="row m-1 mb-3">
        <div className="col-md-4">
          <Input
            label="Search By Name, Father Name"
            placeholder="Search By Name, Father Name or Surname"
          />
        </div>

        <div className="col-md-4">
          <Input label="Search By Address" placeholder="Search By Address" />
        </div>
        <div className="col-md-4">
          <SelectField options={area} label="Search By Area" />
        </div>
      </div>
      <div className="row m-1 mb-3 ">
        <div className="col-md-2">
          <SelectField
            options={[
              { value: "yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            label="Adhar Card"
          />
        </div>
        <div className="col-md-2">
          <SelectField
            options={[
              { value: "yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            label="Health Card"
          />
        </div>
        <div className="col-md-2">
          <SelectField
            options={[
              { value: "yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            label="Ration Card"
          />
        </div>
        <div className="col-md-2">
          <SelectField
            options={[
              { value: "yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            label="Voter ID"
          />
        </div>
        <div className="col-md-2">
          <SelectField
            options={[
              { value: "yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            label="Anjuman"
          />
        </div>
        <div className="col-md-2">
          <SelectField
            options={[
              { value: "yes", label: "Yes" },
              { value: "No", label: "No" },
            ]}
            label="Tanzeem"
          />
        </div>
      </div>
      <div className="row mb-0 m-1 gap-4">
      <div className="d-flex gap-4 justify-content-end">
        <button className="btn-secondary btn" >
          Cancel
        </button>
        <button className="btn-primary" >
          Submit
        </button>
      </div>
      </div>
    </div>
  );
};

export default SearchComponent;
