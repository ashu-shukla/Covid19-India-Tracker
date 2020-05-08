AOS.init({
    mirror: true,
    duration: 800
});

var deceased= document.querySelectorAll('#state-delta-dsc');

deceased.forEach(function(data) {
    if(data.outerText==0){
        data.style.display='none';
    }
  });

  var recovered= document.querySelectorAll('#state-delta-rec');

  recovered.forEach(function(data) {
      if(data.outerText==0){
          data.style.display='none';
      }
    });

    var confirmed= document.querySelectorAll('#state-delta-con');

    confirmed.forEach(function(data) {
        if(data.outerText==0){
            data.style.display='none';
        }
      });
