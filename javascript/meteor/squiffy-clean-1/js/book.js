
/* ------------------- */
/*  Book Now function  */
/* ------------------- */
function addRefrig($servicerow) {

	// Get cost associated with this line
	var servCost = Number($servicerow.find(".servCost").text());
	var count = Number($servicerow.find(".refrigNum").val());
	var refrigType = $servicerow.find(".refrigType").text().toLowerCase();
	var totalLine = servCost * count;
	var prevAmt = 0;

	var refrigWord = "";
	if (count < 2) { refrigWord = "refrigerator"; }
	else { refrigWord = "refrigerators"; }

	// Delete coresponding line and add new line to the itemized section
	$prevItemLine = $("#bookSection1").find(".itemizedSection").find("div.line[data-type='" + refrigType + "']");
	
	if ($prevItemLine.length > 0) prevAmt = $prevItemLine.attr("data-totalLine");
	totalEstimate = totalEstimate - Number(prevAmt);

	$prevItemLine.remove();
	var lineHTML = '<div class="row line" data-type="' + refrigType + '" data-totalLine="' + totalLine + '">' + count + ' ' + refrigType + ' ' + refrigWord + ' for $' + totalLine + '</div>';
	$("#bookSection1").find(".itemizedSection").append(lineHTML);

	// Add amount to the total estimate
	totalEstimate = totalEstimate + totalLine;
	$("#bookSection1").find(".estNum").text(totalEstimate);

}


/* ------------------- */
/*  Book Now function  */
/* ------------------- */
function bookNow() {

}


/* ------------------ */
/* --- Initialize --- */
/* ------------------ */

/* Initialize Foundation */
$(document).foundation();


/* Check if browser supports HTML5 type "number". If it is not supported and it falls back to type "text" then use JQuery UI for the spinner */
var input = document.createElement('input');
input.setAttribute('type', 'number');

if (input.type == 'text') {
    $('input.refrigNum').spinner({
	    min: 1,
	    max: 7,
	    step: 1
	});
}


$('input.refrigNum').spinner({
    min: 1,
    max: 7,
    step: 1
});   
$('input.refrigNum').spinner("value", 1);     


/* Populate total estimate */
var totalEstimate = 2591;
$("#bookSection1").find(".estNum").text(totalEstimate);


/* Populate building details */
var bldgDetailsHTML = '<div class="row line">Building 1, twice weekly 2000 sq Ft</div>' + 
                      '<div class="row line">Building 2, twice weekly 4000 sq Ft</div>';
$("#bookSection1").find(".itemizedSection").append(bldgDetailsHTML);

