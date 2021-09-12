//check the constraints
let trlist;
path=new Array();
    document.getElementById("trbtn").addEventListener('click',()=>{
    document.getElementById("otp").innerHTML="<br><span class='spinner'><sm-spinner></sm-spinner></span><br>";
   document.getElementById("waiting").innerHTML="<br>Please wait until the tree is constructed!!<br>Tree will be constructed within 5 minutes!!"
  /*  var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    while(totalSeconds<300){

    setInterval(setTime, 1000);
    function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
    }}*/
    let flag=0;
    let i=0;
  
    var minutesToAdd=60;
    currentDate=new Date()
    futureDate = new Date(currentDate.getTime() + minutesToAdd*1000);
    setTimeout(()=>{if(futureDate<=new Date())
    {
        flag=1;
        if(flag==1){
    let trid=document.getElementById("trid").value;
    let trlist=trid.split(",");
    tree=new MerkleTree(trlist);
    tree.createTree();
    rootHash=tree.getRootHash();
    document.getElementById("waiting").innerHTML=" ";
    document.getElementById("otp").innerHTML="<br><b style='color:black'>Root : </b>";
    var id1=document.querySelector("#otp");
   var newdiv= document.createElement('sm-copy')
    newdiv.value=rootHash;
    id1.appendChild(newdiv);
    }
    }else{
        flag=0;
    }
    },60000);

    let trid=document.getElementById("trid").value;
     trlist=trid.split(",");
    if(trlist.length=="6"){
        flag=1;
        if(flag==1){
    let trid=document.getElementById("trid").value;
    let trlist=trid.split(",");
    tree=new MerkleTree(trlist);
    tree.createTree();
    rootHash=tree.getRootHash();
    document.getElementById("waiting").innerHTML=" ";
    document.getElementById("otp").innerHTML="<br><b style='color:black'>Root : </b>";
    var id1=document.querySelector("#otp");
    var newdiv= document.createElement('sm-copy')
     newdiv.value=rootHash;
     id1.appendChild(newdiv);
    }
    }
    for(let i=0;i<trlist.length;i++){
        //let path[i] = tree.getHashPathToRoot(trlist[i]);
        path.push(tree.getHashPathToRoot(trlist[i]));
        }
})

    //path
let flag1=0;
document.getElementById("getpath").addEventListener('click',()=>{
    for(let i=0;i<trlist.length;i++){
        if(trlist[i]==(document.getElementById("path").value)){
            document.getElementById("otp1").innerHTML=("<b style='color:black'>path["+document.getElementById("path").value+"] = </b>");
            var id1=document.querySelector("#otp1");
            var newdiv= document.createElement('sm-copy')
             newdiv.value=path[i];
             id1.appendChild(newdiv);
            flag1=1;
            break;
        }
        else{
            flag=0;
            document.getElementById("otp1").innerHTML=("<br><b style='margin-left:36%;color:black'> Path not available in the Root</b>")
        }
    }

})





