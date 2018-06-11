function calculateprice(){
	var elt= document.getElementById("pleat_item");
	var pleat= elt.options[elt.selectedIndex].value;
	
	var elt = document.getElementById("boul_item");
	var boul= elt.options[elt.selectedIndex].value;
	
	var elt= document.getElementById("katori");
	var katori= elt.options[elt.selectedIndex].value;
	
	pleat = parseInt(pleat);
	boul = parseInt(boul);
	katori= parseInt(katori);
	
	var total = pleat+boul+katori;
	
	document.getElementById("PicExtPrice").value=total;
}
