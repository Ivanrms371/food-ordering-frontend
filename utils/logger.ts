export const logger = {
  info: (...msg: any[]) => {
    if (process.env.NODE_ENV === "development") console.log(...msg);
  },
  warn: (...msg: any[]) => {
    if (process.env.NODE_ENV === "development") console.warn(...msg);
  },
  error: (...msg: any[]) => {
    if (process.env.NODE_ENV === "development") {
      console.error(...msg);
    } else {
      console.error("An unexpected error occurred.");
    }
  },
};
