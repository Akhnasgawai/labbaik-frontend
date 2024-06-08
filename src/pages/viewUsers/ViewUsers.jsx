import React from "react";
import TableView from "../../components/Table/TableView";

const ViewUsers = () => {
  const memberlist = [
    {
      name: { content: "Michael Desai", isIcon: false },
      email: { content: "Johnson@gmail.com", isIcon: false },
      type: { content: "Administrator", isIcon: false },
      joining_date: { content: "24-09-2024", isIcon: false },
    },
    {
      name: { content: "John Doe", isIcon: false },
      email: { content: "Desai@gmail.com", isIcon: false },
      type: { content: "Ordinary User", isIcon: false },
      joining_date: { content: "9-06-2014", isIcon: false },
    },
    {
      name: { content: "Akhnas Gawai", isIcon: false },
      email: { content: "akhnas@gmail.com", isIcon: false },
      type: { content: "Ordinary User", isIcon: false },
      joining_date: { content: "08-12-2024", isIcon: false },
    },
    {
      name: { content: "Michael Desai", isIcon: false },
      email: { content: "Administrator", isIcon: false },
      type: { content: "Administrator", isIcon: false },
      joining_date: { content: "07-09-2024", isIcon: false },
    },
  ];
  const tableHeadings = [
    "Name",
    "Email",
    "Type of User",
    "Joining Date",
    "Action",
  ];

  const actions = [
    {
      label: "Disable",
      type: "button",
      className: "btn-danger",
      onClick: (member) => console.log("View", member),
    },
  ];
  return (
    <div>
      <TableView
        memberlist={memberlist}
        tableHeadings={tableHeadings}
        actions={actions}
      />
    </div>
  );
};

export default ViewUsers;
