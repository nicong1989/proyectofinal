import React, { useState } from "react";

import Box from "@mui/material/Box";
import { MdClose } from "react-icons/md";

export default function Layout() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <Box
      sx={{
        backgroundColor: "#a98f3b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "13px",
        wordSpacing: "7px",
      }}
    >
      {showAlert ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffff",
          }}
          role="alert"
        >
          <strong>Nuevas Ofertas!</strong>

          <span style={{ marginLeft: "10px" }}>
            Suscribite a nuestro NEWSLETTER y recibi las mejores ofertas!
          </span>

          <MdClose
            onClick={() => setShowAlert(false)}
            role="button"
            style={{
              color: "#ffff",
              marginLeft: "5px",
            }}
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
