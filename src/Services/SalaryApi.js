import secureAxios from "./secureAxios";

export const saveEmployeeSalary = async (data) => {
  try {
    let response = await secureAxios({
      url: "salary/add",
			data : data,
      method: "add",
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
