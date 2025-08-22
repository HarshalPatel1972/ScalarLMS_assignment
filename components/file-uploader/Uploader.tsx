"use client";
import { useCallback } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { RenderEmptyState, RenderErrorState } from "./RenderState";
import { toast } from "sonner";

export function Uploader() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  function rejectedFiles(fileRejection: FileRejection[]) {
    if (fileRejection.length) {
      const tooManyFiles = fileRejection.find(
        (rejection) => rejection.errors[0].code === "too-many-files"
      );

      const fileSizeTooBig = fileRejection.find(
        (rejection) => rejection.errors[0].code === "file-too-large"
      );

      if (fileSizeTooBig) {
        toast.error("File Size exceeds limit");
      }

      if (tooManyFiles) {
        toast.error("Too many files selected, max is 1");
      }
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
    multiple: false,
    maxSize: 5 * 1024 * 1024, //5mb,
    onDropRejected: rejectedFiles,
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "relative border-2 border-dashed transition-colors duration-200 ease-in-out w-full h-64 p-6 rounded-lg cursor-pointer text-center",
        isDragActive
          ? "border-primary/10 border-solid"
          : "border-border hover:border-primary"
      )}
    >
      {" "}
      <input {...getInputProps()} />{" "}
      {/* to get the buttons uploading the files working */}
      <CardContent className="flex items-center justify-center h-full w-full p-4">
        <RenderEmptyState isDragActive={isDragActive} />

        {/* <RenderErrorState /> */}
      </CardContent>
    </Card>
  );
}
