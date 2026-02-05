function askName () {
    var nameReturn = document.getElementById( 'ask name') ;
    var name= prompt('Please enter your name in the box below:') ;
    if (name == '') {
        alert('Please try again.');
    } else {
        nameReturn.innerHTML='Hello ' + name + '! Nice to meet you!'
    }
}