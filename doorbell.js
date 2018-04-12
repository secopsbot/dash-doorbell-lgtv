var dash_button = require('node-dash-button');
var dash_sidedoor = dash_button("84:d6:d0:xx:xx:xx", null, null, 'all'); //Dash button @ Side Door
var dash_frontdoor = dash_button("44:65:0d:xx:xx:xx", null, null, 'all'); //Dash button @ Front Door
lgtv = require("lgtv");

var retry_timeout = 10;
var ipaddr = "lgsmarttv.lan";

var DingDong = function(Msg) {
        console.log("Sending Message to TV: " + ipaddr);
        lgtv.connect(ipaddr, function(err, response){
          if (!err) {
            lgtv.show_float(Msg, function(err, response){
              if (!err) {
                lgtv.disconnect();
              }
            }); // show float
          }
        });
}

dash_sidedoor.on("detected", function (){
var Msg = "Ding Dong! - Side Door";
    console.log(Msg);
    DingDong(Msg);
});

dash_frontdoor.on("detected", function (){
var Msg = "Ding Dong! - Front Door";
    console.log(Msg);
    DingDong(Msg);
});
