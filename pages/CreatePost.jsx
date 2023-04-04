import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const navigate = useNavigate();
  const ingRef = useRef(null)
  const inName = useRef(null)
  const [state, setstate] = useState();
  const [form, setForm] = useState({
    name: '',
    prompt: 'aef',
    photo: '',
  });
  const getanh = async () => {
    console.log(form.photo)
    await axios.get(`https://ai-imgssss.onrender.com/api/v1/post`)
      .then(response => {
        setstate(JSON.stringify(response.data))
      })
      .catch(error => console.log(error));
  }
  const postanh = async () => {

    try {
      const response = await fetch('https://ai-imgssss.onrender.com/api/v1/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...form }),
      });

      await response.json();
      alert('Success');

      navigate('/');
    } catch (err) {
      alert(err);
    }
  }
  const layanh = () => {
    const file = ingRef.current.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setstate(reader.result)
      setForm(prevState => ({
        ...prevState,
        photo: reader.result
      }));
      // console.log(form.photo);
      // Do something with the result, like set it to state
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const getname = () => {
    console.log(form.name)
    setForm(prevState => ({
      ...prevState,
      name: inName.current.value
    }));
  }
  return (
    <div>
      <div>Tên ảnh</div>
      <input type="text" onChange={getname} ref={inName} value={form.name} />
      <br />
      <label htmlFor="input-file">Chọn ảnh:</label> <br />
      <input type="file" id="input-file" ref={ingRef} onChange={layanh} />
      <br />
      {form.name !== '' && form.photo ?
        <button onClick={postanh}>Đăng ảnh</button>
        :
        <div></div>
      }
      {state &&
        <img src={state} alt="" />
      }

    </div>
  )
}

export default CreatePost