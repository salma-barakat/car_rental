import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { url } from '../conf';
import { TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
export default function EditCarInfo() {
    const history = useNavigate();
    const { id } = useParams();
    const { Userid } = useParams();
    const [data, setData] = useState({});
    const [row, setRow] = useState([]);
    const [img, setImg] = useState("");
    const [make, setMake] = useState("")
    const [price, setPrice] = useState("")
    const [model, setModel] = useState("")
    const [inputs, setInputs] = useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [modalMsg, setModalMsg] = React.useState({});
    const handleClose = () => { setOpenModal(false); history('/admin')}

    console.log(id);
    console.log(inputs);
    const handleSubmit = async (event) => {

        event.preventDefault();
        const headers = { 'Access-control-Allow-Origin': '*' }
        const formData = {
            ...inputs
        }
        // if(!inputs.plate_id || !inputs.color ||! inputs.engineCapacity || !inputs.isAvailable|| !inputs.make ||
        //   !inputs.model || !inputs.year ||! inputs.price || !inputs.imgURL|| !inputs.car_location ||
        //   !inputs.carDescription || !inputs.car_status  ){

        //   setOpenModal(true);
        //   setModalMsg({title:'Error' , msg:'Enter all required data.'});

        // }  else{
        await axios.put(url + `api/admin.php/Edit/${id}`, formData, { headers })
            .then(res => {
                console.log(res.data)
                if (res.data.status == 0) {
                    setOpenModal(true);
                    setModalMsg({ title: 'Error', msg: 'user registered before' });
                } else if (res.data.status == 1) {
                    setOpenModal(true);
                    setModalMsg({ title: 'Congrats', msg: 'Registered successfully' });
                    // setRedirect({stat:true,msg:res.data.msg});

                    console.log(res.data)
                }
            }
            )
            .catch(function (error) {
                console.log(error)
            });
    }
    const handleDelete = async (event) => {

        event.preventDefault();
        const headers = { 'Access-control-Allow-Origin': '*' }
        const formData = {
            ...inputs
        }
        await axios.delete(url + `api/admin.php/Edit/${id}`, formData, { headers })
            .then(res => {
                console.log(res.data)
                if (res.data.status == 0) {
                    setOpenModal(true);
                    setModalMsg({ title: 'Error', msg: 'user registered before' });
                } else if (res.data.status == 1) {
                    setOpenModal(true);
                    setModalMsg({ title: 'Congrats', msg: 'Deleted successfully' });
                    // setRedirect({stat:true,msg:res.data.msg});
                    console.log(res.data)
                }
            }
            )
            .catch(function (error) {
                console.log(error)
            });
    }
    // }
    const buttonNavig = () => {
        if (Userid) {
            //     // form
            //     history(window.location.pathname + "/reserve");
            // }
            // else {
            //     history("/Log-In");
        }

    }
    console.log(inputs);
    useEffect(() => {
        setData({});
        setRow([]);

        // console.log("herereeeeeeeeeeeeeeeeeeee")
        axios({
            method: 'GET',
            url: url + `api/admin.php/${id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log(response)
                setData(response.data);
                setInputs(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);
    useEffect(() => {
        for (var key in data) {
            if (key != "img") {
                if (key == "make") {
                    setMake(data[key])
                }
                if (key == "price") {
                    setPrice(data[key])
                }
                if (key == "model") {
                    setModel(data[key])
                }
                let x = { prop: key, ava: data[key] }
                console.log({ prop: key, ava: data[key] });
                setRow(c => [...c, x])
            }
            else setImg(data[key]);
        }
    }, [data])
    // console.log(info);
    console.log(row);
    return (
        <Container>
            <h3><span>{make} </span>{model} <span></span><span>{price} </span></h3>
            <CardMedia
                sx={{ height: { md: '500px', xs: "auto" } }}
                component="img"
                image={img}
            />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">property</TableCell>
                            <TableCell align="center">Avaliability</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row && row.map(({ prop, ava }, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center" >{prop}</TableCell>
                                {[prop] != 'plate_id' && <TableCell align="center"> <TextField defaultValue={ava} onChange={e => { setInputs({ ...inputs, [prop]: e.target.value }) }}></TextField></TableCell>}
                                {[prop] == 'plate_id' && <TableCell align="center" >{ava}</TableCell>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={handleSubmit} >
                {/* {(Userid) ? "Reserve" : "LogIn first"} */}
                Edit
            </Button>
            <Button variant="contained" onClick={handleDelete} >
                {/* {(Userid) ? "Reserve" : "LogIn first"} */}
                Delete
            </Button>
            {openModal && <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {modalMsg.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalMsg.msg}
                    </Typography>
                </Box>
            </Modal>
            }
        </Container>
    );

}