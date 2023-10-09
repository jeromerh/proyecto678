//https://teachablemachine.withgoogle.com/models/CGe93Lpwh/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true}) 
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/O3dVavwad/model.json",modelReady)
  }
  
  function modelReady(){
      classifier.classify(gotResults)
  }
  
  function gotResults(error,results){
      console.log("modelo cargado")
      if(error){
        console.error(error)
       } 
       else{
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("Escucho").innerHTML=results[0].label
        document.getElementById("Presición").innerHTML=(results[0].confidence*100).toFixed(2)
        document.getElementById("Escucho").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        document.getElementById("Presición").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
        img1=document.getElementById("cristiano_1")
        img2=document.getElementById("cristiano_2")
        img3=document.getElementById("messi_3")
        img4=document.getElementById("messi_4")
        
    
        if (results[0].label == "tarareo") {
            img1.src = 'cristiano.gif';
            img2.src = 'cristiano2.jpg';
            img3.src = 'leo_messi.jpg';
            img4.src = 'leo_messi.png';
          } else if (results[0].label == "aplausos") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
          } else if (results[0].label == "aplausos y tarareo") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';
          }else{
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';
      
      
          }
      
       }
  }