import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: '#D65238';
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  color: '#2B2A2B';
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;

  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.4s ease;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: '#06040D',
  error: '#e57878',
  success: '#36D68E',
};

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => messageColors[props.type || 'default']};
  padding: 15px 0;
`;

export const FileContainer = styled.ul`
  display: flex;
  align-items: center;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    color: '#040D08';
    display: flex;
    flex-direction: column;

    strong {
      max-width: 20vh;
    }

    span {
      font-size: 12px;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
      }
    }
  }
`;

export const UploadError = styled.div`
  margin-top: 7px;
  font-weight: bold;
  font-size: 14px;
  color: #b87078;
`;
