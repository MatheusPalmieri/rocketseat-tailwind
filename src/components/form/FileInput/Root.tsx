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
  onFilesSelected: (files: File[]) => void;
}

const FileInputContext = createContext({} as FileInputContextProps);

type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);
