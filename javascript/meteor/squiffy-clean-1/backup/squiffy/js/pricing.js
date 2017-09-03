/* ------------------------------ */
/*  Global variables declaration  */
/* ------------------------------ */
var selected_data = [];

/* -------------------- */
/* addBuilding function */
/* -------------------- */
function addBuilding() {

	var newBldgNum = parseInt($(".buildingSection").length) + 1;

	var bldgSectionHTML = $(".buildingSectionSample").html();

	var contentHTML = '<div class="buildingSection" id="' + 'bldg-' + newBldgNum + '">' + bldgSectionHTML + '</div>';

	$("#buildingSectionGroup").append(contentHTML);
    var $section = $("#buildingSectionGroup").find("#bldg-" + newBldgNum);	

    // overwrite new building number after appending
    $section.find(".bldgName").text("Building " + newBldgNum);

    // overwrite radio button name after appending 
    $section.find("input[name^=sqftOpt]").attr("name", "sqftOpt-bldg-" + newBldgNum); 

    // overwrite radio button name after appending 
    $section.find("input[name^=sqftInput]").attr("name", "sqftInput-bldg-" + newBldgNum); 

}


/* -------------------------- */
/* Done Editing Sqft function */
/* -------------------------- */
function doneEditingSqft($sqftElem) {

    $sqftElem.removeClass('editable');
    $sqftElem.addClass('notEditable');
    $sqftElem.attr('contenteditable', 'false');
    //$(document).trigger('click');
}


/* -------------------------- */
/* Edit Sqft function */
/* -------------------------- */
function editSqft($sqftElem) {

    if ($sqftElem.attr('contenteditable') == 'false') { // Enable sqft element
        $sqftElem.removeClass('notEditable');        
        $sqftElem.addClass('editable');
        $sqftElem.attr('contenteditable', 'true');
        $sqftElem.focus();
    } else {
        //doneEditingSqft($sqftElem);

    }
}

/* -------------------------------- */
/* Edit Cleaning frequency function */
/* -------------------------------- */
function editFrequency($freqElem) {

    //alert("editFrequency is triggered...");

    if ($freqElem.prop("disabled") == true ) {  $freqElem.prop("disabled", false); } //Enable it
//    else { $freqElem.prop("disabled", true); } //Disable it 
}




/* -------------------------------- */
/* Edit Details Line */
/* -------------------------------- */
function editDetailsLine($editBtn) {

    $freqElem = $editBtn.closest(".detailsRow").find(".frequencyDropdown");
    editFrequency($freqElem);

    $sqftElem = $editBtn.closest(".detailsRow").find(".sqftNum");
    editSqft($sqftElem);
}


/* ---------------------------------- */
/* Change Cleaning frequency function */
/* ---------------------------------- */
function onChangeFrequency($freqElem) {

    //alert("onChangeFrequency is triggered...");

    // Update frequency in 'selected_data' array
    var indexId = $freqElem.closest(".bldgBlock").attr("data-index");

    if (indexId >= 0 && indexId < selected_data.length) {
        //console.log("Before update... selected_data[indexId].sqft:" + selected_data[indexId].sqft);
        selected_data[indexId].numOfDays = $freqElem.val();
    }

    // Update corresponding frequency in page 1
    var bldgId = $freqElem.closest(".bldgBlock").attr("data-id");
    $("input[name=sqftOptRow-" + bldgId + "]").val($freqElem.val());

    event.stopImmediatePropagation();
}



/* -------------------------------- */
/*  Loose Edit Sqft Focus function  */
/* -------------------------------- */
function looseEditSqftFocus($sqftNumElem) {

    // Update Sqft in 'selected_data' array
    var indexId = parseInt($sqftNumElem.closest(".bldgBlock").attr("data-index"));
    console.log("indexId:" + indexId);

    if (indexId >= 0 && indexId < selected_data.length) {
        //console.log("Before update... selected_data[indexId].sqft:" + selected_data[indexId].sqft);
        selected_data[indexId].sqft = $sqftNumElem.text();
    }

    // Update total
    var newTotal = 0;
    for (var i=0; i<selected_data.length; i++) {
        newTotal = newTotal + parseInt(selected_data[i].sqft);
        console.log("index:" + i + ", selected_data[i].sqft:" + selected_data[i].sqft + ", newTotal:" + newTotal); 
    }
    $sqftNumElem.closest(".confirmBldgOptionsSelection").find(".totalRow .sqftNum").text(newTotal);


    // Update corresponding sqft in page 1
    var bldgId = $sqftNumElem.closest(".bldgBlock").attr("data-id");
    $("input[name=sqftInput-" + bldgId + "]").val($sqftNumElem.text());

}

