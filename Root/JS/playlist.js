/*Changing the draggable items to songs from the first album */
function LedZep1() {
    document.getElementById("item1").innerHTML = "Good Times Bad Times";
	document.getElementById("item2").innerHTML = "Babe I'm Gonna Leave You";
	document.getElementById("item3").innerHTML = "You Shook Me";
	document.getElementById("item4").innerHTML = "Dazed and Confused";
	document.getElementById("item5").innerHTML = "Your Time is Gonna Come";
	document.getElementById("item6").innerHTML = "Black Mountain Side";
	document.getElementById("item7").innerHTML = "Communication Breakdown";
	document.getElementById("item8").innerHTML = "I Can't Quit you Babe";
	document.getElementById("item9").innerHTML = "How Many More Times";
	document.getElementById("item10").style.visibility = 'hidden';
}
/*Changing the draggable items to songs from the second album */
function LedZep2() {
	document.getElementById("item1").innerHTML = "Whole Lotta Love";
	document.getElementById("item2").innerHTML = "What Is and What Should Never Be";
	document.getElementById("item3").innerHTML = "The Lemon Song";
	document.getElementById("item4").innerHTML = "Thank You";
	document.getElementById("item5").innerHTML = "Heartbreaker";
	document.getElementById("item6").innerHTML = "Living Loving Maid";
	document.getElementById("item7").innerHTML = "Ramle On";
	document.getElementById("item8").innerHTML = "Moby Dick";
	document.getElementById("item9").innerHTML = "Bring It On Home";
	document.getElementById("item10").style.visibility = 'hidden';
}
/*Changing the draggable items to songs from the third album */
function LedZep3() {
	document.getElementById("item1").innerHTML = "Immigrant Song";
	document.getElementById("item2").innerHTML = "Friends";
	document.getElementById("item3").innerHTML = "Celebration Day";
	document.getElementById("item4").innerHTML = "Since I've Been Loving You";
	document.getElementById("item5").innerHTML = "Out On The Tiles";
	document.getElementById("item6").innerHTML = "Gallows Pole";
	document.getElementById("item7").innerHTML = "Tangerine";
	document.getElementById("item8").innerHTML = "That's the Way";
	document.getElementById("item9").innerHTML = "Bron-Y-Aur Stomp";
	document.getElementById("item10").innerHTML = "Hats Off to [Roy] Harper";
}
/*Changing the draggable items to songs from the fourth album */
function LedZep4() {
	document.getElementById("item1").innerHTML = "Black Dog";
	document.getElementById("item2").innerHTML = "Rock And Roll";
	document.getElementById("item3").innerHTML = "The Battle Of Evermore";
	document.getElementById("item4").innerHTML = "Stairway To Heaven";
	document.getElementById("item5").innerHTML = "Misty Mountain Hop";
	document.getElementById("item6").innerHTML = "Four Sticks";
	document.getElementById("item7").innerHTML = "Going To California";
	document.getElementById("item8").innerHTML = "When The Levee Breaks";
	document.getElementById("item9").style.visibility = 'hidden';
	document.getElementById("item10").style.visibility = 'hidden';
	
}
/*Changing the draggable items to songs from the fifth album */
function LedZep5() {
	document.getElementById("item1").innerHTML = "The Song Remains The Same";
	document.getElementById("item2").innerHTML = "The Rain Song";
	document.getElementById("item3").innerHTML = "Over The Hills And Far Away";
	document.getElementById("item4").innerHTML = "The Crunge";
	document.getElementById("item5").innerHTML = "Dancing Days";
	document.getElementById("item6").innerHTML = "D'yer Mak'er";
	document.getElementById("item7").innerHTML = "No Quarter";
	document.getElementById("item8").innerHTML = "The Ocean";
	document.getElementById("item9").style.visibility = 'hidden';
	document.getElementById("item10").style.visibility = 'hidden';
	
}
/*Changing the draggable items to songs from the sixth album */
function LedZep6() {
	document.getElementById("item1").innerHTML = "Custard Pie";
	document.getElementById("item2").innerHTML = "The Rover";
	document.getElementById("item3").innerHTML = "In My Time Of Dying";
	document.getElementById("item4").innerHTML = "Houses Of The Holy";
	document.getElementById("item5").innerHTML = "Trampled Under Foot";
	document.getElementById("item6").innerHTML = "Kashmir";
	document.getElementById("item7").innerHTML = "In The Light";
	document.getElementById("item8").innerHTML = "Bron-Yr-Aur";
	document.getElementById("item9").innerHTML = "Down By The Seaside";
	document.getElementById("item10").innerHTML = "Ten Years Gone";
	
}
/*Changing the draggable items to songs from the seven album */
function LedZep7() {
	document.getElementById("item1").innerHTML = "Achilles Last Stand";
	document.getElementById("item2").innerHTML = "For Your Life";
	document.getElementById("item3").innerHTML = "Royal Orleans";
	document.getElementById("item4").innerHTML = "Nobody's Fault But Mine";
	document.getElementById("item5").innerHTML = "Candy Store Rock";
	document.getElementById("item6").innerHTML = "Hots On For Nowhere";
	document.getElementById("item7").innerHTML = "Tea For One";
	document.getElementById("item8").style.visibility = 'hidden';
	document.getElementById("item9").style.visibility = 'hidden';
	document.getElementById("item10").style.visibility = 'hidden';
	
}
/*Changing the draggable items to songs from the eight album */
function LedZep8() {
	document.getElementById("item1").innerHTML = "In The Evening";
	document.getElementById("item2").innerHTML = "South Bound Saurez";
	document.getElementById("item3").innerHTML = "Fool In The Rain";
	document.getElementById("item4").innerHTML = "Carouselambra";
	document.getElementById("item5").innerHTML = "All My Love";
	document.getElementById("item6").innerHTML = "I'm Gonna Crawl";
	document.getElementById("item7").style.visibility = 'hidden';
	document.getElementById("item8").style.visibility = 'hidden';
	document.getElementById("item9").style.visibility = 'hidden';
	document.getElementById("item10").style.visibility = 'hidden';
	
}
/*Changing the draggable items to songs from the ninth album */
function LedZep9() {
	document.getElementById("item1").innerHTML = "We're Gonna Groove";
	document.getElementById("item2").innerHTML = "Poor Tom";
	document.getElementById("item3").innerHTML = "I Can;t Quit You Baby";
	document.getElementById("item4").innerHTML = "Ozone Baby";
	document.getElementById("item5").innerHTML = "Darlene";
	document.getElementById("item6").innerHTML = "Bonzo's Montreux";
	document.getElementById("item7").innerHTML = "Wearing and Tearing";
	document.getElementById("item8").style.visibility = 'hidden';
	document.getElementById("item9").style.visibility = 'hidden';
	document.getElementById("item10").style.visibility = 'hidden';
	
}


