const {
	processors,
	tags,
	regexString,
} = require('./engines.js');
const {MessageEmbed} = require('discord.js');

module.exports = function toEmbed(string) {
	const embed = new MessageEmbed();
	const errors = [];
	let source = string.replace(/[^:]\$blank/ig, '\u200B') + '\n$end';
	
	for (const tag in tags) {
		const {
			args,
			method,
		} = tags[tag];
		const types = args.map(arg => arg.replace('?', ''));
		const regex = new RegExp(regexString.replace('@tag', tag), 'im');
		
		while (regex.test(source)) {
			const logArgs = [];
			const valides = [];
			const andTagRegex = /\s+\$(?:and|&)\s+/i;
			let [, content] = regex.exec(source);
			source = source.replace(new RegExp(`(?:^|\\s)\\$${tag}(?:$|\\s)`, 'i'), ' $end ');
			content = content.trim();
			
			const argContents = args.length === 1 ? [content] : andTagRegex.test(content) ? content.split(andTagRegex) : content.split(/\s*[\r\n]+\s*/);
			types.forEach((type, index) => {
				const fullArg = args[index];
				const arg = argContents[index];
				
				if (arg && !/^\$null$/i.test(arg)) {
					const valid = processors[type](arg);
					if (valid === 'invalid') logArgs.push('invalid: ' + type); else {
						logArgs.push('valid: ' + type);
						valides[index] = valid;
					}
				} else if (fullArg.startsWith('?')) {
					logArgs.push('omit: ' + type);
					valides[index] = null;
				} else {
					logArgs.push('forget: ' + type);
					valides[index] = 'GodArgumentError';
				}
			});
			
			if (!valides.find((arg) => arg === 'GodArgumentError')) embed[method](...valides);
			else errors.push(`Missing argument(s): ${method}( ${logArgs.join(', ')} )`);
		}
	}
	
	return {
		embed,
		errors,
	};
};
