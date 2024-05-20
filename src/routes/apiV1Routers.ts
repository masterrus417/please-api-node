import { Router } from 'express';
import { getEntity, createEntity, getEntityById, getEntityByType, deleteEntity, updateEntityAttr } from '../controllers/entityController';
import { authenticate } from '../middleware/authMiddleware';
import { getStageByEntityID, getStageActionByEntityID } from '../controllers/stageController';
import { getHistory } from '../controllers/historyController';
import { getEntityLinks, deleteEntityLink, createEntityLink } from '../controllers/linkController';

const apiV1 = Router();

apiV1.get('/entity', authenticate ,getEntity);
apiV1.get('/entity/:id',authenticate ,getEntityById);
apiV1.post('/entity/:rentity_type_name',authenticate ,createEntity);
apiV1.get('/entity/:rentity_type_name/type',authenticate ,getEntityByType);
apiV1.delete('/entity/:id',authenticate ,getEntityByType,deleteEntity);
apiV1.patch('/entity/:id',authenticate,updateEntityAttr );

apiV1.get('/entity/:id/stage', authenticate, getStageByEntityID);
apiV1.get('/entity/:id/action', authenticate, getStageActionByEntityID);

apiV1.get('/entity-link/:id', authenticate, getEntityLinks);
apiV1.delete('/entity-link/:id/link/:id_link', authenticate, deleteEntityLink);
apiV1.post('/entity-link/:id/link/:id_link', authenticate, createEntityLink);

apiV1.get('/history/:id', authenticate, getHistory);

export default apiV1;
