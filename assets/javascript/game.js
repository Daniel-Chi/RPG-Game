var tauros = {
    "name": "tauros",
    "hp": 210,
    "atk1": "Rage",
    "bp1": 2,
    "atk2": "Horn Attack",
    "bp2": 20,
    "spd": 110,
    "imgf": "assets/images/tauros.png",
    "imgb": "assets/images/taurosb.png",
};
var donphan = {
    "name": "donphan",
    "hp": 270,
    "atk1": "Rollout",
    "bp1": 3,
    "atk2": "Rapid Spin",
    "bp2": 5,
    "spd": 50,
    "imgf": "assets/images/donphan.png",
    "imgb": "assets/images/donphanb.png",
};
var exploud = {
    "name": "exploud",
    "hp": 170,
    "atk1": "Echoed Voice",
    "bp1": 4,
    "atk2": "Boomburst",
    "bp2": 50,
    "spd": 68,
    "imgf": "assets/images/exploud.png",
    "imgb": "assets/images/exploudb.png",
};
var zangoose = {
    "name": "zangoose",
    "hp": 130,
    "atk1": "Fury Cutter",
    "bp1": 10,
    "atk2": "Crush Claw",
    "bp2": 30,
    "spd": 90,
    "imgf": "assets/images/zangoose.png",
    "imgb": "assets/images/zangooseb.png",
};
var empty = "empty";
var playerinitial;
var player;
var ecurr;
var playerselected = false;
var plist = [donphan, exploud, zangoose, tauros];
var elist = plist;
$("#select").html("<h2>Choose your Pok&eacute;mon!<h2>");
$("#Donphan").html("<img class='imgselect' src='" + donphan.imgf + "'>");
$("#Exploud").html("<img class='imgselect' src='" + exploud.imgf + "'>");
$("#Zangoose").html("<img class='imgselect' src='" + zangoose.imgf + "'>");
$("#Tauros").html("<img class='imgselect' src='" + tauros.imgf + "'>");

$(".choice").on("click", function(){

    //gets index# of choice
    var index = parseInt(this.getAttribute("pkindex"));

    //gets name of choice as variable
    var name = eval(this.id.toLowerCase());

    //player select commands
    if (!playerselected) {
        alert("You chose " + this.id +"!");
        //initialize player and remove from enemy list
        playerinitial = plist[index];
        player = plist[index];
        playerselected = true;
        elist[index] = empty;
        //html and css changes
        $("#select").html("Choose your enemy!");
        this.style.visibility = "hidden";
        $("#player").attr("src", name.imgb);
    }

    //enemy select commands
    else {
        alert("A wild " + this.id + " appeared!");
        //initialize enemy and remove from list
        ecurr = elist[index];
        elist[index] = empty;
        //html and css changes
        $("#select").html("Battle!");
        $("#choicelist").css("display", "none");
        $("#enemy").attr("src", name.imgf);
    }

});




// sets enemy array
// for (i=0;i<plist.length;i++){
//     if (player !== plist[i]){
//         elist[i] = plist[i]
//     }
// }


