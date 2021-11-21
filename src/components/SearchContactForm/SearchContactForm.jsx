import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/phonebook';

import Stats from '../Stats';

import { InputBase, Typography, Box, Badge, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ContactPage from '@mui/icons-material/ContactPage';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchContactForm() {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  const changeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        maxWidth: '100%',
        backgroundColor: 'primary.dark',
        borderRadius: '5px',
        padding: '20px',
        marginTop: '30px',
        color: 'white',
      }}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Contacts list
      </Typography>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          type="search"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={filter}
          onChange={changeFilter}
        />
      </Search>

      <IconButton size="medium" color="inherit">
        <Badge badgeContent={<Stats />} color="error">
          <ContactPage />
        </Badge>
      </IconButton>
    </Box>
  );
}

export default SearchContactForm;
