import { useState } from "react";

export const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const useImgLoading = () => {
  const [isLoading, setLoading] = useState(true);

  const handleClose = () => {
    setLoading(false);
  };

  const handleOpen = () => {
    setLoading(true);
  };

  return [isLoading, handleClose, handleOpen];
};
