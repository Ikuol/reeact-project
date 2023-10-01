import { useState } from "react";
import Files from "react-files";
import FileUploaded from "components/FileUploaded/FileUploaded";

const UploadFile = ({ isMultiple = true }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileEnter, setFileEnter] = useState(false);

  const handleDragEnter = () => {
    setFileEnter(true);
  };

  const handleDragLeave = () => {
    setFileEnter(false);
  };

  const onFilesChange = (files) => {
    isMultiple
      ? setSelectedFiles([...selectedFiles, ...files])
      : setSelectedFiles(files);
  };

  const onFilesError = (error) => {
    console.log(error.message);
  };

  const onFileDelete = (index) => {
    setSelectedFiles((files) => files.filter((item, i) => i !== index));
  };

  return (
    <div className="flex flex-col space-y-4 items-center justify-center w-full">
      <Files
        className="w-full flex"
        onChange={onFilesChange}
        onError={onFilesError}
        multiple={isMultiple}
        accepts={["image/*", ".pdf", "audio/*"]}
        maxFileSize={10000000}
        minFileSize={0}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        clickable
      >
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full
        h-36 border-2 border-gray-300 border-dashed rounded-[20px]
        cursor-pointer hover:bg-gray-100 bg-grayUpload text-main"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm">
              {fileEnter ? (
                <span className="font-normal">
                  Vous pouvez lâcher le curseur
                </span>
              ) : (
                <span className="font-normal">
                  Déposer le fichier ici (img, pdf, audio)
                </span>
              )}
            </p>
          </div>
        </label>
      </Files>
      {selectedFiles.length > 0 && (
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="file-uploaded" className="text-main text-sm">
            Fichiers uploadés
          </label>
          <div
            className="pt-5 pb-5 w-full h-auto
          bg-grayUpload rounded-[20px]"
          >
            <span className="mb-3 flex justify-end px-3">
              {selectedFiles.length > 0 && (
                <button
                  className="underline text-xs text-main
                  font-normal"
                  onClick={() => {
                    setSelectedFiles([]);
                  }}
                >
                  Tout effacer
                </button>
              )}
            </span>

            {selectedFiles.length > 0 && (
              <div className="flex flex-col h-auto px-1">
                {selectedFiles.map((file, i) => (
                  <div key={file.id}>
                    <FileUploaded
                      file={file}
                      onFileDelete={() => onFileDelete(i)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
