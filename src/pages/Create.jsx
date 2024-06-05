import React, { useRef, useState } from 'react';
import { Header } from '../components'; // Assuming Header is imported from the correct path
import styled from "styled-components";

const data = [
  [
    { label: "Nom de la concession", type: "text", width: "50%" },
    { label: "Matière", type: "text", width: "50%" }
  ],
  [
    { label: "Date début de l’exploitation", type: "text", width: "50%" },
    { label: "Date fin de l’exploitation", type: "text", width: "50%" }
  ],
  [
    { label: "Date début de l’investissement", type: "text", width: "50%" },
    { label: "Date fin de l’investissement", type: "text", width: "50%" }
  ],
  { label: "Nombre maximum d’investisseur", type: "number", width: "100%" },
  { label: "Montant minimum d’investissement", type: "number", width: "100%" },
  { label: "Taux", type: "number", width: "100%" },
  { label: "Montant total des investissement à atteindre", type: "number", width: "100%" },
  { label: "Description", type: "textarea", width: "100%" },
];

const Create = () => {
  const fileInputRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    console.log('Form submitted');
    setFormSubmitted(true); // Set the formSubmitted state to true
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Gestion des concessions" />
      <p style={{ color: 'gray', fontSize: '18px' }}>Créer une Concessions</p>
      <MainSection>
        <Form onSubmit={handleSubmit}>
          {data.map((row, index) => (
            <Row key={index}>
              {Array.isArray(row) ? (
                row.map((field, i) => (
                  <FormField key={i} label={field.label} type={field.type} width={field.width} />
                ))
              ) : (
                <FormField key={index} label={row.label} type={row.type} width={row.width} />
              )}
            </Row>
          ))}
          <MediaUploadForm fileInputRef={fileInputRef} handleBrowseClick={handleBrowseClick} />
          <SubmitButton type="submit">Créer</SubmitButton>
        </Form>
        {formSubmitted && <SubmissionMessage>Formulaire est soumis!</SubmissionMessage>}
      </MainSection>
    </div>
  );
};

const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: var(--Light-Typography-Color-Heading-Text, #4b465c);
  font-weight: 400;
  padding: 43px 24px 0;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

const Label = styled.label`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Public Sans, sans-serif;
`;

const Input = styled.input`
  border-radius: 6px;
  border: 1px solid rgba(219, 218, 222, 1);
  background-color: var(--Light-Solid-Color-Extra-Card-Background, #fff);
  margin-top: 4px;
  height: 38px;
  width: 100%;
`;

const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid rgba(219, 218, 222, 1);
  background-color: var(--Light-Solid-Color-Extra-Card-Background, #fff);
  margin-top: 4px;
  height: 163px;
  width: 100%;
`;

const FormField = ({ label, type, width }) => {
  return type === "textarea" ? (
    <FieldWrapper width={width}>
      <Label>{label}</Label>
      <Textarea />
    </FieldWrapper>
  ) : (
    <FieldWrapper width={width}>
      <Label>{label}</Label>
      <Input type={type} />
    </FieldWrapper>
  );
};

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px dashed rgba(219, 218, 222, 1);
  border-radius: 6px;
  margin-top: 4px;
  padding: 40px 24px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 263px;
  max-width: 100%;
`;

const ImageIconContainer = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  padding: 0 5px;
  background-color: rgba(75, 70, 92, 0.08);
  border-radius: 6px;
`;

const InstructionText = styled.p`
  color: #4b465c;
  font: 500 18px/133% Public Sans, sans-serif;
  align-self: stretch;
  margin-top: 12px;
`;

const SeparatorText = styled.p`
  color: #4b465c;
  font: 400 15px/147% Public Sans, sans-serif;
  margin-top: 12px;
`;

const BrowseButton = styled.label`
  display: flex;
  justify-content: center;
  padding: 10px;
  color: #4b465c;
  background-color: #f1c53d;
  box-shadow: 0px 2px 4px 0px rgba(165, 163, 174, 0.3);
  border: none;
  border-radius: 6px;
  letter-spacing: 0.43px;
  font: 500 15px/120% Public Sans, sans-serif;
  margin-top: 12px;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const MediaUploadForm = ({ fileInputRef, handleBrowseClick }) => {
  return (
    <StyledForm>
      <ImageContainer>
        <ImageIconContainer>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dd86e681b9b04a9e42fad662bafe25822419f34ef4c1fb1528be3fd05f3d571?apiKey=16edf050187a4ba683d958ed97898d7e&" alt="Media Upload Icon" />
        </ImageIconContainer>
        <InstructionText>{`Glissez-déposez votre image ici`}</InstructionText>
        <SeparatorText>ou</SeparatorText>
        <BrowseButton onClick={handleBrowseClick}>
          Parcourir un fichier
          <FileInput type="file" ref={fileInputRef} />
        </BrowseButton>
      </ImageContainer>
    </StyledForm>
  );
};

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #f1c53d;
  color: #4b465c;
  border: none;
  border-radius: 6px;
  font: 500 15px/120% Public Sans, sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 160px;
  align-self: flex-end;
  
  &:hover {
    background-color: #d7b03c;
  }
`;

const SubmissionMessage = styled.p`
  color: green; /* You can style this message as per your design */
  font-size: 18px;
  margin-top: 20px;
`;

export default Create;
