import express from "express";

import { heatlhCheck } from "../controllers/healthcheck.controllers.js";

const router = express.Router();

router.route("/").get(heatlhCheck);

export default router;
