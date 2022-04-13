import secureAxios from "./secureAxios";
export const getEmployeesData = async () => {
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
