var array=[10, 20, 30, 40, 50];
function move(array, from, to) {
    while (from < 0) {
        from += array.length;
    }
    while (to < 0) {
        to += array.length;
    }
    if (to >= array.length) {
        var x = to - array.length;
        while ((x--) + 1) {
            array.push(undefined);
        }
    }
     array.splice(to, 0, array.splice(from, 1)[0]);  
   return array;
}
document.write( "Moved 40 has 1st item: " + move(array, 3, 0));
document.write("</br>");
document.write("</br>");
document.write("Moved 20 has last item: " + move(array, -3, -1));