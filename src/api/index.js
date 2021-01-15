import { toast } from "react-toastify";

export function handleError(error, customErrorText) {
  if (error && customErrorText) {
    toast.error(customErrorText);
  }
  //debug only in dev env
  if (process.env.NODE_ENV === "development") {
    const consoleStyle = "background: red; color: white; font-size: 18px";
    console.log("%c Error ", consoleStyle);
    console.log("error: ", error);
    console.log("error.response: ", error.response);
    console.log("error.message: ", error.message);
  }
}