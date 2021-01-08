// define user model
const user = (sequelize, DataTypes) => {
	const User = sequelize.define('user', {
		username: {
			type: DataTypes.STRING,
			unique: true,
		}
	});

	// create association between user and message models
	User.associate = (models) => {
		User.hasMany(models.Message, { onDelete: 'CASCADE' }); 
		/* will want to remove/update this cascading delete when working with the actual values I intend; this is for the tutorial */
	};

	// let user login by email or username
	User.findbyLogin = async (login) => {
		let user = await User.findOne({
			where: { username: login }
		});

		if (!user) {
			user = await User.findOne({
				where: { email: login }
			});
		};
		
		return user;
	};

	return User;
};

export default user;