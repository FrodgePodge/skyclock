# Notices

## Star and constellation data (`sky-data.js`)

Derived from the data files `stars.6.json`, `constellations.json` and `constellations.lines.json` of the
[d3-celestial](https://github.com/ofrohn/d3-celestial) project, which are used under its BSD 3-Clause licence. Those files
draw on the Hipparcos catalogue (ESA, 1997).

```
Copyright (c) 2015, Olaf Frohn
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

## Planet positions

Computed from the approximate Keplerian orbital elements for 1800-2050 published by E. M. Standish, NASA/JPL
(<https://ssd.jpl.nasa.gov/planets/approx_pos.html>). Apparent magnitudes use the standard Astronomical Almanac formulae.

## Sun and moon

The sun's position uses the usual textbook mean-longitude and equation-of-centre terms. The moon's uses the largest
terms of the periodic series for its longitude, latitude and distance given in Jean Meeus, *Astronomical Algorithms*
(chapter 47), after the ELP-2000/82 lunar theory; eclipse geometry follows the same book's approach (chapters 54 and
following). Only the published numerical coefficients are used, written out for this project.
