let data = [
    {
      id: 1,
      imageUrl: 'https://blog-fr.orson.io/wp-content/uploads/2017/06/jpeg-ou-png.jpg',
      title: 'nature 1', 
    },
    {
      id: 2,
      imageUrl: 'https://static.fnac-static.com/multimedia/Images/FD/Comete/114332/CCP_IMG_ORIGINAL/1481839.jpg',
      title: 'nature 2', 
    },
    {
      id: 3,
      imageUrl: 'https://az837918.vo.msecnd.net/publishedimages/articles/1733/en-CA/images/cover/1/free-download-this-stunning-alberta-scene-for-your-device-background-image-L-6.jpg',
      title: 'nature 3', 
    },
    {
      id: 4,
      imageUrl: 'https://media.istockphoto.com/id/1010884322/photo/spirit-island-in-maligne-lake-at-sunset-jasper-national-park-alberta-canada.jpg?s=612x612&w=0&k=20&c=ws2BsqJFBxmS3Bvr95iErsfI-SSggbkS530MoJM1cR8=',
      title: 'nature 4', 
    },
    {
      id: 5,
      imageUrl: 'https://climblovetravel.files.wordpress.com/2017/01/20140731_1832261.jpg?w=640',
      title: 'nature 5', 
    },
];


let leftArrow = document.getElementById('LeftArrow');
let righttArrow = document.getElementById('RightArrow');
let SliderBox = document.getElementById('imageContainer');
let sliderIndex = 0;
let activedot = document.getElementsByClassName('dots');

function DivTag () {
  let Divi = document.createElement('div');
  Divi.classList.add('ImageBox');
  
  return Divi;
}

function BGimage (item) {
  let BgImage = document.createElement('div');
  BgImage.style.backgroundImage = `url(${item.imageUrl})`;
  BgImage.classList.add('BgImage');

  return BgImage;
}

function Title (item) {
  let SlideTitle = document.createElement('h3');
  SlideTitle.innerText = item.title;
  SlideTitle.classList.add('Title');

  return SlideTitle;
}
function CreateDots () {
  let DotBox = document.createElement('div');
  DotBox.classList.add('DotMain');
  
  data.forEach((element) => {
    let dot = document.createElement("div");    
    dot.classList.add("dots");
    dot.setAttribute('data-id', element.id-1);
    DotBox.appendChild(dot);
    dot.addEventListener('click', function(event) {
      let number = event.target.getAttribute("data-id");
      sliderIndex = number;
      Slider();
    });
  });
  
  return DotBox;
}

function Slider () {
  SliderBox.innerHTML = ' ';
  let MainDiv = DivTag(data[sliderIndex]);
  let Image = BGimage(data[sliderIndex]);
  let imgTitle = Title(data[sliderIndex]);
  let DotParent = CreateDots();

  MainDiv.appendChild(Image);
  MainDiv.appendChild(imgTitle);
  SliderBox.appendChild(MainDiv);
  MainDiv.appendChild(DotParent);

  activedot[sliderIndex].classList.add('active');
}
function ClickLeftArrow () {
  if (sliderIndex == 0) {
    sliderIndex = data.length-1;
    Slider();
    return;
  }
  sliderIndex--;
  Slider();
}
leftArrow.addEventListener('click', ClickLeftArrow);

function ClickRighttArrow () {
  if (sliderIndex == data.length-1) {
    sliderIndex = 0;
    Slider();
    return;
  }
  sliderIndex++;
  Slider();
}
righttArrow.addEventListener('click', ClickRighttArrow);

setInterval(() => {
  ClickRighttArrow();
}, 4000);

Slider();


// Second homework - form validation

let registrationForm = document.getElementById('RegForm');

registrationForm.addEventListener('submit', function(registration) {
  registration.preventDefault();

  let errors = {};

  let username = document.getElementById('username').value;
  if (username == '') {
    errors.UserName = 'Please, enter username';
  }

  let password = document.getElementById('password').value;
  let repeatpassword = document.getElementById('Repeatpassword').value;
  
  if (password =='') {
    errors.Password = 'please, enter password';
  }

  if (password != repeatpassword) {
    errors.RepeatPassword = 'Passwords do not match';
  }

  let CheckBox = document.getElementById('agreement').checked;
  if (!CheckBox) {
    errors.agreement = "Please, agree terms and contiions";
  }

  document.querySelectorAll('.ErrorText').forEach((item) => {
    item.innerText = " ";
  });
  
  for (let key in errors) {
    let Errortext = document.getElementById("errors_" + key);

    if (Errortext) {
      Errortext.innerText = errors[key];
    }
  }

  if (Object.keys(errors).length==0) {
    registrationForm.submit();
  } 
  
});

let passwordArea = document.getElementById('password');
let icon = document.getElementById('Icon');

icon.addEventListener("click", function () {
  if (password.type == "password") {
    passwordArea.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwordArea.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");    
  }
});