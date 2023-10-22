import React, { useState } from "react";
import { FaUmbrellaBeach } from "react-icons/fa";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./styles.css";
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
  };
  
function Filter({ selectedFilter, setSelectedFilter }) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const filters = [
		{ label: "House", icon: <FaUmbrellaBeach /> },
		{ label: "Apartments", icon: <FaUmbrellaBeach /> },
		{ label: "Lake Front", icon: <FaUmbrellaBeach /> },
		{ label: "Beach Front", icon: <FaUmbrellaBeach /> },
		{ label: "House", icon: <FaUmbrellaBeach /> },
		{ label: "Apartments", icon: <FaUmbrellaBeach /> },
		{ label: "Lake Front", icon: <FaUmbrellaBeach /> },
		{ label: "Beach Front", icon: <FaUmbrellaBeach /> }, 
		{ label: "House", icon: <FaUmbrellaBeach /> },
		{ label: "Apartments", icon: <FaUmbrellaBeach /> },
		{ label: "Lake Front", icon: <FaUmbrellaBeach /> },
		{ label: "Beach Front", icon: <FaUmbrellaBeach /> }, 
	];
  return (
	<div className="filters-container">
		<div className="filter-div">
		{filters.map((item, i) => (
			<div
			key={i}
			className={`links-box ${i == selectedFilter && "selected-box"}`}
			onClick={() => {
				console.log("selecting key", i);
				setSelectedFilter(i);
			}}
			>
			{item.icon}
			<p
				className={`links-label ${i == selectedFilter && "selected-label"}`}
			>
				{item.label}
			</p>
			</div>
		))}
		</div>
		<div className="search-div">
			Search
			<div className="search-button" onClick={handleOpen}>
          		<SearchRoundedIcon className="search-icon" />
			</div>
        </div>
		<Modal
		open={open}
		onClose={handleClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
				Text in a modal
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
				Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
		
	</div>
  );
}

export default Filter;
