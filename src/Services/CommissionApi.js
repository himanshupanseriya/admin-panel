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
