//Generate Random Id
export const generateRandomId = () => {
  let newId = (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5)
  ).toUpperCase();

  return newId;
};
