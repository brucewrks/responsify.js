(function(d){var f=void 0,a=0,g=0;responsify=function(){return{currentSize:f,width:a,height:g}};d.fn.responsify=function(a){d(document).on("responsify",a)};d(document).ready(function(){function h(){var b,c,e;window.hasOwnProperty("innerWidth")?(e="inner",c=window):(e="client",c=document.documentElement||document.body);b=c[e+"Width"];c=c[e+"Height"];a=b;g=c;b=1200<=a?"lg":992<=a?"md":768<=a?"sm":"xs";b!==f&&(f=b,d(document).trigger("responsify",[b]))}h();d(window).resize(h)})})(jQuery);
