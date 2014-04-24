'use strict';
module.exports = function (buf) {
	if (!buf || buf.length < 12) {
		return false;
	}

	return require('image-type')(buf) || require('archive-type')(buf) || false;
};
