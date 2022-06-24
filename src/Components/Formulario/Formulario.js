import React, { useState, useEffect } from "react";
import {
  FormComponent,
  FormularioComponent,
  InputComponent,
  InputComponentBig,
  InputIcon,
  InputIconlast,
  InputSubmit,
  InputWrapper,
} from "./Formulario.elements";
import FormName from "../../img/May/Manray_Form_Name.svg";
import FormMail from "../../img/May/Manray_Form_Mail.svg";
import FormPhone from "../../img/May/Manray_Form_Phone.svg";
import FormProject from "../../img/May/Manray_Form_Project.svg";
import axios from "axios";

const Formulario = () => {
  const [inputsVals, setInputsVals] = useState({
    firstname: {
      value: "",
      status: null,
      regex:
        // eslint-disable-next-line
        /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/,
    },
    email: {
      value: "",
      status: null,
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    },
    phone: {
      value: "",
      status: null,
      regex:
        // eslint-disable-next-line
        /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    },
    project: {
      value: "",
      status: null,
      regex: /[^\r\n]+((\r|\n|\r\n)[^\r\n]+)*/,
    },
  });
  const [buttonSubmit, setButtonSubmit] = useState({
    text: "Submit",
    status: true,
  });

  useEffect(() => {
    setButtonSubmit({
      ...buttonSubmit,
      text:
        inputsVals.firstname.status === "input-success" &&
        inputsVals.email.status === "input-success" &&
        inputsVals.phone.status === "input-success" &&
        inputsVals.project.status === "input-success"
          ? "Enviar"
          : "Completa tu información",
      status:
        inputsVals.firstname.status &&
        inputsVals.email.status &&
        inputsVals.phone.status &&
        inputsVals.project.status
          ? false
          : true,
    }); // eslint-disable-next-line
  }, [inputsVals]);

  const onInputChange = (e) => {
    let value = e.target.value;
    let nombre = e.target.name;
    let regex = inputsVals[nombre].regex;
    let result = regex.test(value);
    setInputsVals({
      ...inputsVals,
      [nombre]: {
        ...inputsVals[nombre],
        value: value,
        status: result ? "input-success" : "input-false",
      },
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setButtonSubmit({
      ...buttonSubmit,
      text: "Enviando...",
      status: true,
    });

    try {
      const config = {
        method: "post",
        url: "http://new.manrayfilms.com/submit",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          firstname: inputsVals.firstname.value,
          email: inputsVals.email.value,
          phone: inputsVals.phone.value,
          project: inputsVals.project.value,
        },
      };
      const response = await axios(config);
      console.log(response);
      if (response) {
        setButtonSubmit({
          ...buttonSubmit,
          text: "Enviado",
        });

        const nombregracias = inputsVals.firstname.value;
        setButtonSubmit({
          ...buttonSubmit,
          text: "Enviar",
          status: false,
        });
        window.location.href = `/Gracias?name=${nombregracias}`;
      }
    } catch (error) {
      console.log(error);
      setButtonSubmit({
        ...buttonSubmit,
        text: "Enviar",
        status: false,
      });
    }
  };
  return (
    <FormularioComponent>
      <FormComponent onSubmit={onSubmitHandler}>
        <InputWrapper>
          <InputComponent
            name="firstname"
            type="text"
            placeholder="Nombre"
            required
            autoComplete="on"
            value={inputsVals.firstname.value}
            onChange={onInputChange}
            onBlur={onInputChange}
            className={inputsVals.firstname.status}
          />
          <InputIcon src={FormName} />
        </InputWrapper>
        <InputWrapper>
          <InputComponent
            name="email"
            type="email"
            placeholder="Correo"
            required
            value={inputsVals.email.value}
            autoComplete="on"
            onChange={onInputChange}
            onBlur={onInputChange}
            className={inputsVals.email.status}
          />
          <InputIcon src={FormMail} />
        </InputWrapper>
        <InputWrapper>
          <InputComponent
            name="phone"
            type="tel"
            placeholder="Teléfono"
            required
            autoComplete="on"
            value={inputsVals.phone.value}
            onChange={onInputChange}
            onBlur={onInputChange}
            className={inputsVals.phone.status}
          />
          <InputIcon src={FormPhone} />
        </InputWrapper>
        <InputWrapper>
          <InputComponentBig
            name="project"
            type="text"
            placeholder="Cuentanos sobre tu proyecto"
            required
            value={inputsVals.project.value}
            autoComplete="on"
            onChange={onInputChange}
            onBlur={onInputChange}
            className={inputsVals.project.status}
          />

          <InputIconlast src={FormProject} />
        </InputWrapper>

        <InputWrapper>
          <InputSubmit
            type="Submit"
            value={buttonSubmit.text}
            disabled={buttonSubmit.status}
            className={buttonSubmit.text}
          />
        </InputWrapper>
      </FormComponent>
    </FormularioComponent>
  );
};

export default Formulario;
