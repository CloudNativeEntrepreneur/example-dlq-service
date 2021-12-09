export const config = {
  port: parseInt(process.env.PORT || "", 10) || 3999,

  handlerBasePath: process.env.HANDLER_BASE_PATH || "src",
};
