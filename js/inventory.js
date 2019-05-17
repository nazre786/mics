function loadInventories() {
    var id='';
        $.ajax({
            'url':'services/get_inventory.php',
            method: "GET",
            data: {'id':id},
            success: function(response) {
                response = JSON.parse(response);
              var inventory_details2 = '';
            $.each(response, function (i, data) {
                 inventory_details2 += '<table border="1" class="table table-hover shopping-cart-wrap"><tbody><tr><td>'+data.id+'</td><td>'+data.manufacturer_name+'</td><td><figure class="media"><img style="display:block; " src="images/'+data.img1+'" class="img-thumbnail img-sm"/><figcaption class="media-body"><h6 class="title text-truncate">'+data.model_name+'</h6></figcaption></figure></td><td class="text-right">'+data.count+'</td><td class="text-right"><a href="" class="btn btn-outline-danger"> × Sold</a></td></tr></tbody></table>';
                });
                
                $('.card').append(inventory_details2);
              
            }
        });
     
}

loadInventories();
