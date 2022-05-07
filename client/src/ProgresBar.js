import React, { useState } from 'react';


function ProgresBar() {


    const [progress, setProgress] = useState(45);

        setInterval(() => {
            setProgress(+ 100 )
        }, 1000);

    return (
        <div className="m-5">
            <div className="progress w-50" style={{ height: 30 }}>
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progress + 35}px`, height: '20px', background: 'green'}}>{progress} %</div>
            </div>
        </div>
    );


}

export default ProgresBar;