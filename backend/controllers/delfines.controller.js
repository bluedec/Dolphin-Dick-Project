import { DelfinesService } from "../services/delfines.service.js";

export const getDelfines = async (req, res, next) => {
  const delfines = await DelfinesService.getDelfines();
  res.send(JSON.stringify(delfines));
};
