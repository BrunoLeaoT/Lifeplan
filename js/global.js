var url = new URL(window.location.href);
var id = url.searchParams.get("id");
var receber = url.searchParams.get("receber");
var ano = url.searchParams.get("ano");
$('#opt').val(id);
if(id==3) 
  $('#mensalidade').text("Qual a mensalidade da universidade?");
else if(opt==2)
  $('#mensalidade').text("Qual valor da entrada da casa?");   
else
  $('#mensalidade').text("Quanto você pretende completar sua renda? "); 
(function ($) {
    'use strict';
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $('.js-datepicker').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "autoUpdateInput": false,
            locale: {
                format: 'DD/MM/YYYY'
            },
        });
    
        var myCalendar = $('.js-datepicker');
        var isClick = 0;
    
        $(window).on('click',function(){
            isClick = 0;
        });
    
        $(myCalendar).on('apply.daterangepicker',function(ev, picker){
            isClick = 0;
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
    
        });
    
        $('.js-btn-calendar').on('click',function(e){
            e.stopPropagation();
    
            if(isClick === 1) isClick = 0;
            else if(isClick === 0) isClick = 1;
    
            if (isClick === 1) {
                myCalendar.focus();
            }
        });
    
        $(myCalendar).on('click',function(e){
            e.stopPropagation();
            isClick = 1;
        });
    
        $('.daterangepicker').on('click',function(e){
            e.stopPropagation();
        });
    
    
    } catch(er) {console.log(er);}
    /*[ Select 2 Config ]
        ===========================================================*/
    
    try {
        var selectSimple = $('.js-select-simple');
    
        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find('select');
            var selectDropdown = that.find('.select-dropdown');
            selectBox.select2({
                dropdownParent: selectDropdown
            });
        });
    
    } catch (err) {
        console.log(err);
    }
    

})(jQuery);

$("#submit").click(function(){
  console.log("oie")
  var idade = 2020 - $('#dataNasc').val().split("/")[2];
  var opt = $('#opt').val()
  console.log(id)
$.post("https://yagholc.ocpu.io/insurAPI/R/prevCall/",
  {
    idade: idade,
    b: receber,
    m: (ano -2020),
    opt: id
  },
  function(data, status){
    res = "https://cloud.opencpu.org/" + data.split("\n")[0]
    console.log(res)
    $.get(res, function(data2, status){
      window.location.replace("multi/result.html?data="+data2.substr(4)+"&receber="+receber+"&ano="+ano+"&opt="+id);
    });
  }); 
});

