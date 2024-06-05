import React, { useRef, useState } from 'react';
import { Header } from '../components'; // Assuming Header is imported from the correct path
import styled from "styled-components";
import { Formik, Form, Field } from 'formik'; // Import Formik utilities

const data = [
  [
    { name: "concessionName", label: "Nom de la concession", type: "text", width: "50%" },
    { name: "material", label: "Matière", type: "text", width: "50%" }
  ],
  [
    { name: "startDate", label: "Date début de l’exploitation", type: "text", width: "50%" },
    { name: "endDate", label: "Date fin de l’exploitation", type: "text", width: "50%" }
  ],
  [
    { name: "investmentStartDate", label: "Date début de l’investissement", type: "text", width: "50%" },
    { name: "investmentEndDate", label: "Date fin de l’investissement", type: "text", width: "50%" }
  ],
  { name: "maxInvestors", label: "Nombre maximum d’investisseur", type: "number", width: "100%" },
  { name: "minInvestmentAmount", label: "Montant minimum d’investissement", type: "number", width: "100%" },
  { name: "rate", label: "Taux", type: "number", width: "100%" },
  { name: "totalInvestmentAmount", label: "Montant total des investissement à atteindre", type: "number", width: "100%" },
  { name: "description", label: "Description", type: "textarea", width: "100%" },
];

const Create = () => {
  const fileInputRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Gestion des concessions" />
      <p style={{ color: 'gray', fontSize: '18px' }}>Créer une Concessions</p>
      <MainSection>
        <Formik
          initialValues={{
            concessionName: '',
            material: '',
            startDate: '',
            endDate: '',
            investmentStartDate: '',
            investmentEndDate: '',
            maxInvestors: '',
            minInvestmentAmount: '',
            rate: '',
            totalInvestmentAmount: '',
            description: ''
          }}
          onSubmit={(values, actions) => {
            console.log('Form submitted with values:', values);
            setFormSubmitted(true);
            actions.setSubmitting(false);
          }}
        >
          {formik => (
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              {data.map((row, index) => (
                <Row key={index}>
                  {Array.isArray(row) ? (
                    row.map((field, i) => (
                      <FormField key={i} name={field.name} label={field.label} type={field.type} width={field.width} />
                    ))
                  ) : (
                    <FormField key={index} name={row.name} label={row.label} type={row.type} width={row.width} />
                  )}
                </Row>
              ))}
              <MediaUploadForm fileInputRef={fileInputRef} handleBrowseClick={handleBrowseClick} />
              <SubmitButton type="submit">Créer</SubmitButton>
              {formSubmitted && <SubmissionMessage>Formulaire est soumis!</SubmissionMessage>}
            </form>
          )}
        </Formik>
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
  position: relative; /* Add relative positioning */
  @media (max-width: 991px) {
    padding: 0 20px;
  }
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

const Input = styled(Field)`
  border-radius: 6px;
  border: 1px solid rgba(219, 218, 222, 1);
  background-color: var(--Light-Solid-Color-Extra-Card-Background, #fff);
  margin-top: 4px;
  height: 38px;
  width: 100%;
`;

const Textarea = styled(Field)`
  border-radius: 6px;
  border: 1px solid rgba(219, 218, 222, 1);
  background-color: var(--Light-Solid-Color-Extra-Card-Background, #fff);
  margin-top: 4px;
  height: 163px;
  width: 100%;
`;

const FormField = ({ name, label, type, width }) => {
  return type === "textarea" ? (
    <FieldWrapper width={width}>
      <Label htmlFor={name}>{label}</Label>
      <Textarea id={name} name={name} component="textarea" />
    </FieldWrapper>
  ) : (
    <FieldWrapper width={width}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} />
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
  align-self: flex-end; /* Align to the right */
  margin-top: 20px; /* Add some top margin */
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
