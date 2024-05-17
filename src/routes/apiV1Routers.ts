import { Router } from 'express';
import { getEntity, createEntity, getEntityById } from '../controllers/entityController';
import { authenticate } from '../middleware/authMiddleware';


const apiV1 = Router();

apiV1.get('/entitys', authenticate ,getEntity);
apiV1.get('/entitys/:id',authenticate ,getEntityById);
apiV1.post('/entitys/:rentity_type_name',authenticate ,createEntity);


export default apiV1;
