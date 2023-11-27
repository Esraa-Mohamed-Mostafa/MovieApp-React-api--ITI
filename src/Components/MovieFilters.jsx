import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container } from 'react-bootstrap';
import './Movie/Movie.css';

const MovieFilters = ({ handleSearch, handelType }) => {
    return (
        <div className="p-5 mb-5">
            <Container>
                <div className="d-flex justify-content-between mt-5 align-items-center searchflex">
                    <div className="searchstyle">
                        <TextField
                            fullWidth
                            id="standard-basic"
                            variant="standard"
                            placeholder="Find movies tv shows documentary and more ..."
                            onChange={(e) => handleSearch(e.target.value)}
                            InputProps={{
                                startAdornment: <SearchIcon position="start" />,
                            }}
                        />
                    </div>

                    <div className="selectstyle">
                        <FormControl sx={{ m: 0.1, minWidth: 120 }}>
                            <InputLabel>Media Type</InputLabel>
                            <Select autoWidth id="type" onChange={handelType}>
                                <MenuItem>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="movie">movie</MenuItem>
                                <MenuItem value="tv">tv</MenuItem>
                                <MenuItem value="person">person</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MovieFilters;
