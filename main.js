
var API="cee7decc5fe0424798b8a0889baf16a5"
var url="https://newsapi.org/v2/everything?q="
var url2="&from="
var url3="&sortBy=publishedAt&apiKey="

function frmt(num){
  if(num>10){ return num}
  return "0"+num;
}
function Today() {
  var date=new Date()
  var day= date.getDate()
  var mon=date.getMonth()
  var yr=date.getFullYear()
  var tdy=yr+"-"+frmt(mon)+"-"+frmt(day)
  return tdy
}
function frmtD(des){
  var ald=des.split(" ");
  var fin=""
  for(var i=0; i<25;i++){
    fin+=ald[i]+" "
  }
  return fin+"..."
}
function getQ(){
  var q=document.getElementById("query").value;
  if (q!=""){
    return q;
  }else{
    alert("Nothing in the search box");
    return
  }
}
function doit(data) {
  var ar=data.articles;
  
  
  var res=document.getElementById("res");
  for (var i =0;i<ar.length;i++){
    var title=ar[i].title;
    var description=frmtD(ar[i].description);
    var m=ar[i].publishedAt;
    var date=m
    var img=ar[i].urlToImage;
    var link=ar[i].url;
    var div =document.createElement("div")
    div.className="ar";
    var ihtml=`<a href="`+link+`">
    
    <img src="`+img+`"alt="Not found image">
    <h3 id="title">`+title+`</h3>
    <small id="date">`+date+`</small>
    <p id="des">`+description+`</p>
    <a href="">URL-`+exUrl(link)+`</a>
    
    </a>
    `
    div.innerHTML=ihtml
    res.appendChild(div)
  }
}
function showR(q){
  var qd= document.getElementById("q")
  qd.innerHTML=q
  var URL=url+q+url2+Today()+url3+API;
  fetch(URL)
  .then(res => res.json())
  .then(data=> doit(data))
  
}
function exUrl(url){
  var all=url.split("/")
  var furl="https://"+all[2]+"/..."
  return furl;
}

exUrl("https://facebook.com/imbitto");
var GO=document.getElementById("go")
GO.addEventListener("click",()=>{
  var qry=getQ()
  if(qry!=undefined){
    showR(qry)
  }
})


