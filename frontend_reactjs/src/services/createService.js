import * as request from "~/utils/request";
import swal from "sweetalert";
import { useState } from "react";

export const createCardKanji = async (formData) => {
  try {
    const res = await request.post("/add-kanji", formData);
    if (res.status == 200) {
      swal({
        title: "Success!",
        text: res.message,
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } else {
      swal({
        title: "Error!",
        // text: "",
        icon: "error",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createCardGrammar = async (formData) => {
  try {
    const res = await request.post("/add-grammar", formData);
    if (res.status == 200) {
      swal({
        title: "Success!",
        text: res.message,
        icon: "success",
      }).then(() => {
        window.location.reload();
      });
    } else {
      swal({
        title: "Error!",
        // text: "",
        icon: "error",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
