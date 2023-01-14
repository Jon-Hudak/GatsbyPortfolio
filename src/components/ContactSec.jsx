import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"

export default function ContactSec({ popup }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    nameValid: "",
    emailValid: "",
    formErrors: { name: "", email: ""},
    formValid: false,
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = e => {
    formValidation()
    // if (nameValid && emailValid){
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: encode({ "form-name": "contact", ...formState })
    //   })
    //     .then(() => alert("Success!"))
    //     .catch(error => alert(error));

      
    // }
    e.preventDefault();
  }

  const formValidation = () => {
    let formValid = false
    console.log(formState.formValid)
    if (formState.nameValid && formState.emailValid) {
      formValid = true
    }
    setFormState({ ...formState, formValid: formValid })
  }
  const fieldValidation = e => {
    const field = e.target.name
    const value = e.target.value
    const errors = formState.formErrors
    let nameValid = formState.nameValid
    let emailValid = formState.emailValid
    let phoneValid = formState.phoneValid
    let companyValid = formState.companyValid

    switch (field) {
      case "name":
        nameValid = value.length > 0
        errors.name = nameValid ? "" : "Please enter a name"
        break
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        emailValid = !!emailValid
        errors.email = emailValid ? "" : "Please enter a valid email"
        break
      case "phone":
        phoneValid = value.match(/^[(]?\d{3}[)]?[-]?\d{3}[-]?\d{4}$/)
        errors.phone = phoneValid ? "" : "Please enter a valid phone number"
        break
      case "company":
        companyValid = value.length > 0
        errors.company = companyValid ? "" : "Please enter a company name"
        break
      default:
        break
    }
    setFormState({
      ...formState,
      nameValid: nameValid,
      emailValid: emailValid,
      phoneValid: phoneValid,
      companyValid: companyValid,
      formErrors: errors,
    })
  }

  return (
    <motion.section
      id={popup?"popupContact":"contactSection"}
      className={`px-5 py-3 w-full max-w-5xl rounded-lg place-self-center shadow-xl ${
        popup ? "" : "mt-5 border border-orange-400 bg-black bg-opacity-40"
      }`}
      initial={{ opacity:popup?1:0, y: popup?0:50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin:"0px 0px -10% 0px" }}
      transition={{ duration: 1 }}
    >
      {!popup && (
        <h2 className="text-3xl mt-3px-5 text-red-600 font-bold text-center md:text-4xl md:text-left ">
          Contact me
        </h2>
      )}
      <form name="Contact" className="flex flex-col w-full md:px-10 my-5" method="post" onSubmit={handleSubmit} netlify>
      <input type="hidden" name="form-name" value="Contact" />
        <label htmlFor="name" className="formLabel">
          Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={
            formState.nameValid
              ? "inputField outline-green-500"
              : "inputField outline-red-600"
          }
          onBlur={fieldValidation}
          onChange={handleChange}
          value={formState.name}
          placeholder="Name"
        />
        <label htmlFor="email" className="formLabel">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={
            formState.emailValid
              ? "inputField outline-green-500"
              : "inputField outline-red-600"
          }
          onBlur={fieldValidation}
          onChange={handleChange}
          value={formState.email}
          placeholder="Email"
        />
        {/* <label htmlFor="phone" className="formLabel">Phone:</label>
         <input
          id="phone"
          name="phone"
          type="phone"
          className={formState.phoneValid ? "inputField outline-green-500" : "inputField outline-red-600"}
          onBlur={fieldValidation}
          onChange={handleChange}
          value={formState.phone}
          placeholder="Phone"
        /> */}
        <label htmlFor="message" className="formLabel">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          type="text"
          className="inputField overflow-y-auto"
          rows="6"  
          onChange={handleChange}
          value={formState.message}
          placeholder="Message"
          
        />
        <button
          type="submit"
          className="py-6 px-6 mt-10 w-full place-self-end border border-gray-400 font-black text-lg sm:text-xl rounded-full shadow-lg bg-yellow-400 text-gray-900 transition duration-500 hover:bg-yellow-700 hover:text-gray-300 active:bg-yellow-900 focus:outline-none focus:ring focus:ring-orange-500"
        >
          Submit
        </button>
      </form>
    </motion.section>
  )
}
