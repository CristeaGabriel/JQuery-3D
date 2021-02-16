var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.5.1.js";
script.src="jquery.svg3dtagcloud.min.js";

script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

$(document).ready(function(){
    var entries = [ 

        { label: 'Dev Blog', url: 'http://niklasknaack.blogspot.de/', target: '_top' },
        { label: 'Flashforum', url: 'http://www.flashforum.de/', target: '_top' },
        { label: 'Javascript-Forum', url: 'http://forum.jswelt.de/', target: '_top' },
        { label: 'CodePen', url: 'http://codepen.io/', target: '_top' },
        { label: 'three.js', url: 'http://threejs.org/', target: '_top' },
        { label: 'WebGLStudio.js', url: 'http://webglstudio.org/', target: '_top' },
        { label: 'JS Compress', url: 'http://jscompress.com/', target: '_top' },
        { label: 'TinyPNG', url: 'https://tinypng.com/', target: '_top' },
        { label: 'Can I Use', url: 'http://caniuse.com/', target: '_top' },
        { label: 'URL shortener', url: 'https://goo.gl/', target: '_top' },
        { label: 'Twitter', url: 'https://twitter.com/niklaswebdev', target: '_top' },
        { label: 'deviantART', url: 'http://nkunited.deviantart.com/', target: '_top' },
        { label: 'Gulp', url: 'http://gulpjs.com/', target: '_top' },
        { label: 'Browsersync', url: 'https://www.browsersync.io/', target: '_top' },
        { label: 'GitHub', url: 'https://github.com/', target: '_top' },
        { label: 'Shadertoy', url: 'https://www.shadertoy.com/', target: '_top' },
        { label: 'Starling', url: 'http://gamua.com/starling/', target: '_top' },
        { label: 'jsPerf', url: 'http://jsperf.com/', target: '_top' },
        { label: 'Foundation', url: 'http://foundation.zurb.com/', target: '_top' },
        { label: 'CreateJS', url: 'http://createjs.com/', target: '_top' },
        { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
        { label: 'jQuery Rain', url: 'http://www.jqueryrain.com/', target: '_top' },
        { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/', target: '_top' }
    
    ];
        

    var settings = {

        entries: entries,
        width: 480,
        height: 480,
        //width: '100%',
        //height: '100%',
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: '#111',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: .5,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15px',
        fontColor: '#fff',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        fontToUpperCase: false
    };
    
    $("#tag-cloud").svg3DTagCloud(settings);

});

