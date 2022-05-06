import secureAxios from "./secureAxios";

export const getEmployeesData = async () => {
  try {
    let res = await secureAxios({
      url: "/employee/all",
      method: "get",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchEmployeesData = async (data) => {
  try {
    let res = await secureAxios({
      url: "/employee/search",
      method: "post",
      data: data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveEmployee = async (data) => {
  return secureAxios({
    url: "/employee/add",
    data: data,
    method: "post",
  });
};

export const deleteEmployee = async (id) => {
  try {
    let res = await secureAxios({
      url: `/employee/delete/${id}`,
      method: "delete",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (id, data) => {
  try {
    let res = await secureAxios({
      url: `/employee/update/${id}`,
      data: data,
      method: "put",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
