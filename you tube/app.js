let api_key=" AIzaSyB7AKnwgBPnk3SipQ30HtjwlEZUd8768yA";
 
let video_container =document.getElementById("vid-container");
async function getData(){
    try{

        let res= await fetch(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=IN&key=${api_key}`);
         data= await res.json();
         // console.log("data", data);
   
      make_card(data.items);

    }
    catch(err){
        console.log(err);

    }

}
getData();

// const getChannelIcon=(data)=>{

// }

//  const makeCard=(data)=>{

// video_container.innerHTML="";
 

//  }


// const make_card = (data)=>{

// console.log(data);

// document.getElementById("vid-container").innerHTML="";
// data.map(function(elem){

//   var maindiv = document.createElement("div");
//   maindiv.setAttribute("id","video");


//   var div1= document.createElement("div");
//   div1.setAttribute("id","subdiv1");

//   var img1=document.createElement("img");
//   img1.src=elem.snippet.thumbnails.high.url;
//   console.log(img1); 

//   div1.append(img1);
  

//   var div2= document.createElement("div");
//   div2.setAttribute("id","subdiv2");
//  var part= document.createElement("h4")
// part.textContent=elem.snippet.title;
// console.log(part);

// var para= document.createElement("p")
// para.textContent=data.snippet.channelTitle; 

// console.log(para);

// div2.append(part);

// maindiv.append(div1,div2);
// maindiv.append(div1);
// document.querySelector("#vid-container").append(maindiv);

// });

// }




const  make_card = (data)=>{
  video_container.innerHTML="";
   
  <div class="video">
    <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
          <img src="" class="channel-icon" alt="">
            <div class="info">
              <h4 class="title">${data.snippet.title}</h4>
              <p class="channel-name" >${data.snippet.channelTitle}</p>
            </div>
          </img>
        </div>
    </img>
  </div>

}