/*using the _ function name allows an object reference to save time*/
function _(id){
   return document.getElementById(id);	
}
/*creating a variable to the obejcts and setting it to false*/
var droppedIn = false;
/*function for beginning a drag and grabbing the attribute*/
function drag_start(event) {
    _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
    event.dataTransfer.dropEffect = "move";
	/*setting the parameter so it may be read in other events*/
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}
/*function for recognising an object is over the drop zone*/
function drag_enter(event) {
    _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
}
/*function for recognising an object is no longer over the drop zone*/
function drag_leave(event) {
    _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
}
/*creating an array to hold objects*/
var playlist = new Array();
function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    /*retriving the data which has been set which is the ID*/
	var elem_id = event.dataTransfer.getData("text");
   	
    _('app_status').innerHTML = "Dropped "+elem_id+" into the "+event.target.getAttribute('id');
	/*altering the curser back to default after a drop*/
    _(elem_id).style.cursor = "default";
	/*finding the element of my list*/
	var ul = document.getElementById("play");
	/*adding a list item*/
	var li = document.createElement("li");
	/*increasing list length by 1*/
	var children = ul.children.length + 1
	/*taking the name of the object*/
	li.appendChild(document.createTextNode(document.getElementById(elem_id).innerHTML));	
	/*setting it as the list item text*/
	li.setAttribute("id", "song2");
	ul.appendChild(li);	
	
	playlist.push(document.getElementById(elem_id).innerHTML);
	var JSONReadyPlaylist = JSON.stringify(playlist);
	console.log(document.getElementById(elem_id).innerHTML);
	document.getElementById("song1").innerHTML = (document.getElementById(elem_id).innerHTML);
    /*changing the variable*/
	droppedIn = true;
}
/*when a user lets go*/
function drag_end(event) {
	/*condition to find if an object was dropped in the drop zone*/
    if(droppedIn == false){
		
        _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
    }
	/*restting the variable*/
	droppedIn = false;
}
/*accessing the items in the drop zone as a list*/
function readDropZone(){
    for(var i=0; i < _("drop_zone").children.length; i++){
        alert(_("drop_zone").children[i].id+" is in the drop zone");
    	
	}
	
    
}