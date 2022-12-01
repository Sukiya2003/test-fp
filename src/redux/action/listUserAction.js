import axios from "axios";

export const GET_USER = "GET_USER";

function sucsessGet(params) {
  return {
    type: GET_USER,
    payload: params,
  };
}

export const getUser = () => {
  return async (dispatch) => {
    const result = await axios(
      "https://634840db0484786c6e95e220.mockapi.io/Data"
    );
    dispatch(sucsessGet(result.data));
  };
};

export const postUser = (data) => {
  return async (dispatch) => {
    axios
      .post("https://634840db0484786c6e95e220.mockapi.io/Data", data)
      .then((res) => {
        alert("Akun berhasil dibuat");
      });
  };
};

export const putUser = () => {
  return async (dispatch) => {
    axios
      .put("https://634840db0484786c6e95e220.mockapi.io/Data", {
        method: "PUT",
        body: JSON.stringify(data),
      })
      .then((result) => {
        result.json().then((resp) => {
          console.log(resp);
          getUser();
          alert("Akun berhasil diubah")
        });
      });
  };
};
