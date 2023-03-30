document.addEventListener('DOMContentLoaded', function () {
  var NeedMoreInfo = document.getElementById('Need more Info');
  NeedMoreInfo.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.NeedMoreInfo;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var IphoneOOP = document.getElementById('IphoneOOP');
  IphoneOOP.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.IphoneOOP;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });
  
  var Asurion_Iphone = document.getElementById('Asurion Iphone');
  Asurion_Iphone.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.AsurionIphone;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  }); 

  var Asurion_Samsung= document.getElementById('Asurion Samsung');
  Asurion_Samsung.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.AsurionSamsung;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var SamsungOOP = document.getElementById('SamsungOOP');
  SamsungOOP.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.SamsungOOP;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var Pixelasurion = document.getElementById('Pixel asurion');
  Pixelasurion.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.Pixelasurion;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var PixelOOP = document.getElementById('PixelOOP');
  PixelOOP.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.PixelOOP;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var Pixelneedstetsting = document.getElementById('Pixel needs Testing');
  Pixelneedstetsting.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.Pixelneedstetsting;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

});