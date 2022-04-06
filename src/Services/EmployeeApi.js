import secureAxios from "./secureAxios";

export const getEmployee = async () => {
  try {
    let res = await secureAxios({
      url: "/all",
      method: "get",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveEmployee = async (data) => {
  try {
    let res = await secureAxios({
      url: "/add",
      data: data,
      method: "post",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    let res = await secureAxios({
      url: `/delete/${id}`,
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
      url: `/update/${id}`,
      data: data,
      method: "put",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
