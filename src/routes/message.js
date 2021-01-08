import { Router } from 'express';
 
const router = Router();
 
router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.findAll();
  return res.send(messages);
});
 
router.get('/:messageID', async (req, res) => {
  const message = await req.context.models.Message.findByPk(req.params.messageID);
  return res.send(message);
});
 
router.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    text: req.body.text,
    userID: req.context.me.id
  });
 
  return res.send(message);
});
 
router.delete('/:messageID', async (req, res) => {
  const result = await req.context.models.Message.destroy({
    where: { id: req.params.messageID }
  });
 
  return res.send(true);
});
 
export default router;