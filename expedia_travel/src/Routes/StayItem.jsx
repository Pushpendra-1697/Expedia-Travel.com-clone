import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';

const initState = {
    image_url: '',
    name: '',
    location: '',
    rating: '',
    price: '',
    isStatus: ''
}

const StayItem = ({ handleAddStays }) => {
    const [formData, setFormData] = useState(initState);


    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === 'checkbox' ? checked : value;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
        handleAddStays(formData);
        setFormData({ image_url: '', name: '', location: '', rating: '', price: '', isStatus: "" })
    }
    const { image_url, name, location, rating, price, isStatus } = formData;


    return (
        <>
            <Box w={"40%"} m="auto" border={"1px solid black"}>
                <form onSubmit={onSubmit}>
                    <label>Image url</label>
                    <Input w={"40%"} onChange={handleChange} type={"url"} name="image_url" value={image_url} placeholder='Hotel Image'></Input>
                    <br></br>
                    <br></br>
                    <label>Hotel Name</label>
                    <Input w={"40%"} onChange={handleChange} type={"text"} name="name" value={name} placeholder="Hotel Name"></Input>
                    <br></br>
                    <br></br>
                    <select w={"40%"} onChange={handleChange} name='location' value={location}>
                        <option value={''}>Select Location</option>
                        <option value={'Kanpur'}>Kanpur</option>
                        <option value={'Lucknow'}>Lucknow</option>
                        <option value={'Mumbai'}>Mumbai</option>
                        <option value={'New Delhi'}>New Delhi</option>
                        <option value={'Dubai'}>Dubai</option>
                        <option value={'Bengaluru'}>Bengaluru</option>
                        <option value={'Pune'}>Pune</option>
                    </select>
                    <br></br>
                    <br></br>
                    <label>Rating</label>
                    <Input w={"40%"} onChange={handleChange} type={"number"} name="rating" value={rating} placeholder='Rating'></Input>
                    <br></br>
                    <br></br>
                    <label>Price</label>
                    <Input w={"40%"} onChange={handleChange} type={"number"} name="price" value={price} placeholder='Price'></Input>
                    <br></br>
                    <br></br>
                    <label>Availability Status</label>
                    <input onChange={handleChange} type={"checkbox"} name="isStatus" checked={isStatus}></input>
                    <br></br>
                    <br></br>
                    <Input w={"40%"} type={"submit"} value="Add Product"></Input>
                </form>
            </Box>
        </>
    );
}

export default StayItem;