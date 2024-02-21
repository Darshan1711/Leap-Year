function final(){

    let f1 = document.getElementById("f1").value;

    if(f1 % 4 == 0){
        document.getElementById("s1").innerHTML = `${f1} is a leap year`;
    }

        else{
            document.getElementById("s1").innerHTML = `${f1} is not a leap year`;
        }
        // console.log(s1);

}