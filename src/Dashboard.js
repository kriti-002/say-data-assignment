import React, { useState, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
  Typography,
  Grid,
  Card,
  AppBar,
  Toolbar,
  InputBase,
  CardMedia,
  CardContent,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  TextField,
  Avatar,
  Badge
} from "@mui/material";
import RocketIcon from "@mui/icons-material/Rocket";
import TextIcon from "@mui/icons-material/TextFormat";
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LinkIcon from "@mui/icons-material/Link";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Dashboard() {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Item 1",
      type: "T1",
      duration: "d1",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    },
    {
      id: 2,
      name: "Item 2",
      type: "T2",
      duration: "d2",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    },
    {
      id: 3,
      name: "Item 3",
      type: "t3",
      duration: "d3",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    },
    {
      id: 4,
      name: "Item 3",
      type: "t3",
      duration: "d3",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    },
    {
      id: 5,
      name: "Item 3",
      type: "t3",
      duration: "d3",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    },
    {
      id: 6,
      name: "Item 3",
      type: "t3",
      duration: "d3",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    },
    {
      id: 7,
      name: "Item 3",
      type: "t3",
      duration: "d3",
      dateCreated: "s",
      lastUpdated: "ss",
      action: "",
      selected: false
    }
  ]);

  const handleCheckboxChange = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) => {
        if (row.id === id) {
          return { ...row, selected: !row.selected };
        }
        return row;
      })
    );
  };
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);
  const [importLink, setImportLink] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleImportLinkChange = (event) => {
    setImportLink(event.target.value);
  };

  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelected = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <Grid>
      <Grid container>
        <Grid item sm={2} xs={4}>
          <Paper elevation={3}>
            <List>
              <Typography
                variant="h6"
                sx={{ color: "blue", fontSize: "30px", marginLeft: "8%" }}
              >
                abc firm
              </Typography>
              <ListItem
                button
                selected={activeItem === "Home"}
                onClick={() => handleItemClick("Home")}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button
                selected={activeItem === "All Files"}
                onClick={() => handleItemClick("All Files")}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary="All Files" />
              </ListItem>
              <ListItem
                button
                selected={activeItem === "Saved"}
                onClick={() => handleItemClick("Saved")}
              >
                <ListItemIcon>
                  <SaveIcon />
                </ListItemIcon>
                <ListItemText primary="Saved" />
              </ListItem>
              <ListItem
                button
                selected={activeItem === "Integrations"}
                onClick={() => handleItemClick("Integrations")}
              >
                <ListItemIcon>
                  <LinkIcon />
                </ListItemIcon>
                <ListItemText primary="Integrations" />
              </ListItem>
              <ListItem
                button
                selected={activeItem === "Trash"}
                onClick={() => handleItemClick("Trash")}
              >
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem
                button
                selected={activeItem === "Settings"}
                onClick={() => handleItemClick("Settings")}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem
                button
                selected={activeItem === "Help and Support"}
                onClick={() => handleItemClick("Help and Support")}
              >
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText primary="Help and Support" />
              </ListItem>
            </List>
            <Box sx={{ padding: "36px" }}></Box>
            <Box sx={{ backgroundColor: "lightblue" }}>
              <Box textAlign="center">
                <RocketIcon
                  color="primary"
                  fontSize="large"
                  sx={{ marginTop: "4%", marginBottom: "-2%" }}
                />
                <Box textAlign="center" p={2}>
                  <Typography variant="h5">Upgrade Account</Typography>
                  <Typography variant="body1">
                    Access to Unlimited Transcription
                  </Typography>
                  <Button variant="contained" color="primary">
                    Upgrade Account
                  </Button>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={10} xs={8}>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <div
                style={{
                  width: "60%",
                  backgroundColor: "lightgray",
                  borderRadius: "5px"
                }}
              >
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 10,
                      transform: "translateY(-50%)"
                    }}
                  >
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search..."
                    fullWidth
                    inputProps={{ style: { paddingLeft: "2rem" } }}
                  />
                </div>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <IconButton color="inherit">
                  <Badge badgeContent={3} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                <IconButton color="inherit">
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <Grid>
            <Paper sx={{ backgroundColor: "lightgray" }}>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={8}>
                  <Typography variant="h3" sx={{ fontSize: "30px" }}>
                    Welcome Shakirat
                  </Typography>
                  <Typography variant="h6">
                    Upload your photo and video to Convert to text
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleClickOpen}
                    >
                      Transcribe File
                    </Button>
                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>
                        Transcribe File
                        <IconButton
                          edge="end"
                          color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        >
                          <CloseIcon />
                        </IconButton>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          <FormControl
                            variant="outlined"
                            fullWidth
                            sx={{ marginTop: "1%", marginBottom: "2%" }}
                          >
                            <InputLabel>Transcription Language</InputLabel>
                            <Select
                              value={selectedOption}
                              onChange={handleSelectChange}
                              label="Select an option"
                            >
                              <MenuItem value="Default">Default</MenuItem>
                              <MenuItem value="Option 1">Option 1</MenuItem>
                              <MenuItem value="Option 2">Option 2</MenuItem>
                            </Select>
                          </FormControl>

                          <div
                            style={{
                              border: "1px solid blue",
                              padding: "6%",
                              textAlign: "center"
                            }}
                          >
                            <input
                              type="file"
                              accept="image/*, video/*"
                              ref={fileInputRef}
                              onChange={handleFileSelected}
                              style={{ display: "none" }}
                            />
                            <Button
                              variant="contained"
                              color="primary"
                              component="span"
                              onClick={handleFileUpload}
                              startIcon={<CloudUploadIcon />}
                            >
                              Upload File
                            </Button>

                            <Typography
                              variant="body2"
                              color="textSecondary"
                              sx={{ marginTop: "4%" }}
                            >
                              Supported formats: JPG, JPEG, PNG, GIF, MP4, AVI
                            </Typography>
                          </div>

                          <TextField
                            label="Import from Link"
                            variant="outlined"
                            fullWidth
                            value={importLink}
                            onChange={handleImportLinkChange}
                            sx={{ marginTop: "4%", marginBottom: "4%" }}
                          />
                          <FormGroup>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={isChecked}
                                  onChange={handleCheckboxChange}
                                  name="check"
                                />
                              }
                              label="Speaker Identification"
                            />
                          </FormGroup>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleClose}
                          color="primary"
                          disabled
                          variant="contained"
                        >
                          Transcribe file
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </Grid>
                <Grid
                  container
                  spacing={3}
                  sx={{ padding: "2%", paddingBottom: "0" }}
                >
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component={FolderIcon}
                        sx={{
                          margin: "4%",
                          border: "1px solid black",
                          borderRadius: "20px",
                          padding: "1%"
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6">100</Typography>
                        <Typography>Uploaded Files</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component={TextIcon}
                        sx={{
                          margin: "4%",
                          border: "1px solid black",
                          borderRadius: "20px",
                          padding: "1%"
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6">50</Typography>
                        <Typography>Transcribed</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card>
                      <CardMedia
                        component={SaveIcon}
                        sx={{
                          margin: "4%",
                          border: "1px solid black",
                          borderRadius: "20px",
                          padding: "1%"
                        }}
                      />
                      <CardContent>
                        <Typography variant="h6">20</Typography>
                        <Typography>Saved</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <TableContainer
                component={Paper}
                sx={{ width: "90%", margin: "4%" }}
              >
                <Typography variant="h5" sx={{ padding: "2%" }}>
                  Recent Files
                </Typography>
                <hr style={{ marginBottom: "2%" }} />
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "lightblue" }}>
                      <TableCell>
                        <Checkbox
                          indeterminate={
                            rows.some((row) => row.selected) &&
                            !rows.every((row) => row.selected)
                          }
                          checked={rows.every((row) => row.selected)}
                          onChange={() => {
                            const allSelected = rows.every(
                              (row) => row.selected
                            );
                            setRows((prevRows) =>
                              prevRows.map((row) => ({
                                ...row,
                                selected: !allSelected
                              }))
                            );
                          }}
                        />
                      </TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Duration</TableCell>
                      <TableCell>Date Created</TableCell>
                      <TableCell>Last Updated</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Checkbox
                            checked={row.selected}
                            onChange={() => handleCheckboxChange(row.id)}
                          />
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.type}</TableCell>
                        <TableCell>{row.duration}</TableCell>
                        <TableCell>{row.dateCreated}</TableCell>
                        <TableCell>{row.lastUpdated}</TableCell>
                        <TableCell>{row.action}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
