import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from assert ("../swagger.json");

const router = Router();

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));

module.export = router;