
$(document).ready(function(){

  $("#UA").text(navigator.userAgent);
  var pid = uid = did = tid = 0;
  var ptl = utl = dtl = 0;
  var _target = $("#keyInput");


  _target.keydown(function(evt){
    var e = evt.originalEvent;
    $("#down-tid").text(++tid);
    $("#down-id").text(++did);
    var ctime = evt.timeStamp || (new Date).getTime();
    $("#down-timeStamp").text(ctime);
    $("#down-timeLapse").text(dtl && ctime - dtl || 0);
    dtl = ctime;
    $("#down-value").text(_target.val());
    $("#down-length").text(_target.val().length);
    $("#down-keyCode").text(e.keyCode);
    $("#down-charCode").text(e.charCode);
    $("#down-which").text(e.which);
    $("#down-jwhich").text(evt.which);
    $("#down-keyChar").text(String.fromCharCode(evt.which));
    $("#down-char").text(e.char);
    $("#down-key").text(e.key);
    $("#down-code").text(e.code);
    $("#down-location").text(e.location);
    $("#down-repeat").text(e.repeat);
    $("#down-metaKey").text(e.metaKey);
    $("#down-ctrlKey").text(e.ctrlKey);
    $("#down-isComposing").text(e.isComposing);
    if (dpd) evt.preventDefault();
  });
 _target.keypress(function(evt){
    var e = evt.originalEvent;
    $("#press-tid").text(++tid);
    $("#press-id").text(++pid);
    var ctime = evt.timeStamp || (new Date).getTime();
    $("#press-timeStamp").text(ctime);
    $("#press-timeLapse").text(ptl && ctime - ptl || 0);
    ptl = ctime;
    $("#press-value").text(_target.val());
    $("#press-length").text(_target.val().length);
    $("#press-keyCode").text(e.keyCode);
    $("#press-charCode").text(e.charCode);
    $("#press-which").text(e.which);
    $("#press-jwhich").text(evt.which);
    $("#press-keyChar").text(String.fromCharCode(evt.which));
    $("#press-char").text(e.char);
    $("#press-key").text(e.key);
    $("#press-code").text(e.code);
    $("#press-location").text(e.location);
    $("#press-repeat").text(e.repeat);
    $("#press-metaKey").text(e.metaKey);
    $("#press-ctrlKey").text(e.ctrlKey);
    $("#press-shiftKey").text(e.shiftKey);
    $("#press-isComposing").text(e.isComposing);
    if (ppd) evt.preventDefault();
  });
  _target.keyup(function(evt){
    var e = evt.originalEvent;
    $("#up-tid").text(++tid);
    $("#up-id").text(++uid);
    var ctime = evt.timeStamp || (new Date).getTime();
    $("#up-timeStamp").text(ctime);
    $("#up-timeLapse").text(utl && ctime - utl || 0);
    utl = ctime;
    $("#up-value").text(_target.val());
    $("#up-length").text(_target.val().length);
    $("#up-keyCode").text(e.keyCode);
    $("#up-charCode").text(e.charCode);
    $("#up-which").text(e.which);
    $("#up-jwhich").text(evt.which);
    $("#up-keyChar").text(String.fromCharCode(evt.which));
    $("#up-char").text(e.char);
    $("#up-key").text(e.key);
    $("#up-code").text(e.code);
    $("#up-location").text(e.location);
    $("#up-repeat").text(e.repeat);
    $("#up-metaKey").text(e.metaKey);
    $("#up-ctrlKey").text(e.ctrlKey);
    $("#up-shiftKey").text(e.shiftKey);
    $("#up-isComposing").text(e.isComposing);
    if (upd) evt.preventDefault();
  });




  var csid = cuid = ceid = 0;
  var cstl = cutl = cetl = 0;

  if (document.addEventListener) {
  _target[0].addEventListener("compositionstart", function(e){
    $("#cs-tid").text(++tid);
    $("#cs-id").text(++csid);
    var ctime = e.timeStamp || (new Date).getTime();
    $("#cs-timeStamp").text(ctime);
    $("#cs-timeLapse").text(cstl && ctime - cstl || 0);
    $("#cs-value").text(_target.val());
    $("#cs-length").text(_target.val().length);
    cstl = ctime;
    $("#cs-data").text(e.data);
    $("#cs-which").text(e.which);
    $("#cs-composed").text(e.composed);
    //e.preventDefault();
  });

  _target[0].addEventListener("compositionupdate", function(e){
    $("#cu-tid").text(++tid);
    $("#cu-id").text(++cuid);
    var ctime = e.timeStamp || (new Date).getTime();
    $("#cu-timeStamp").text(ctime);
    $("#cu-timeLapse").text(cutl && ctime - cutl || 0);
    $("#cu-value").text(_target.val());
    $("#cu-length").text(_target.val().length);
    cutl = ctime;
    $("#cu-data").text(e.data);
    $("#ce-which").text(e.which);
    $("#cu-composed").text(e.composed);
    console.log("compositionupdated", e)
    //e.preventDefault();
  });

  _target[0].addEventListener("compositionend", function(e){
    $("#ce-tid").text(++tid);
    $("#ce-id").text(++ceid);
    var ctime = e.timeStamp || (new Date).getTime();
    $("#ce-timeStamp").text(ctime);
    $("#ce-timeLapse").text(cetl && ctime - cetl || 0);
    $("#ce-value").text(_target.val());
    $("#ce-length").text(_target.val().length);
    cutl = ctime;
    $("#ce-which").text(e.which);
    $("#ce-data").text(e.data);
    $("#ce-composed").text(e.composed);
    //e.preventDefault();
  });
  };

var cgid = cgtl = 0;
_target.change(function(evt){
    var e = evt.originalEvent;
    $("#cg-tid").text(++tid);
    $("#cg-id").text(++cgid);
    var ctime = evt.timeStamp ||  e.timeStamp || (new Date).getTime();
    $("#cg-timeStamp").text(ctime);
    $("#cg-timeLapse").text(cgtl && ctime - cgtl || 0);
    $("#cg-value").text(_target.val());
    $("#cg-length").text(_target.val().length);
    cgtl = ctime;
});

var upd= $("#upd").is(":checked");
var dpd= $("#dpd").is(":checked");
var ppd= $("#ppd").is(":checked");

$("#upd").change(function(){
  upd = $(this).is(":checked");
});
$("#dpd").change(function(){
  dpd = $(this).is(":checked");
});
$("#ppd").change(function(){
  ppd = $(this).is(":checked");
});

});
