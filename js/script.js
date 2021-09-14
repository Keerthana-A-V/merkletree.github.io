//check the constraints
let trlist;
let tree;
path=new Array();

    document.getElementById("trbtn").addEventListener('click',()=>{

    document.getElementById("otp").innerHTML="<br><span class='spinner'><sm-spinner></sm-spinner></span><br>";
   document.getElementById("waiting").innerHTML="<br>Please wait until the tree is constructed!!<br>Tree will be constructed within 5 minutes!!"
    let flag=0;
    let i=0;
  
    var minutesToAdd=60;
    currentDate=new Date();
    futureDate = new Date(currentDate.getTime() + minutesToAdd*1000);
    setTimeout(()=>{if(futureDate<=new Date()){ 
        merkletreepath()
    }},60000);

    let trid=document.getElementById("trid").value;
     trlist=trid.split(",");
    if(trlist.length=="6"){
        merkletreepath();
     /*   flag=1;
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
        //path
    for(let i=0;i<trlist.length;i++){
        //let path[i] = tree.getHashPathToRoot(trlist[i]);
        path.push(tree.getHashPathToRoot(trlist[i]));
        }
        for(let i=0;i<trlist.length;i++){

                var id1=document.querySelector("#otp");
                var newdiv1= document.createElement('div')
                 newdiv1.innerHTML="<br><b style='color:black'>path["+trlist[i]+"] =</b> ";
                 id1.appendChild(newdiv1);

                var id1=document.querySelector("#otp");
                var newdiv= document.createElement('sm-copy')
                 newdiv.value=path[i];
                 id1.appendChild(newdiv);
            }*/
     } })

     function merkletreepath(){

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

              //path
    for(let i=0;i<trlist.length;i++){
        //let path[i] = tree.getHashPathToRoot(trlist[i]);
        path.push(tree.getHashPathToRoot(trlist[i]));
        }
        for(let i=0;i<trlist.length;i++){

                var id1=document.querySelector("#otp");
                var newdiv1= document.createElement('div')
                 newdiv1.innerHTML="<br><b style='color:black'>path["+trlist[i]+"] =</b> ";
                 id1.appendChild(newdiv1);

                var id1=document.querySelector("#otp");
                var newdiv= document.createElement('sm-copy')
                 newdiv.value=path[i];
                 id1.appendChild(newdiv);
        }
    }
    //verify path

document.getElementById("vrbtn").addEventListener('click',()=>{
    let roothash=document.getElementById("roothash").value;
    let ele=document.getElementById("ele").value;
    path_string=document.getElementById("path11").value;
    path1=path_string.split(',')
    let verification=tree.verifyMerkleMembership(ele,roothash,path1);
    if(verification==true){
        document.getElementById("otp2").innerHTML="<br><b style='color:black'>TRUE!, '"+ele+"' is PRESENT in</b>' "+roothash+" ' !";
    }
    else{
        document.getElementById("otp2").innerHTML="<br><b style='color:black'>FALSE!, ' "+ele+" ' is NOT PRESENT in</b> ' "+roothash+" ' !";

    }
})





