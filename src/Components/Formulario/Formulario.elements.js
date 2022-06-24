import styled from "styled-components";

export const FormularioComponent = styled.div`
  width: 100%;
`;

export const FormComponent = styled.form`
  width: 100%;
`;

export const InputComponent = styled.input`
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.5);
  padding: 15px 15px 15px 35px;
  width: 100%;
  margin-bottom: 4%;
  background-color: #000000;
  border: 1.5px solid #ffffff;
`;

export const InputSubmit = styled.input`
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.5);
  padding: 15px 15px 15px 15px;
  width: 100%;
  margin-bottom: 4%;
  background-color: #000000;
  border: 1.5px solid #ffffff;
`;

export const InputComponentBig = styled.textarea`
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.5);
  padding: 15px 15px 15px 35px;
  width: 100%;
  margin-bottom: 4%;
  background-color: #000000;
  border: 1.5px solid #ffffff;
  min-height: 122px;
`;
export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const InputIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 39%;
  transform: translateY(-60%);
  @media (max-width: 1100px) {
    top: 42%;
  }
`;

export const InputIconlast = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 19%;
  transform: translateY(-60%);
  @media (max-width: 1100px) {
    top: 19%;
  }
`;
