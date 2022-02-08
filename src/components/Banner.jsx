import React from 'react';
import '../css/banner.css';

function Banner() {
    return (
        <div className='banner' style={{backgroundImage:`url('https://wallpaperaccess.com/full/712422.jpg')`,backgroundPosition:'center',backgroundSize:'cover'}}>
            <div className="banner__content">
                <h1 className='banner__title'>Movie Name</h1>
                <div className="banner__buttons">
                    <button>Play</button> 
                    <button>My List</button> 
                </div>
                <div className="banner__description">
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit possimus sapiente ratione quod asperiores culpa aliquid cumque corporis obcaecati suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit possimus sapiente ratione quod asperiores culpa aliquid cumque corporis obcaecati suscipit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit possimus sapiente ratione quod asperiores culpa aliquid cumque corporis obcaecati suscipit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
