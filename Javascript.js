var walkFrame = 0;

$(document).ready( function(){earth_Icon_motion_speed()} )

function earth_Icon_motion_speed(){
    setInterval(  function(){change_img_src()}, 80 );
}

function change_img_src(){
    $('#earth').attr("src", "pictures/"+walkFrame+".png");
    walkFrame++;
    if(walkFrame == 1526)
    {
        walkFrame = 0;
    }
}

$(".menue_button_add").click(function () {
    // Set the effect type
    var effect = 'slide';
    // Set the options for the effect type chosen
    var options = { direction: left };
    // Set the duration (default: 400 milliseconds)
    var duration = 500;
    $('#add_cat_div').toggle(slide, , duration);
});