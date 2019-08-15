function titleCase(str) {
    let array = str.toLowerCase().split(" ");
    let regex = /^[a-z]/;
    let upper = [];
    let replacer = [];

    for(let i = 0;i < array.length;i++){
        upper[i] = array[i].charAt(0).toUpperCase();
        replacer[i] = array[i].replace(regex,upper[i]);
    }
 return str = replacer.join(' ');
}

  titleCase("I'm answer little tea pot");