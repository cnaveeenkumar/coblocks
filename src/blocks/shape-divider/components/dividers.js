/**
 * Custom dividers
 */
const dividers = {};

dividers.angled =
<svg className="divider--angled" aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><polygon points="0,100 100,0 100,100"/></svg>

dividers.sloped =
<svg className="divider--sloped" aria-hidden xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 100 C 20 0 50 0 100 100 Z"></path></svg>

dividers.wavy =
<svg className="divider--wavy" height="100%" viewBox="0 0 100 10" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="m42.19.65c2.26-.25 5.15.04 7.55.53 2.36.49 7.09 2.35 10.05 3.57 7.58 3.22 13.37 4.45 19.26 4.97 2.36.21 4.87.35 10.34-.25s10.62-2.56 10.62-2.56v-6.91h-100.01v3.03s7.2 3.26 15.84 3.05c3.92-.07 9.28-.67 13.4-2.24 2.12-.81 5.22-1.82 7.97-2.42 2.72-.63 3.95-.67 4.98-.77z" fill-rule="evenodd" transform="matrix(1 0 0 -1 0 10)"/></svg>

dividers.triangle =
<svg className="divider--triangle" height="100%" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="m0 0 50 100 50-100z" fill-rule="evenodd" transform="matrix(1 0 0 -1 0 100)"/></svg>

dividers.rounded =
<svg className="divider--rounded" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="100%" height="100%" viewBox="0 0 240 24" enable-background="new 0 0 240 24" preserveAspectRatio="none">
	<path d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z"/>
</svg>

dividers.waves =
<svg className="divider--waves" fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
	<path d="M 1000 299 l 2 -279 c -155 -36 -310 135 -415 164 c -102.64 28.35 -149 -32 -232 -31 c -80 1 -142 53 -229 80 c -65.54 20.34 -101 15 -126 11.61 v 54.39 z"></path>
	<path d="M 1000 286 l 2 -252 c -157 -43 -302 144 -405 178 c -101.11 33.38 -159 -47 -242 -46 c -80 1 -145.09 54.07 -229 87 c -65.21 25.59 -104.07 16.72 -126 10.61 v 22.39 z"></path>
	<path d="M 1000 300 l 1 -230.29 c -217 -12.71 -300.47 129.15 -404 156.29 c -103 27 -174 -30 -257 -29 c -80 1 -130.09 37.07 -214 70 c -61.23 24 -108 15.61 -126 10.61 v 22.39 z"></path>
</svg>

export default dividers;
