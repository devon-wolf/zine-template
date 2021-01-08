import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models, { sequelize } from './models';
// note, tutorial code doesn't include sequelize on that line
import routes from './routes';

const app = express();

// third-party middleware
app.use(cors());

// builtin middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom middleware now that database is seeded
app.use(async (req, res, next) => {
	req.context = {
		models,
		me: await models.User.findByLogin('devon')
	};
	next();
});

// routes
app.use('/users', routes.user);
app.use('/messages', routes.message);
app.use('/session', routes.session);


// START
const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
	if (eraseDatabaseOnSync) {
		createUsersWithMessages();
	};

	app.listen(process.env.PORT, () => {
		console.log(`Example app listening on port ${process.env.PORT}!!`);
	});
});

// database seeding
const createUsersWithMessages = async () => {
	await models.User.create(
		{
			username: 'devon',
			messages: [
				{
					text: 'This is my first message.'
				}
			]
		},
		{
			include: [models.Message]
		}
	);

	await models.User.create(
		{
			username: 'ripvanwinkle',
			messages: [
				{
					text: 'could really use a nap'
				},
				{
					text: 'wait, what time is it?'
				}
			]
		},
		{
			include: [models.Message]
		}
	);
};