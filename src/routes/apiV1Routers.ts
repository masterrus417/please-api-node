import { Router } from 'express';
import { getEntity, createEntity, getEntityById, getEntityByType, deleteEntity, updateEntityAttr } from '../controllers/entityController';
import { authenticate } from '../middleware/authMiddleware';


const apiV1 = Router();

apiV1.get('/entity', authenticate ,getEntity);
apiV1.get('/entity/:id',authenticate ,getEntityById);
apiV1.post('/entity/:rentity_type_name',authenticate ,createEntity);
apiV1.get('/entity/:rentity_type_name/type',authenticate ,getEntityByType);
apiV1.delete('/entity/:id',authenticate ,getEntityByType,deleteEntity);
apiV1.patch('/entity/:id',authenticate,updateEntityAttr );

export default apiV1;
