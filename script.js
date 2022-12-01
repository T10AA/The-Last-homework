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

  return SlideTitle;
}

function Slider () {
  SliderBox.innerHTML = ' ';
  
}
