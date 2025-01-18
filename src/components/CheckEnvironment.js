export const CheckEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.dompeyreton.com";

  return base_url;
};
