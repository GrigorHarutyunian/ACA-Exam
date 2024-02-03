export const columns = [
  { field: "id", headerName: "ID", width: 300 },
  { field: "name", headerName: "First name", width: 300, editable: true },
  { field: "lastName", headerName: "Last name", width: 300, editable: true },
  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 300,
  },
  {
    field: "radioGroup",
    headerName: "gender",
    width: 300,
    editable: true,
  },
];
