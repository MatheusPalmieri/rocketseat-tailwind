"use client";

import {
  type ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

interface FileInputContextProps {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
}

const FileInputContext = createContext({} as FileInputContextProps);

type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((currentFiles) => [...currentFiles, ...files]);
      return;
    }

    setFiles(files);
  };

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);
