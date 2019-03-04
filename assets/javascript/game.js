$(document).ready(function(){
var tauros = {
    "name": "Tauros",
    "hp": 210,
    "hpcurr": 210,
    "atk1": "Rage",
    "bp1": 7,
    "atk2": "Horn Attack",
    "bp2": 20,
    "spd": 110,
    "imgf": "assets/images/tauros.png",
    "imgb": "assets/images/taurosb.png",
};
var donphan = {
    "name": "Donphan",
    "hp": 270,
    "hpcurr": 270,
    "atk1": "Rollout",
    "bp1": 20,
    "atk2": "Rapid Spin",
    "bp2": 8,
    "spd": 50,
    "imgf": "assets/images/donphan.png",
    "imgb": "assets/images/donphanb.png",
};
var exploud = {
    "name": "Exploud",
    "hp": 170,
    "hpcurr": 170,
    "atk1": "Echoed Voice",
    "bp1": 10,
    "atk2": "Boomburst",
    "bp2": 50,
    "spd": 68,
    "imgf": "assets/images/exploud.png",
    "imgb": "assets/images/exploudb.png",
};
var zangoose = {
    "name": "Zangoose",
    "hp": 130,
    "hpcurr": 130,
    "atk1": "Fury Cutter",
    "bp1": 25,
    "atk2": "Crush Claw",
    "bp2": 30,
    "spd": 90,
    "imgf": "assets/images/zangoose.png",
    "imgb": "assets/images/zangooseb.png",
};
var empty = "empty";
var player;
var atkcount = 0;
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
        player = plist[index];
        playerselected = true;
        elist[index] = empty;
        //html and css changes
        $("#select").html("Choose your opponent!");
        this.style.display = "none";
        $("#player").attr("src", name.imgb);
        $("#pname").html(this.id);
    }

    //enemy select commands
    else {
        alert("A wild " + this.id + " appeared!");
        //initialize enemy and remove from list
        this.style.display = "none";
        ecurr = elist[index];
        elist[index] = empty;
        $("#ehp").css("width", "300px")
        //html and css changes
        $("#select").html("Battle!");
        $("#choicelist").css("display", "none");
        $("#enemy").attr("src", name.imgf);
        $("#ename").html(this.id);
        $("#fight").css("display", "");
    }
});

//functions for adjusting health bars
var eadjust = function() {
    var epercent = ecurr.hpcurr / ecurr.hp * 300;
    $("#ehp").css("width", epercent + "px");
}
var padjust = function() {
    var ppercent = player.hpcurr / player.hp * 300;
    $("#php").css("width", ppercent + "px");
}

//combat commands
$("#fight").on("click", function(){
    atkcount += player.bp1;

    //if player first
    if (player.spd > ecurr.spd) {
        alert(player.name + " used " + player.atk1 + "!");
        ecurr.hpcurr -= atkcount;
        //enemy survives, moves second
        if (ecurr.hpcurr > 0) {
            eadjust();
            player.hpcurr -= ecurr.bp2;
            alert(ecurr.name + " used " + ecurr.atk2 + "!");
            //player survives
            if (player.hpcurr > 0){
                padjust();
                if (player.name === "Tauros") {
                    alert("Tauros's Rage is building!");
                };
            }
            //player faints
            else {
                $("#php").css("width", "0px");
                alert(player.name + " fainted!");
                alert("Game Over");
                $("#fight").css("display", "none");
                $("#select").html("Game Over");
            }
        }
        //enemy faints
        else {
            $("#ehp").css("width", "0px");
            alert(ecurr.name + " fainted!");
            $("#fight").css("display", "none");
            //check for victory
            if (elist.every(function(x){return x == "empty"}) === true){
                alert("Congratulations! You Win!")
                $("#select").html("Victory!")
            }
            else{
            $("#select").html("Choose a new opponent!");
            $("#choicelist").css("display", "");
            }
        }
    }

    //enemy first move
    else {
        player.hpcurr -= ecurr.bp2;
        alert(ecurr.name + " used " + ecurr.atk2 + "!");
        //player survives, moves second
        if (player.hpcurr > 0){
            padjust();
            ecurr.hpcurr -= atkcount;
            alert(player.name + " used " + player.atk1 + "!");
            //enemy survives
            if (ecurr.hpcurr > 0){
                eadjust();
            }
            //enemy faints
            else {
                $("#ehp").css("width", "0px");
                alert(ecurr.name + " fainted!")
                $("#fight").css("display", "none");
                //check for victory
                if (elist.every(function(x){return x == "empty"}) === true){
                    alert("Congratulations! You Win!")
                    $("#select").html("Victory!")
                }
                else{
                $("#select").html("Choose a new opponent!");
                $("#choicelist").css("display", "")
                }
            }
        }
        //player faints
        else {
            $("#php").css("width", "0px");
            alert(player.name + " fainted!");
            alert("Game Over");
            $("#fight").css("display", "none");
            $("#select").html("Game Over");
        }
    }
});
});