'use strict';

import { assetUrl, baseUrl } from '../../../single-spa/asset-url.js';

angular.
  module('core').
  filter('deployurl', function() {
    return function(input) {
      return baseUrl(input);
    };
  });
