import React, {useEffect} from "react";
import Style from "../styles/Home.module.css";
import {useDispatch, useSelector} from "react-redux";
import {sendEmail} from "@/config/action/emailAction";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPart1 = () => {

  const[subject, setSubject] = React.useState("");
  const[text, setText] = React.useState("");
  const[usermail, setUsermail] = React.useState("");
  const[username, setUsername] = React.useState("");

  const dispatch = useDispatch();

  const {isError, message, isSuccess, isLoading} = useSelector((state) => state.emailReducer);


  useEffect(() => {
    if (isError) {
      console.log(message); // This will log "Please fill the required fields"
    }
  }, [isError, message]);
  const submitHandler = async() => {
    await dispatch(sendEmail({ usermail, subject, text, username }));
    setSubject("");
    setUsername("");
    setUsermail("");
    setText("");

  }
  return (
      <div className={Style.mainContainer}>

              <div className={Style.form}>
                <div className={Style.heading}>
                <h1 >Let’s Work</h1>
                </div>
                <div className={Style.inputContainer}>
                <input id="validationDefault01" required={true} value={username} onChange={(e)=>setUsername(e.target.value)} className={`${Style.inp}`} placeholder="Your Name" type="text" name="name"/>
                <input id="validationDefault01" required={true} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={usermail} onChange={(e)=>setUsermail(e.target.value)} className={`${Style.inp}`} placeholder="Email Id" type="email" name="email"/>
                <input id="validationDefault01" required={true} value={subject} onChange={(e)=>setSubject(e.target.value)} className={`${Style.inp}`} placeholder="Subject" type="text" name="subject"/>
                </div>
                <div className={Style.textareaContainer}>
                <textarea id="validationDefault01" required={true} value={text} onChange={(e)=>setText(e.target.value)} className={`${Style.textarea}`} name="message" placeholder="What can I help you"></textarea>
                </div>
                <div className={Style.btnContainer}>
                <button onClick={()=>{submitHandler()}} className={Style.btn} type="submit">{isLoading ? "Sending Mail..." : "Send Message"}</button>
                </div>


              </div>

      </div>
  );
};

export default ContactPart1;
