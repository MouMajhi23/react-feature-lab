import { useState } from "react"

const MyForm = ()=>{
    const formBodyStyle = {
        display:"flex",
        ["background-color"]:"#ad9992",
        ["align-items"]:"center",
        ["justify-content"]:"center",
        ["flex-direction"]:"column",
        ["min-height"]:"100vh"
        
    }
    const headingStyle = {
        ["font-size"]:"24px",
        ["font-weight"]:"700",
        ["font-family"]:"math"
    } 
    const formStyle = {
        width:"40%",
        display:"flex",
        ["flex-direction"]:"column",
         gap:"20px",
         padding:"20px 20px"
    }
    const inputStyle = {
        border:"none",
        padding: "20px",
        ["box-shadow"]: "2px 5px #cfbfba"
    }
    const submitButtonStyle = {
        padding: "20px",
         ["background-color"]:"#8A9A8B",
        cursor: "pointer",
        opacity: 1
    }
    const disableButtonStyle = {
        ...submitButtonStyle,
        backgroundColor: "white",
        cursor: "not-allowed",
        opacity: 0.6
    }
    const [formData, setFormData] = useState(
        {
            "sname" :"",
            "mobile":"",
            "email":""

        }
    )
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormData((prevData)=>(
                {...prevData,
                [name] : value,
                }
            )
        )
       
    }
    const isFormInvalid = !formData.sname.trim() ||
                         !formData.mobile.trim() ||
                         !formData.email.trim(); 

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Data: ", formData);
        console.log(formData.length)
        if(formData.sname !== ""
            || formData.mobile !== ""
        ){
        alert("Submitted");
        }
       
        setFormData({ sname: "", mobile: "", email: "" });
        
    }
    return(
        <div style={formBodyStyle}>
            <h2 style={headingStyle}>Your University</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                {/* name has to be same as key of state Object key */}
                <input 
                    type="text" 
                    placeholder="Your Name"
                    name="sname" 
                    style={inputStyle}
                    value={formData.sname}
                    onChange={handleChange}
                    required
                    />
                <input 
                    type="tel" 
                    placeholder="Mobile"
                    name="mobile"
                    pattern="[0-9]{10}"
                    maxlength="10"
                    minlength="10"
                    required
                    style={inputStyle}
                    value={formData.mobile}
                    onChange={handleChange}/>
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    style={inputStyle} 
                    value={formData.email}
                    onChange={handleChange}
                    required/>
                <button style={isFormInvalid ? disableButtonStyle : submitButtonStyle} type="submit">Submit</button>
            </form>
        </div>
    )
}
export default MyForm;