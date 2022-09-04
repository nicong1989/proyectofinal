import React, { useState } from "react";

import Box from "@mui/material/Box";
import { MdClose } from "react-icons/md";

export default function Layout() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Box
      sx={{
        backgroundColor: "#2c5364",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {showAlert ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          role="alert"
        >
          <strong>Nuevas Ofertas!</strong>
          <span>
            {"     "}
            Suscribite a nuestro NEWSLETTER y recibi las mejores ofertas!
          </span>
         
            <MdClose
              sx={{ marginLeft: "30px" }}
              onClick={() => setShowAlert(false)}
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
            </MdClose>
         
        </Box>
      ) : null}
    </Box>
  );
}
