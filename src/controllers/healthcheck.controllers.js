import { APIResponse } from "../utils/api-response.js";

const heatlhCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new APIResponse(200, { message: "Server is running" }));
  } catch (error) {}
};

export { heatlhCheck };
