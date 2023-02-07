import { motion } from "framer-motion"
import React from "react"
import { useRef } from "react"
import { useState } from "react"

export default function ContactSec({ popup }) {
  const ref = useRef(null)
  //const isInView = useInView(ref, { once: true })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    nameValid: "",
    emailValid: "",
    formErrors: { name: " ", email: " " },
    formStyle: { name: "inputField", email: "inputField" },
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
    e.preventDefault()
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
    const styles = formState.formStyle
    let nameValid = formState.nameValid
    let emailValid = formState.emailValid
    let phoneValid = formState.phoneValid
    let companyValid = formState.companyValid

    switch (field) {
      case "name":
        nameValid = value.length > 0
        errors.name = nameValid ? " " : "Please enter a name"
        styles.name = nameValid
          ? "inputField outline-green-500"
          : "inputField outline-red-600"

        break
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        emailValid = !!emailValid
        errors.email = emailValid ? " " : "Please enter a valid email"
        styles.email = emailValid
          ? "inputField outline-green-500"
          : "inputField outline-red-600"
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
      formStyle: styles,
    })
  }

  return (
    <motion.section
      id={popup ? "popupContact" : "contactSection"}
      className={`px-5 py-3 w-full max-w-5xl rounded-lg place-self-center shadow-xl ${
        popup ? "" : "cont mt-5"
      }`}
      initial={{ opacity: popup ? 1 : 0, y: popup ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1 }}
    >
      {!popup && (
        <h2 ref={ref} className="h2 type">
          Contact Me
        </h2>
      )}
      <form
        name="Contact"
        className="flex flex-col w-full md:px-10 my-5"
        method="post"
        onSubmit={handleSubmit}
        netlify
      >
        <input type="hidden" name="form-name" value="Contact" />
        <label className="formLabel">
          Name:
          <input
            aria-required
            aria-invalid={formState.nameValid}
            id={popup ? "popUpName" : "name"}
            name="name"
            type="text"
            className={formState.formStyle.name}
            onBlur={fieldValidation}
            onChange={handleChange}
            value={formState.name}
            placeholder="Name"
          />
          <p className="text-red-500 text-sm mt-2 h-3">
            {formState.formErrors.name}
          </p>
        </label>

        <label className="formLabel">
          Email:
          <input
            aria-required
            aria-invalid={formState.emailValid}
            id="email"
            name="email"
            type="email"
            className={formState.formStyle.email}
            onBlur={fieldValidation}
            onChange={handleChange}
            value={formState.email}
            placeholder="Email"
          />
          <p className="text-red-500 text-sm mt-2 h-3">
            {formState.formErrors.email}
          </p>
        </label>

        <label className="formLabel">
          Message:
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
        </label>
        <button
          type="submit"
          className="py-6 px-6 mt-10 w-full font-black text-lg sm:text-xl button"
        >
          Submit
        </button>
      </form>
    </motion.section>
  )
}
