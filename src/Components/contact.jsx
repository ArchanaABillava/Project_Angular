import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function imagecard() {
    return (
        <div className='row' style={{backgroundColor:'darkgrey'}}>

            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-5'>
                    
                     <img
                    className="d-block w-100"
                    src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-location.png"
                    alt="Image One" style={{height:'100px',width:'100px',marginTop:'80px',marginBottom:'80px',paddingLeft:'80px'}} />
                     
                    </div>
                    <div className='col-md-7' style={{marginTop:'80px',marginBottom:'80px',fontSize:'24px',paddingLeft:'30px',color:'whitesmoke'}}>NEW YORK 9870 ST VINCENT GLASGOW</div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-5'>
                    
                     <img
                    className="d-block w-100"
                    src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-mail.png"
                    alt="Image One" style={{height:'100px',width:'100px',marginTop:'80px',marginBottom:'80px',paddingLeft:'80px'}} />
                     
                    </div>
                    <div className='col-md-7' style={{marginTop:'80px',marginBottom:'80px',fontSize:'24px',paddingLeft:'30px',color:'whitesmoke'}}>CONTACT@DEMOLINK.ORG</div>
                </div>
            </div>

            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-5'>
                    
                     <img
                    className="d-block w-100"
                    src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-phone.png"
                    alt="Image One" style={{height:'100px',width:'100px',marginTop:'80px',marginBottom:'80px',paddingLeft:'80px'}} />
                     
                    </div>
                    <div className='col-md-7' style={{marginTop:'80px',marginBottom:'80px',fontSize:'24px',paddingLeft:'30px',color:'whitesmoke'}}>CALL US: +1 800 603 6035</div>
                </div>
            </div>

            
        </div>
    );
}