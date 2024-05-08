const transformResponse = (message, response) => {
  return {
    message: message,
    data: response,
  };
};

export default transformResponse;
