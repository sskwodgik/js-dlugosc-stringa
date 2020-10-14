let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";

function wybierzDluzszy(str1, str2){
    if(str1.length > str2.length){
        let str = "Pierwszy string jest dłuższy. Ma "+str1.length+" znaków";
        return str;
    }   else if(str2.length > str1.length){
        let str = "Drugi string jest dłuższy. Ma "+str2.length+" znaków";
        return str;
    }   else    {
        let str = "Obydwa stringi mają "+str1.length+" znaków";
        return str;
    }
}

console.log(wybierzDluzszy(str1, str2));