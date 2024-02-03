import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../firebase/service/removeUSers";
import { columns } from "../../helpers/inputState/tableColumns";
import "./Table.css";

export const Table = ({ rows }) => {
  const dispatch = useDispatch();
  const [removedItem, setRemovedItem] = useState();
  const handleSelectionChange = (items) => {
    setRemovedItem(items);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowSelectionModelChange={handleSelectionChange}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

      <Button
        onClick={() => removeUser(removedItem, dispatch)}
        variant="contained"
        color="success"
      >
        Remove User
      </Button>
    </Box>
  );
};
