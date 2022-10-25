import { freeze } from "../../../utils/freeze";

export const login = async (filters) => {
  await freeze();

  let response;

  if (filters.email === "admin") {
    if (filters.password === "admin") {
      response = {
        status: true,
        data: {
          name: "Luciana Veiga",
          user: "Luciana",
          email: "luciana@gmail.com",
          permissao: "Analista",
          refresh:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY0NjE2MDkzOCwiaWF0IjoxNjM4Mzg0OTM4LCJqdGkiOiI4NjMxZDEyY2VkZTY0OTM1OTEyNmY5N2E0ZDUyOTM3OCIsInVzZXJfaWQiOjJ9.hKTLm07her-pW4eMpczD4MfLROrXGikUF3s6-gkm2fc",
          access:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM4NDcxMzM4LCJpYXQiOjE2MzgzODQ5MzgsImp0aSI6ImJjYmU1MTFmOTg1OTRmNjZiYjAyZDMyNTAyYmZhNjAzIiwidXNlcl9pZCI6Mn0.gmVMjSesQH8eU7AL9Y2cgJm5IKoOSOP0DF67kLuMS_Q",
        },
      };
    } else {
      response = {
        status: false,
        error: "senha incorreta!",
        data: undefined,
      };
    }
  } else {
    response = {
      status: false,
      error: "usuario não encontrado!",
      data: undefined,
    };
  }
  return response;
};
