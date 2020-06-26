import React, { useState } from 'react';
import { MdInsertDriveFile } from 'react-icons/md';
import fileSize from 'filesize';

import { CircularProgressbar } from 'react-circular-progressbar';
import Dropzone from 'react-dropzone';

import Loading from '../Loading';

import api from '../../services/api';

import {
  Container,
  Content,
  DropContainer,
  UploadMessage,
  FileContainer,
  FileInfo,
  UploadError,
} from './styles';

function Upload({ callback }) {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState({
    error: null,
  });

  const [showContent, setShowContent] = useState(true);

  function uploadFile(fileUpload) {
    const dataForm = new FormData();
    dataForm.append('file', fileUpload, fileUpload.path);

    setUploadError({
      error: null,
    });

    api
      .post('/mip/upload', dataForm, {
        onUploadProgress: (event) => {
          const progress = parseInt(
            Math.round(event.loaded * 100) / event.total,
            10
          );

          if (progress >= 100) {
            setShowContent(false);
          }

          setFile({ ...fileUpload, progressUpload: progress });
        },
      })
      .then((response) => {
        const { data } = response;
        if (data) {
          callback(data);
          setUploadSuccess(true);
        }
      })
      .catch((error) => {
        setShowContent(true);

        setUploadError({
          error: error.response.data.detail,
        });

        setFile(null);
      });
  }

  function handleUpload(files) {
    const fileUpload = files[0];

    if (fileUpload) {
      setFile({
        ...fileUpload,
        fileSize: fileSize(fileUpload.size),
        progressUpload: 0,
        uploaded: true,
      });

      fileUpload.fileSize = fileSize(fileUpload.size);
      uploadFile(fileUpload);
    }
  }

  function renderMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return (
        <UploadMessage>Arraste o mip no formato .xlsx aqui...</UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
  }

  function removeFile() {
    setFile(null);
  }

  return (
    <Container>
      {showContent ? (
        <Content>
          {file === null && (
            <>
              <Dropzone onDropAccepted={handleUpload}>
                {({
                  getRootProps,
                  getInputProps,
                  isDragActive,
                  isDragReject,
                }) => (
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
              {uploadError.error !== null && (
                <UploadError>
                  <span>{uploadError.error}</span>
                </UploadError>
              )}
            </>
          )}
          {file !== null && file.progressUpload !== 100 && (
            <FileContainer>
              <li>
                <FileInfo>
                  <MdInsertDriveFile size={36} />
                  <div>
                    <strong>{file.path}</strong>
                    <span>
                      {file.fileSize}
                      {file.progressUpload === 0 && (
                        <button type="button" onClick={() => removeFile()}>
                          Remover
                        </button>
                      )}
                    </span>
                  </div>
                </FileInfo>
                <div>
                  {file !== null && !file.error && file.progressUpload !== 100 && (
                    <CircularProgressbar
                      styles={{
                        root: {
                          width: 35,
                        },
                        path: {
                          stroke: '#78e5d9',
                        },
                        trail: {
                          stroke: '#fff',
                        },
                      }}
                      strokeWidth={20}
                      value={file.progressUpload}
                    />
                  )}
                </div>
              </li>
            </FileContainer>
          )}
        </Content>
      ) : (
        <Loading loading={!uploadSuccess} />
      )}
    </Container>
  );
}

export default Upload;
