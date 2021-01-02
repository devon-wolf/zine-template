import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

let users = {
	1: {
		id: '1',
		username: 'ripvanwinkle'
	},
	2: {
		id: '2',
		username: 'pinewolf'
	}
};

let messages = {
	1: {
		id: '1',
		text: 'I could go for a nap',
		userID: '1'
	},
	2: {
		id: '2',
		text: 'do you smell food?',
		userID: '2'
	}
};

app.get('/users', (req, res) => {
	return res.send(Object.values(users));
});

app.get('/users/:userID', (req, res) => {
	return res.send(users[req.params.userID]);
});

app.get('/messages', (req, res) => {
	return res.send(Object.values(messages));
});

app.get('/messages/:messageID', (req, res) => {
	return res.send(messages[req.params.messageID]);
});

/* app.get('/users', (req, res) => {
	return res.send('GET HTTP method on user resource');
});

app.post('/users', (req, res) => {
	return res.send('POST HTTP method on user resource');
});

app.put('/users/:userID', (req, res) => {
	return res.send(`PUT HTTP method on user/${req.params.userID} resource`);
});

app.delete('/users/:userID', (req, res) => {
	return res.send(`DELETE HTTP method on user/${req.params.userID} resource`);
}); */

app.listen(process.env.PORT, () =>
	console.log(`Example app listening on port ${process.env.PORT}!!`),
);