/* ----------------------------------------------- */
/* Determine if dropdwon option should be selected */
/* ----------------------------------------------- */
function isOptionSelected(num1, num2) {

    if (num1 === num2) { return 'selected';}
    else { return "";}    

}


/* -------------------- */
/* "Go" button function */
/* -------------------- */
function goBtn() {

    var totalSqft = 0;
    var numDaysDescr = "";
    var index = 0;

	$(".buildingSection").each(function() {

		var sectionId = $(this).attr("id");
        var bldgDetails = {};
		bldgDetails.bldgName = $(this).find(".bldgName").text();
        bldgDetails.zipCode = $(this).find(".zipCodeInput").val();
		bldgDetails.numOfDays = $(this).find("input[name=sqftOpt-" + sectionId + "]:checked").val();
		bldgDetails.sqft = $(this).find("input[name=sqftOpt-" + sectionId + "]:checked").closest(".sqftOptRow").find(".sqftInput").val();


        numDaysDescr = $(this).find("input[name=sqftOpt-" + sectionId + "]:checked").parent().find("label").text();
        numDaysValue = $(this).find("input[name=sqftOpt-" + sectionId + "]:checked").val();
        totalSqft = totalSqft + Number(bldgDetails.sqft);

		//console.log("sectionId:" + sectionId + " bldgname:" + bldgDetails.bldgName + ", numOfDays:" + bldgDetails.numOfDays + ", numDaysDescr:" + numDaysDescr + ", bldgDetails.sqft:" + bldgDetails.sqft);

		selected_data.push(bldgDetails);

		//Display building and options selected

		var bldgSelectionHTML = '<div class="bldgBlock" data-id="' + sectionId  + '" data-index="' + index + '">' + 
                                    '<div class="row bldgNumRow">' + 
                            		    bldgDetails.bldgName + 
                            		'</div>' + 
    	                        	'<div class="row detailsRow">' + 
    		                            '<div class="small-4 medium-4 column frequencyCol" onclick="editFrequency($(this).find(\'.frequencyDropdown\')); event.stopPropagation();">' +
                                            '<select class="frequencyDropdown" disabled onchange="onChangeFrequency($(this));">' +
                                                '<option value="1" ' + isOptionSelected( parseInt("1"), parseInt(numDaysValue) ) + '>Once Weekly</option>' +
                                                '<option value="2" ' + isOptionSelected( parseInt("2"), parseInt(numDaysValue) ) + '>Twice Weekly</option>' +
                                                '<option value="3" ' + isOptionSelected( parseInt("3"), parseInt(numDaysValue) ) + '>Thrice Weekly</option>' +
                                                '<option value="4" ' + isOptionSelected( parseInt("4"), parseInt(numDaysValue) ) + '>Four Days a Week</option>' +
                                                '<option value="5" ' + isOptionSelected( parseInt("5"), parseInt(numDaysValue) ) + '>Five Days a Week</option>' +
                                                '<option value="6" ' + isOptionSelected( parseInt("6"), parseInt(numDaysValue) ) + '>Six Days a Week</option>' +
                                                '<option value="7" ' + isOptionSelected( parseInt("7"), parseInt(numDaysValue) ) + '>Seven Days a Week</option>' +                                                
                                            '</select>' + 
    		                            '</div>' +  
                                        '<div class="small-3 medium-2 column sqftNum notEditable" contenteditable="false" onblur="looseEditSqftFocus($(this));" onclick="editSqft($(this));">' +
                                            bldgDetails.sqft +
                                        '</div>' +                                           
    		                            '<div class="small-1 medium-1 column sqftLabel">' +
    		                                'SqFt' +
    		                            '</div>' +    
    		                            '<div class="small-4 medium-2 column end">' + 
    		                                '<a href="#" class="btn btnSmall editBtn" onclick="editDetailsLine($(this));">Edit</a>' + 
    		                            '</div>' +     
    		                        '</div>' +
                                '</div>';


		$(".confirmBldgOptionsSelection").append(bldgSelectionHTML);
        index = index + 1; 

	});

    var totalHTML = '<hr class="partialHR"/>' +
                    '<div class="row totalRow">' + 
                        '<div class="small-4 medium-4 column frequencyCol">' +
                            'Total' + 
                        '</div>' +     
                        '<div class="small-3 medium-2 column sqftNum">' +
                            totalSqft +
                        '</div>' +                          
                        '<div class="small-1 medium-1 column end sqftLabel">' +
                            'SqFt' +
                        '</div>' +                          
                    '</div>' +
                    '<hr/>';     

    $(".confirmBldgOptionsSelection").append(totalHTML);  

	$("#content1").hide();
	$("#content2").show();

}




