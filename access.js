import fs from 'fs/promises';

import { constants } from 'fs';

// constants.F_OK - exists
// constants.R_OK - read
// constants.W_OK - write


try {
	await fs.access('res.txt', constants.F_OK);
	console.log('file exists');
} catch {
	console.error('file does not exists');
}

try {
	await fs.access('test.txt', constants.R_OK);
	console.log('can read');
} catch {
	console.error('cannot read');
}

try {
	await fs.access('test.txt', constants.W_OK);
	console.log('can write');
} catch {
	console.error('cannot write');
}

try {
	await fs.access('res.txt', constants.R_OK | constants.W_OK);
	console.log('can access');
} catch {
	console.error('cannot access');
}