import React from "react";
import {
  FormComponent,
  FormularioComponent,
  InputComponent,
  InputComponentBig,
  InputIcon,
  InputIconlast,
  InputWrapper,
} from "./Formulario.elements";
import FormName from "../../img/May/Manray_Form_Name.svg";
import FormMail from "../../img/May/Manray_Form_Mail.svg";
import FormPhone from "../../img/May/Manray_Form_Phone.svg";
import FormProject from "../../img/May/Manray_Form_Project.svg";

const Formulario = () => {
  return (
    <FormularioComponent>
      <FormComponent>
        <InputWrapper>
          <InputComponent type="text" placeholder="Nombre" />
          <InputIcon src={FormName} />
        </InputWrapper>
        <InputWrapper>
          <InputComponent type="text" placeholder="Correo" />
          <InputIcon src={FormMail} />
        </InputWrapper>
        <InputWrapper>
          <InputComponent type="text" placeholder="Teléfono" />
          <InputIcon src={FormPhone} />
        </InputWrapper>
        <InputWrapper>
          <InputComponentBig
            type="text"
            placeholder="Cuentanos sobre tu proyecto"
          />
          <InputIconlast src={FormProject} />
        </InputWrapper>

        <InputWrapper>
          <InputComponent type="Submit" placeholder="Enviar" />
        </InputWrapper>
      </FormComponent>
    </FormularioComponent>
  );
};

export default Formulario;
