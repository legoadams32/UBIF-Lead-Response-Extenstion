document.addEventListener('DOMContentLoaded', function () {
  var NeedInfo = document.getElementById('Need more Info');
  NeedInfo.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.NeedInfo;
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
  
  var Asurion_Samsung = document.getElementById('Asurion Samsung');
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

  var AsurionPixel= document.getElementById('Asurion Pixel');
  AsurionPixel.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.AsurionPixel;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var AssurantPixel = document.getElementById('Assurant Pixel');
  AssurantPixel.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.AssurantPixel;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var Awating_Device = document.getElementById('Awating Device');
  Awating_Device.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.AwatingDevice;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var MailIn = document.getElementById('Mail in repair arrived');
  MailIn.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.MailIn;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var NeedsTesting = document.getElementById('Needs Testing');
  NeedsTesting.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.NeedsTesting;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

  var DayRecycle = document.getElementById('90 day Recycle');
  DayRecycle.addEventListener('click', function () {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var text = data.DaysR;
        navigator.clipboard.writeText(text).then(function () {
          console.log('Text copied to clipboard');
        }, function () {
          console.log('Error copying text to clipboard');
        });
      });
  });

});