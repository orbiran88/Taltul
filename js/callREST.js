(function($) {
     $.fn.MessageBox = function(msg) {
       return this.each(function(){
         var data = JSON.stringify({
          "name": $("#name").val(),
          "name": $("#name").val(),
          "name": $("#name").val()
        });

        var xhr = new XMLHttpRequest();

        xhr.open("POST", "https://secure.powerlink.co.il/api/record/customobject1000?tokenid=a770d92b-8533-4102-b047-d731d7e8159b");

        xhr.send(data);
       })
     };
    })(jQuery);

//<input id="clickMe" type="button" value="clickme" onclick="$(this).MessageBox('msg');" />