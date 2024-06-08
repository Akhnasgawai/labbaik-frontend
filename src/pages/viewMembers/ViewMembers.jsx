import React, { useEffect, useState } from "react";
import TableView from "../../components/Table/TableView";
import { BadgeCheck, BadgeX, Check, Pencil, Trash2, X } from "lucide-react";

const ViewMembers = () => {
  const [memberlist, setMemberList] = useState([]);
  const response = [
    {
      id: "99cfeee6-5836-458a-a9d1-bf2951228352",
      name: "mohammed akhnas",
      father_name: "mohammed ayyub gawai",
      surname: "gawai",
      house_name: "gawai house",
      education: "B.E",
      profession: "Software Engineer",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: false,
      voter_id: true,
      health_card: false,
      anjuman_member: false,
      tanzeem_member: false,
      is_deleted: false,
    },
    {
      id: "be4c9ed3-e8ab-49d1-b5d6-786c21f914c3",
      name: "Mohammed Yunus",
      father_name: "Mohammed",
      surname: "ruknuddin",
      house_name: "Ruknuddin House",
      education: "10",
      profession: "Businessman",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
      is_deleted: false,
    },
    {
      name: "Michael Desai",
      father_name: "Robert",
      surname: "Johnson",
      house_name: "Ruknuddin House",
      education: "Bachelor's Degree",
      profession: "Engineer",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Emily",
      father_name: "James",
      surname: "Smith Desai",
      house_name: "Ruknuddin House",
      education: "Master's Degree",
      profession: "Teacher",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "David",
      father_name: "William",
      surname: "Brown",
      house_name: "Ruknuddin House",
      education: "Ph.D.",
      profession: "Scientist",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Sarah",
      father_name: "Charles",
      surname: "Williams",
      house_name: "Ruknuddin House",
      education: "Bachelor's Degree",
      profession: "Doctor",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Chris",
      father_name: "George",
      surname: "Jones",
      house_name: "Ruknuddin House",
      education: "Vocational Training",
      profession: "Artist",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Jane",
      father_name: "Thomas",
      surname: "Davis",
      house_name: "Thomas House",
      education: "Associate Degree",
      profession: "Lawyer",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      id: "99cfeee6-5836-458a-a9d1-bf2951228352",
      name: "mohammed akhnas",
      father_name: "mohammed ayyub gawai",
      surname: "gawai",
      house_name: "gawai house",
      education: "B.E",
      profession: "Software Engineer",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: false,
      voter_id: true,
      health_card: false,
      anjuman_member: false,
      tanzeem_member: false,
      is_deleted: false,
    },
    {
      id: "be4c9ed3-e8ab-49d1-b5d6-786c21f914c3",
      name: "Mohammed Yunus",
      father_name: "Mohammed",
      surname: "ruknuddin",
      house_name: "Ruknuddin House",
      education: "10",
      profession: "Businessman",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
      is_deleted: false,
    },
    {
      name: "Michael Desai",
      father_name: "Robert",
      surname: "Johnson",
      house_name: "Ruknuddin House",
      education: "Bachelor's Degree",
      profession: "Engineer",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Emily",
      father_name: "James",
      surname: "Smith Desai",
      house_name: "Ruknuddin House",
      education: "Master's Degree",
      profession: "Teacher",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "David",
      father_name: "William",
      surname: "Brown",
      house_name: "Ruknuddin House",
      education: "Ph.D.",
      profession: "Scientist",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Sarah",
      father_name: "Charles",
      surname: "Williams",
      house_name: "Ruknuddin House",
      education: "Bachelor's Degree",
      profession: "Doctor",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Chris",
      father_name: "George",
      surname: "Jones",
      house_name: "Ruknuddin House",
      education: "Vocational Training",
      profession: "Artist",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
    {
      name: "Jane",
      father_name: "Thomas",
      surname: "Davis",
      house_name: "Thomas House",
      education: "Associate Degree",
      profession: "Lawyer",
      address: "Bhatkal",
      birth_certificate: true,
      aadhar_card: true,
      ration_card: true,
      voter_id: true,
      health_card: false,
      anjuman_member: true,
      tanzeem_member: false,
    },
  ];

  const transformData = (response) => {
    return response.map((item) => {
      const transformedItem = {};

      Object.keys(item).forEach((key) => {
        if (key !== "id" && key !== "is_deleted") {
          if (typeof item[key] === "boolean") {
            transformedItem[key] = {
              content: item[key] ? (
                <BadgeCheck color="#39bd4b" />
              ) : (
                <BadgeX color="#e94e4e" />
              ),
              isIcon: true,
            };
          } else {
            transformedItem[key] = {
              content: item[key],
              isIcon: false,
            };
          }
        }
      });

      return transformedItem;
    });
  };

  useEffect(() => {
    const data = transformData(response);
    setMemberList(data);
  }, []);

  const tableHeadings = [
    "Name",
    "Father Name",
    "Surname",
    "House Name",
    "Education",
    "Profession",
    "Address",
    "Birth Certificate",
    "Adhar Card",
    "Ration Card",
    "Voter ID",
    "Health Card",
    "Anjuman Member",
    "Tanzeem Member",
    "Edit",
    "Delete",
    "View",
  ];

  const actions = [
    {
      label: "Edit",
      type: "icon",
      icon: <Pencil color="#0b95fe" strokeWidth={1.3} />,
      onClick: (member) => console.log("Edit", member),
    },
    {
      label: "Delete",
      type: "icon",
      icon: <Trash2 color="#fe0b0b" strokeWidth={1.3} />,
      onClick: (member) => console.log("Delete", member),
    },
    {
      label: "View",
      type: "button",
      className: "btn-primary",
      onClick: (member) => console.log("View", member),
    },
  ];
  return (
    <div className="m-0 p-0">
      <TableView
        memberlist={memberlist}
        tableHeadings={tableHeadings}
        actions={actions}
      />
    </div>
  );
};

export default ViewMembers;
