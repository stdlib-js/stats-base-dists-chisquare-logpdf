<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_pdf" align="center" raw="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" alt="Probability density function (PDF) for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" data-equation="eq:chisquare_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/chisquare/logpdf/docs/img/equation_chisquare_pdf.svg" alt="Probability density function (PDF) for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-chisquare-logpdf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var logpdf = require( '@stdlib/stats-base-dists-chisquare-logpdf' );
```

#### logpdf( x, k )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = logpdf( 0.1, 1.0 );
// returns ~0.182

y = logpdf( 0.5, 2.0 );
// returns ~-0.943

y = logpdf( -1.0, 4.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0 );
// returns Infinity
```

#### logpdf.factory( k )

Returns a `function` for evaluating the [PDF][pdf] for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var myLogPDF = logpdf.factory( 6.0 );

var y = myLogPDF( 3.0 );
// returns ~-2.075

y = myLogPDF( 1.0 );
// returns ~-3.273
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var logpdf = require( '@stdlib/stats-base-dists-chisquare-logpdf' );

var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = randu() * 10.0;
    y = logpdf( x, k );
    console.log( 'x: %d, k: %d, ln(f(x;k)): %d', x.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chisquare-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chisquare-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-chisquare-logpdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-logpdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chisquare-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chisquare-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chisquare-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chisquare-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-logpdf/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-logpdf/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-logpdf/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chisquare-logpdf/main/LICENSE

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
