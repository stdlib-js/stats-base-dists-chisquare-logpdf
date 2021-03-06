/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var gammaFactory = require( '@stdlib/stats-base-dists-gamma-logpdf' ).factory;


// MAIN //

/**
* Returns a function for evaluating the natural logarithm of the probability density function (PDF) for a chi-squared distribution with degrees of freedom `k`.
*
* @param {NonNegativeNumber} k - degrees of freedom
* @returns {Function} logPDF
*
* @example
* var logpdf = factory( 0.5 );
*
* var y = logpdf( 2.0 );
* // returns ~-2.981
*
* y = logpdf( 1.0 );
* // returns ~-1.961
*/
function factory( k ) {
	return gammaFactory( k/2.0, 0.5 );
}


// EXPORTS //

module.exports = factory;
