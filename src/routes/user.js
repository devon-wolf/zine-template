import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const users = await req.context.models.User.findAll();
	return res.send(users);
});

router.get('/:userID', async (req, res) => {
	const user = await req.context.models.User.findByPk(req.params.userID);
	return res.send(user);
});

export default router;