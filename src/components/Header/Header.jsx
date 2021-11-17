import { ContactPhone } from "@mui/icons-material";
import { Toolbar, AppBar, Typography, Icon } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Phone book
        </Typography>
        <Icon color="inherit" sx={{ width: "60px", height: "60px" }}>
          <ContactPhone sx={{ width: "100%", height: "100%" }} />
        </Icon>
      </Toolbar>
    </AppBar>
  );
}
