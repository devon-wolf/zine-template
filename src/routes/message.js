import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
 
const router = Router();
 
router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});
 
router.get('/:messageID', (req, res) => {
  return res.send(req.context.models.messages[req.params.messageID]);
});
 
router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userID: req.context.me.id,
  };
 
  req.context.models.messages[id] = message;
 
  return res.send(message);
});
 
router.delete('/:messageID', (req, res) => {
  const {
    [req.params.messageID]: message,
    ...otherMessages
  } = req.context.models.messages;
 
  req.context.models.messages = otherMessages;
 
  return res.send(message);
});
 
export default router;