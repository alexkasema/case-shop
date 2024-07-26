import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateReactHelpers } from "@uploadthing/react";

//!make available to our react components to use anywhere
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
