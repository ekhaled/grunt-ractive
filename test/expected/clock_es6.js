import Ractive from 'ractive';
var __options__ = {
	template: {v:3,t:[{p:[1,1,0],t:7,e:"svg",a:{viewBox:"0 0 100 100"},f:[{p:[3,2,30],t:7,e:"g",a:{transform:"translate(50,50)"},f:[{p:[4,3,65],t:7,e:"circle",a:{"class":"clock-face",r:"48"}}," ",{t:4,f:[{p:[8,4,184],t:7,e:"line",a:{"class":"minor",y1:"42",y2:"45",transform:["rotate( ",{t:2,x:{r:["i","minor.length"],s:"360*_0/_1"},p:[8,59,239]}," )"]}}],i:"i",r:"minor",p:[7,3,168]}," ",{t:4,f:[{p:[14,4,312],t:7,e:"line",a:{"class":"major",y1:"35",y2:"45",transform:["rotate( ",{t:2,x:{r:["i","major.length"],s:"360*_0/_1"},p:[14,59,367]}," )"]}}],i:"i",r:"major",p:[13,3,296]}," ",{p:[20,3,445],t:7,e:"line",a:{"class":"hour",y1:"2",y2:"-20",transform:["rotate( ",{t:2,x:{r:["date"],s:"30*_0.getHours()+_0.getMinutes()/2"},p:[20,57,499]}," )"]}}," ",{p:[26,3,589],t:7,e:"line",a:{"class":"minute",y1:"4",y2:"-30",transform:["rotate( ",{t:2,x:{r:["date"],s:"6*_0.getMinutes()+_0.getSeconds()/10"},p:[26,59,645]}," )"]}}," ",{p:[32,3,737],t:7,e:"g",a:{transform:["rotate( ",{t:2,x:{r:["date"],s:"6*_0.getSeconds()"},p:[32,25,759]}," )"]},f:[{p:[35,4,799],t:7,e:"line",a:{"class":"second",y1:"10",y2:"-38"}}," ",{p:[36,4,842],t:7,e:"line",a:{"class":"second-counterweight",y1:"10",y2:"2"}}]}]}]}]},
	css:"svg{width:100%;height:100%}.clock-face{stroke:#333;fill:#fff}.minor{stroke:#999;stroke-width:.5}.major{stroke-width:1}.hour,.major{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:#b40000}.second-counterweight{stroke-width:3}",
},
component={},
__prop__,
__export__;


	component.exports = {
		data: {
			minor: new Array( 60 ),
			major: new Array( 12 )
		},

		init: function () {
			var self = this, interval;

			this.set( 'date', new Date() );

			interval = setInterval( function () {
				self.set( 'date', new Date() );
			});

			this.on( 'teardown', function () {
				clearInterval( interval );
			});
		}
	};

if ( typeof component.exports === "object" ) {
	for ( __prop__ in component.exports ) {
		if ( component.exports.hasOwnProperty(__prop__) ) {
			__options__[__prop__] = component.exports[__prop__];
		}
	}
}

__export__ = Ractive.extend( __options__ );

export default __export__;