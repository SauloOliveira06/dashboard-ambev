import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 40vh;
  padding: 20px;
  background: #343a40;
  border-radius: 4px;
  color: white;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone',
})`
  display: flex;
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
  default: '#fff',
  error: '#e57878',
  success: '#78e5d5',
};

export const UploadMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => messageColors[props.type || 'default']};
  padding: 15px 0;
`;

export const FileContainer = styled.ul`
  margin-top: 20px;

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
