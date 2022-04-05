import secureAxios from "./secureAxios";

export const getEmployee = async () => {
  return await secureAxios({
    url : "/all",
    method: "get",
  })
  .then((response) => {
    return { success: true, data: response.data };
  })
  .catch((error) => {
    return { success: false, error: error };
  });
};

export const saveEmployee = async (data) => {
  return await secureAxios({
    url : "/add",
    data : data,
    method: "post",
  })
  .then((response) => {
    return { success: true, data: response.data };
  })
  .catch((error) => {
    return { success: false, error: error };
  });
};
