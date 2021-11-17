import { useState } from "react";

import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import PropTypes from "prop-types";

import actions from "redux/phonebook/phonebook-actions";

import { AccountCircle, AddIcCall, LocalPhone } from "@mui/icons-material";
import { Button, TextField, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (name, number) => dispatch(actions.addContact(name, number));

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    onSubmit(contact);

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Box sx={{ marginTop: "20px" }} component="form" onSubmit={handleSubmit}>
      <Tooltip title="Enter name" placement="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: 214,
            maxWidth: "100%",
            marginBottom: "15px",
          }}
        >
          <AccountCircle sx={{ color: "primary.dark", mr: 1, my: 0.5 }} />
          <TextField
            id="input-Name"
            label="Name"
            variant="standard"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Enter phone number" placement="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: 214,
            maxWidth: "100%",
            marginBottom: "15px",
          }}
        >
          <LocalPhone sx={{ color: "primary.dark", mr: 1, my: 0.5 }} />
          <TextField
            id="input-Phone"
            label="Phone"
            variant="standard"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Add contact" placement="left">
        <Button
          variant="contained"
          type="submit"
          startIcon={<AddIcCall />}
          sx={{
            marginBottom: "0px",
          }}
        >
          Add contact
        </Button>
      </Tooltip>
    </Box>
  );
}

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;
