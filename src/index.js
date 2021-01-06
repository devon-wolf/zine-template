import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models, { sequelize } from './models';
import routes from './routes';

const app = express();

// third-party middleware
app.use(cors());

// builtin middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/users', routes.user);
app.use('/messages', routes.message);


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


// moving it down here didn't seem to resolve the issue with models.users[1]
// custom middleware now that database is seeded
app.use((req, res, next) => {
	req.context = {
		models,
		me: models.users[1]
	};
	next();
});

// route to session model now that database is seeded
app.use('/session', routes.session);