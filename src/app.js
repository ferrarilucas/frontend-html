$(document).ready(function(){
    $('#inputSearch').focus(function(){
         $(document).on('keypress',function(e) {
            if(e.which == 13) {
               getSearch('#inputSearch')
            }
        });
    });
});


function getSearch(input) {
    const search= $(input).val();

    if(search != ''){
        $(input).val('');
        console.log(search);
        return search;
    }   

}