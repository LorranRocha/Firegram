import React, { useState } from 'react'
import ProgressBar from './progressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const types = ['image/png', 'image/jpeg', 'image/gif', 'image/svg', 'image/webp']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Favor selecionar um arquivo de imagem (png, jpeg, gif ou svg)');
        }
    }


    return (
        <form>
            <label>
            <input type='file' onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className='output'>
                { error && <div className='error'>{ error }</div> }
                
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    );
}

export default UploadForm;
