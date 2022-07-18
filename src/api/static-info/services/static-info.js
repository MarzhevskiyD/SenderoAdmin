'use strict';

/**
 * static-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-info.static-info');
