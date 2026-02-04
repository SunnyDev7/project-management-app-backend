import { APIResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/*
const healthCheck = (req, res, next) => {
  try {
    res
      .status(200)
      .json(new APIResponse(200, { message: "Server is running" }));
  } catch (error) {
    next(error);
  }
};
*/

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new APIResponse(200, { message: "Server is Running" }));
});

export { healthCheck };
