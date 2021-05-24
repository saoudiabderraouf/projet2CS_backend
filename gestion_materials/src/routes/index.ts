import { Router } from "express";
import {
  addEquip,
  deleteEquip,
  get,
  getEquip,
  getEquips,
  updateEquip,
} from "../controllers/equipment";

import {
  addUsedEquip,
  deleteUsedEquip,
  getUsedEquip,
  getUsedEquips,
  updateUsedEquip,
} from "../controllers/usedEquipment";

const router = Router();

router.get("/", get);
// Routes for Equipments
router.post("/Equipment", addEquip);
router.get("/Equipment", getEquips);
router.put("/Equipment/:uuid", updateEquip);
router.delete("/Equipment/:uuid", deleteEquip);
router.get("/Equipment/:uuid", getEquip);

// Routes for UsedEquipments
router.post("/usedEquipment", addUsedEquip);
router.get("/usedEquipment", getUsedEquips);
router.put("/usedEquipment/:uuid", updateUsedEquip);
router.delete("/usedEquipment/:uuid", deleteUsedEquip);
router.get("/usedEquipment/:uuid", getUsedEquip);

export default router;
