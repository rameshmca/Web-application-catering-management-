function calculateprice(){
	var elt= document.getElementById("pleat_item");
	var pleat= elt.options[elt.selectedIndex].value;
	
	elt = document.getElementById("boul_item");
	var boul= elt.options[elt.selectedIndex].value;
	
	elt= document.getElementById("katori");
	var katori= elt.options[elt.selectedIndex].value;
	
	pleat = parseInt(pleat);
	boul = parseInt(boul);
	katori= parseInt(katori);
	
	var total = pleat+boul+katori;
	document.getElementById("PicExtPrice").value=total;
	
}

function calculatemenu(){
	var elt= document.getElementById("sweets");
	var sweet= elt.options[elt.selectedIndex].value;
	
	elt=document.getElementById("icecream");
	var icecream= elt.options[elt.selectedIndex].value;
	
	elt = document.getElementById("vegitables");
	var vegitable= elt.options[elt.selectedIndex].value;
	
	elt= document.getElementById("roties");
	var roti= elt.options[elt.selectedIndex].value;
	
	sweet = parseInt(sweet);
	vegitable = parseInt(vegitable);
	roti= parseInt(roti);
	icecream=parseInt(icecream);
	
	var total = sweet+icecream+vegitable+roti;
	document.getElementById("price").value=total;
	
}jQuery.fn.multiselect = function() {
	$(this).each(function() {
		var checkboxes = $(this).find("input:checkbox");
		checkboxes.each(function() {
			var checkbox = $(this);
			// Highlight pre-selected checkboxes
			if (checkbox.prop("checked"))
				checkbox.parent().addClass("multiselect-on");

			// Highlight checkboxes that the user selects
			checkbox.click(function() {
 				if (checkbox.prop("checked"))
					checkbox.parent().addClass("multiselect-on");
				else
					checkbox.parent().removeClass("multiselect-on");
			});
		});
 	});
};
/*function getQuantity()
{
    //Assume form with id="theform"
    var menu_item = document.forms["menu_item"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany =0;
    //If the textbox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}
function calculategrand()
{	
	document.getElementById("gprice").value=s;
}