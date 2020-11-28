/* eslint-disable no-async-promise-executor */
import React from "react";

import { toast } from "react-toastify";
import Icon from "@mdi/react";
import { mdiCloseCircle } from "@mdi/js";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export const Toast = (type, message, cb) => {
  toast.dismiss();
  toast[type](message, {
    autoClose: 3000,
    closeButton: <Icon path={mdiCloseCircle} />,
    pauseOnHover: true,
    onClose: () => {
      cb ? cb() : null;
    },
  });
};

export const skills = [
  { value: 'Php', label: 'Php' },
  { value: 'Javascript', label: 'Javascript' },
  { value: 'React Js', label: 'React Js' },
  { value: 'Next Js', label: 'Next Js' },
  { value: 'Redux', label: 'Redux' },
  { value: 'Seo', label: 'Seo' },
  { value: 'Photoshop', label: 'Photoshop' }
];