export const logAndExit = (err: Error): void => {
  console.error(err);
  process.exit(1);
};
