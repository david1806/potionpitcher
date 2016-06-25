// var declarations
// create + instantiate objects
// 					name 			amount	incAmount 	rate 	price 	sellRate 	unlocked
var	rh = new Herb(	"Red Herb", 	0,		1,			0,		1,		0,			1),
	bh = new Herb(	"Blue Herb",	0,		1,			0,		1,		0,			1),
	yh = new Herb(	"Yellow Herb",	0,		1,			0,		1,		0,			1),
	ph = new Herb(	"Purple Herb",	0,		1,			0,		1,		0,			0),
	gh = new Herb(	"Green Herb",	0,		1,			0,		1,		0,			0),
	oh = new Herb(	"Orange Herb",	0,		1,			0,		1,		0,			0);

var gold = new Currency("gold", 0, 0);

// doc ready section
$(document).ready(function() {
	$('#findHerbs').click(function () {
		var locationValue = $('#herbLocationsList').val();
		
		var herbAmount = 0;
		var herbToFind = "";
		
		switch (locationValue) {
			case "Garden":
				herbAmount = 1;
				herbToFind = rh;
				break;
			case "Swamp":
				herbAmount = 2;
				herbToFind = bh;
				break;
			case "SunnyDesert":
				herbAmount = 2;
				herbToFind = yh;
				break;
			case "LavaPits":
				herbAmount = 2;
				herbToFind = rh;
				break;
		}
	
		herbToFind.addHerbsByAmount(herbAmount);
		
		updateValues();
	});
	
	$('#sellHerbs').click(function () {
		var ddlValue = $('#marketHerbList').val();
		var herbAmount = $('#marketSellRate').val();
		var herbToSell = "";
		
		switch (ddlValue) {
			case "rh":
				herbToSell = rh;
				break;
			case "bh":
				herbToSell = bh;
				break;
			case "yh":
				herbToSell = yh;
				break;
			case "ph":
				herbToSell = ph;
				break;
			case "gh":
				herbToSell = gh;
				break;
			case "oh":
				herbToSell = oh;
				break;
		}
		
		herbToSell.sellHerbsByAmount(herbAmount);
		
		updateValues();
	});
	
	$('.nav-tabs > li > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor
		
		//get displaying tab content jQuery selector
		var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');					
		
		//find actived navigation and remove 'active' css
		var actived_nav = $('.nav-tabs > li.active');
		actived_nav.removeClass('active');
		
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
		
		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	});
	
	$('.botHalfNav > li > a').click(function(event){
		event.preventDefault();//stop browser to take action for clicked anchor
		
		//get displaying tab content jQuery selector
		var active_tab_selector = $('.botHalfNav > li.active > a').attr('href');					
		
		//find actived navigation and remove 'active' css
		var actived_nav = $('.botHalfNav > li.active');
		actived_nav.removeClass('active');
		
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
		
		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
		
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	});
	
	loadDropdowns();
	updateValues();
});

// procedures
function updateValues() {
	// stats table
	$('#goldCountST').text(gold.amount);
	$('#rhCountST').text(rh.amount);
	$('#bhCountST').text(bh.amount);
	$('#yhCountST').text(yh.amount);
	$('#phCountST').text(ph.amount);
	$('#ghCountST').text(gh.amount);
	$('#ohCountST').text(oh.amount);
}

function loadDropdowns() {
	$("select option[value*='marketPurpleHerb']").prop("disabled",true);
	$("select option[value*='marketGreenHerb']").prop("disabled",true);
	$("select option[value*='marketOrangeHerb']").prop("disabled",true);
}



