var keystone = require('keystone');

keystone.init({

	'name': 'localhosting',
	'brand': 'localhosting',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'd5ce882ba200ed1ff8ff4ba7b48f8b5b6dbdd2ee75095b660ad8d702b256e8647bfa8c2bd23b867f20f5dec064c121df0755306c3a2b17de4b9e44fd64465deb',

});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
