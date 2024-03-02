// import React, { useState } from 'react'
import './contact.css'
const Contact = () => {

   
    

    return (
        <>
            <div className="contact-form" id="contact">
                <h1>Contat Me</h1>
                <form className="form">
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your First Name"
                            name='fname'
                            // value={fname}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Enter your Last Name"
                            name='lname'
                            // value={lname}
                            // onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            name='email'
                            // value={email}
                            // onChange={handleChange}
                        />
                    </div><br />
                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Enter your Phone number"
                            name='phoneNo'
                            // value={phoneNo}
                            // onChange={handleChange}
                        />
                    </div><br />
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Type of service you need "
                            // name='serviceType'
                            // value={serviceType}
                            // onChange={handleChange}
                        />
                    </div><br />
                    {/* <div className="form-group">
                        <p>If it being a website?Choose(Optional)</p>
                        <input type="checkbox" /> <label htmlFor>Portifolio Website</label><br />
                        <input type="checkbox" /> <label htmlFor>Mobile Application</label><br />
                        <input type="checkbox" /> <label htmlFor>Information Management System Design</label><br />
                        <input type="checkbox" /> <label htmlFor>Information System Audit</label>
                    </div><br /> */}
                    <div className="form-group">
                        <p>Additional Information</p>
                        <textarea 
                        name="description" 
                        // value={description} 
                        // onChange={handleChange} 
                        id cols={90} rows={10}
                         defaultValue={""}
                         />
                    </div><br />
                    <button type="submit">Send Enquiry</button>
                </form>
            </div>
        </>
    )


}

export default Contact