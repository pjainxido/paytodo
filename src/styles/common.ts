import styled from 'styled-components';

export const SubmitButton = styled.button`
  color: #5a5d6c;
  &:hover {
    color: #87befd;
  }
  font-size: 23px;
  position: fixed;
  right: 12px;
  bottom: 12px;
  padding: 6px;
  border: none;
  background: none;
`;

export const ContentInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #bfbfbf;
  box-sizing: border-box;
  font-family: poppins;
  font-weight: 700;
  font-size: 17px;
  padding-bottom: 2px;
  background: 0 0;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-size: 20px;
  color: #5a5d6c;
  padding: 0px 10px 20px;
`;