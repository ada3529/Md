const ddb = require('../lib/inrl')

ddb.bot(
	{
		pattern: 'ping ?(.*)',
		fromMe: true,
		desc: 'To check ping',
		type: 'misc',
	},
	async (conn, match) => {
		const start = new Date().getTime()
		await conn.send('```Ping!```')
		const end = new Date().getTime()
		return await conn.sendmessage(
			'*Pong!*\n ```' + (end - start) + '``` *ms*'
		)
	}
)
