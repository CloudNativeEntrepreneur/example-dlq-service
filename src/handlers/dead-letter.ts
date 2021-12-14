export const handle = async (
  request,
  response,
  event,
  { sync = false } = {}
) => {
  const { source, data, type } = event;

  request.log.info({
    msg: "✅ Item arrived in Dead Letter Service",
    source,
    data,
    type,
  });

  response.status(202).send();
};
