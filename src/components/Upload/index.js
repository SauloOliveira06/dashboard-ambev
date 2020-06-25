import React, { useState } from 'react';
import { MdCheckCircle, MdInsertDriveFile } from 'react-icons/md';

import { CircularProgressbar } from 'react-circular-progressbar';
import Dropzone from 'react-dropzone';

import {
  Container,
  Content,
  DropContainer,
  UploadMessage,
  FileContainer,
  FileInfo,
} from './styles';

function Upload() {
  const [file, setFileName] = useState(null);

  function handleUpload(files) {
    const fileUpload = files[0];

    if (fileUpload) {
      setFileName({
        name: fileUpload.name,
        size: fileUpload.size,
      });
    }
  }

  function renderMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return <UploadMessage>Arraste o arquivo aqui...</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }

  return (
    <Container>
      <Content>
        <Dropzone accept="image/*" onDropAccepted={handleUpload}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {renderMessage(isDragActive, isDragReject)}
            </DropContainer>
          )}
        </Dropzone>
        {file !== null && (
          <FileContainer>
            <li>
              <FileInfo>
                <MdInsertDriveFile size={36} />
                <div>
                  <strong>{file.name}</strong>
                  <span>
                    {file.size} <button onClick={() => {}}>Remover</button>
                  </span>
                </div>
              </FileInfo>
              <div>
                <CircularProgressbar
                  styles={{
                    root: {
                      width: 24,
                    },
                    path: {
                      stroke: '#78e5d5',
                    },
                    text: {
                      fill: '#fff',
                      fontSize: '40px',
                    },
                  }}
                  strokeWidth={10}
                  text={`${60}%`}
                />
                <MdCheckCircle size={24} color="#78e5d5" />
              </div>
            </li>
          </FileContainer>
        )}
      </Content>
    </Container>
  );
}

export default Upload;
