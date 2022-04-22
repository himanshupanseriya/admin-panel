import secureAxios from "./secureAxios";
export const getCommissionData = async () => {
  try {
    let res = await secureAxios({
      url: "commission/all",
      method: "get",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCommissionData = async (id) => {
  try {
    let res = await secureAxios({
      url: `commission/delete/${id}`,
      method: "delete",
    });
    return res.date;
  } catch (error) {
    console.log(error);
  }
};

export const saveCommissionData = async (data) => {
  try {
    let res = await secureAxios({
      url: "/commission/add",
      data: data,
      method: "post",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCommissionData = async (id, data) => {
  try {
    let res = await secureAxios({
      url: `/commission/update/${id}`,
      data: data,
      method: "put",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
