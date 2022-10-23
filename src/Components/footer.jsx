import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default function images() {
    return (
        <div style={{backgroundColor:'grey',height:'400px'}}>
            <div className='row'>

                <div className='col-md-4'>
                    <div className='row'>
                        <div className='col-md-6'><h1 style={{paddingLeft:'70px',paddingTop:'200px'}}>Habour</h1></div>
                        <div className='col-md-6' style={{paddingTop:'210px',fontSize:'18px'}}>© 2015 Privacy policy</div>
                    </div>
                </div>

                <div className='col-md-8'>
                <img
                    className="d-block"
                    src="https://toomanyadapters.com/wp-content/uploads/2014/10/London-Google-Maps.jpg"
                    alt="Image One" style={{height:'200px',width:'1100px',paddingLeft:'300px',marginTop:'100px',paddingRight:'100px'}}
                />
                </div>
                
            

        </div>
        </div>
    );
}