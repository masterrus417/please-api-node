"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entityController_1 = require("../controllers/entityController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const stageController_1 = require("../controllers/stageController");
const historyController_1 = require("../controllers/historyController");
const linkController_1 = require("../controllers/linkController");
const filterController_1 = require("../controllers/filterController");
const apiV1 = (0, express_1.Router)();
apiV1.get("/filter", authMiddleware_1.authenticate, filterController_1.getFilter);
apiV1.get("/filter/:rentity_filter_name", authMiddleware_1.authenticate, filterController_1.getFilterParamsByTypeName);
apiV1.get("/entity", authMiddleware_1.authenticate, entityController_1.getEntity);
apiV1.get("/entity/:id", authMiddleware_1.authenticate, entityController_1.getEntityById);
apiV1.post("/entity/:rentity_type_name/created", authMiddleware_1.authenticate, entityController_1.createEntity);
apiV1.get("/entity/:rentity_type_name/type", authMiddleware_1.authenticate, entityController_1.getEntityByType);
apiV1.delete("/entity/:id/deleted", authMiddleware_1.authenticate, entityController_1.deleteEntity);
apiV1.patch("/entity/:id/update", authMiddleware_1.authenticate, entityController_1.updateEntityAttr);
apiV1.get("/entity/:id/stage", authMiddleware_1.authenticate, stageController_1.getStageByEntityID);
apiV1.get("/entity/:id/action", authMiddleware_1.authenticate, stageController_1.getStageActionByEntityID);
apiV1.post("/stage/:id/action/:raction_id", authMiddleware_1.authenticate, stageController_1.complitedStage);
apiV1.get("/entity-link/:rentity_type_name/:id/link", authMiddleware_1.authenticate, linkController_1.getEntityLinks);
apiV1.delete("/entity-link/:id/link/:id_link/deleted", authMiddleware_1.authenticate, linkController_1.deleteEntityLink);
apiV1.post("/entity-link/:id/link/:id_link/created", authMiddleware_1.authenticate, linkController_1.createEntityLink);
apiV1.get("/history/:id", authMiddleware_1.authenticate, historyController_1.getHistory);
exports.default = apiV1;