/* -------------------- */
/* "Go" button function */
/* -------------------- */
function sendBtn() {


    // Validate email both email addresses are the same
    var emailAddrVal1 = $("#content2 #emailAddrInput1").val();
    var emailAddrVal2 = $("#content2 #emailAddrInput2").val();

    if ($.trim(emailAddrVal1) !== $.trim(emailAddrVal2) ) {

        $("#emailErrorMsg").show();
        return false;
    }

    // Send data to backend
    var dataForBackend = { emailAddr: emailAddrVal1, buildings: selected_data };

    $.ajax({
            type: "POST",
            url: "senddata_api",
            data: JSON.stringify(dataForBackend),
            cache: false,
            success: function(data){
                    alert(data); //Returning value
                    //location.href = "pricing_submit.html";
            }
    });

    console.log("JSON.stringify(dataForBackend):" + JSON.stringify(dataForBackend));

    // Display confirmation inside a Foundation modal window 
    $('#confirmationWindow').foundation('open');
}	



/* ------------------------ */
/*  Display Error function  */
/* ------------------------ */
function displayError(type) {

    var errorHTML = "";

    switch (type) {
        case 'zipcode':
            errorHTML = "<div>Ah, we are sorry. We're not available in your zipcode yet. It's in our roadmap for sure.</div>" + 
                        "<br/>" + 
                        "<div>Would you like to receive email notification when we are?</div>" + 
                        "<div class='emailAddrLine row'>" +    
                            "<div class='small-12 medium-3 column'>" + 
                                "<span class='emailAddrLabel'>Email Address</span>" + 
                            "</div>" + 
                            "<div class='small-12 medium-9 column end'>" +
                                "<input type='text' placeholder='' class='emailAddrInput' id='emailAddrInput2'>" + 
                            "</div>" + 
                        "</div>" + 
                        "<div class='buttonWrapper'>" + 
                            "<div class='btn sendBtn'><a href='javascript:void(0);' onclick='reqEmailNotifBtn();'>Send</a></div>" + 
                            "<div class='btn cancelBtn'><a href='#' data-close id='cancelInsideModalBtn'>Cancel</a></div>" + 
                        "</div>";    
            break;
    }

    $('#errorWindow').find('#errorMsg').html(errorHTML);
    $('#errorWindow').foundation('open');

}


/* ---------------------- */
/*  "ZipCode" validation  */
/* ---------------------- */
$(".zipCodeInput").blur(function() {

    var dataForBackend = { zipcode: $(this).val() };

    // validate zipcode
    $.ajax({
        type: "POST",
        url: "zipcode_api",
        data: JSON.stringify(dataForBackend),
        cache: false,
        success: function(data){

            // If error
            displayError('zipcode');
        }
    });

    displayError('zipcode');

});


/*
$(document).ready(function() {

    $("#goBtn").on('click', function () { 

        var zipCodeInput = $(".zipCodeInput").val();
        var sqftInput = $(".sqftInput").val();
        var sqftOpt = $(".sqftOpt").val();
        var jsonData = {zipCode: zipCodeInput, sqft: sqftInput, frequency: sqftOpt, buildingNum: "1"};

        alert(JSON.stringify(jsonData) + "test:" +jsonData.zipCode);



        $.ajax({
            type: "POST",
            url: "api/createLead",
            data: jsonData,
            cache: false,
            success: function(data){
                    alert(data); //Returning value
                    //location.href = "pricing_submit.html";
            }
            });


        });


    }); //Document ready
*/
