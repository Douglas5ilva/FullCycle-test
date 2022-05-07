import './App.css';
import React, { useState } from 'react'
import axios from 'axios'
import Progress from './ProgresBar';


function Home() {

    const [files, setFiles] = useState('')
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        if(files){
            setModal(!modal)
        }  
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    async function UpLoad(e) {
        e.preventDefault()

       
        const formatData = new FormData()
        formatData.append('image', files)

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        await axios.post('http://localhost:3001/upload', formatData, headers).then(res => {
            if (res) {
                console.log('Ok')
            }
            if (!res) {
                console.log('error')
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="App">
            <form onSubmit={UpLoad}>
                <input
                type='file' 
                name='file' 
                onChange={e => { setFiles(e.target.files[0]) }} />
                <button type='submit' onClick={toggleModal}>enviar</button>
            </form>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Progress/>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>
                </div>
            )}

            

        </div>
    );
}

export default Home;
