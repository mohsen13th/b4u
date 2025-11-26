import { useCallback } from "react";

import { ValidationType as InputType } from "../types";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export const useInputValidation = (type?: InputType) => {
  const onInput = useCallback(
    (e: React.FormEvent<InputElement>) => {
      const el = e.currentTarget;
      let value = el.value;

      switch (type) {
        case "number":
          value = value.replace(/[^0-9]/g, "");
          break;

        case "decimal":
          value = value.replace(/[^0-9.]/g, "");
          const parts = value.split(".");
          if (parts.length > 2) {
            value = parts[0] + "." + parts.slice(1).join("");
          }
          break;

        case "email":
          value = value.replace(/[^\w@.\-+]/g, "");
          break;

        case "url":
          value = value.replace(/[^\w\-.:/?#&=%+@]/g, "");
          break;

        case "text-persian":
          value = value.replace(/[^آ-ی0-9\s]/g, "");
          value = value.replace(/^\s+/, "");
          break;

        case "text-english":
          value = value.replace(/[^a-zA-Z0-9\s]/g, "");
          value = value.replace(/^\s+/, "");
          break;

        case "letters-persian":
          value = value.replace(/[^آ-ی\s]/g, "");
          value = value.replace(/^\s+/, "");
          break;

        case "letters-english":
          value = value.replace(/[^a-zA-Z\s]/g, "");
          value = value.replace(/^\s+/, "");
          break;

          case "username":
          value = value.replace(/[^a-zA-Z]/g, "");
          break;

        case "password":
        case "date":
        case "time":
        case "text":
        default:
          break;
      }

      el.value = value;
    },
    [type],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<InputElement>) => {
      if (type === "number" && ["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
      }
    },
    [type],
  );

  return { onInput, onKeyDown };
};
