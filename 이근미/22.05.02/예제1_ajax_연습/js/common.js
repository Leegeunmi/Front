$(function(){
  $.ajax({
    url:'data.xml',
    dataType:'xml',
    success:function(data){
      $('item',data).each(function(){
        let linkText = $('link',this).text();
        let titleText = $('title',this).text();
        let descriptionText = $('description',this).text();
        let dateText = $('date',this).text();
        let editor = $('editor',this).text();
        $('dl').append(``)
      })
    }
  })
  $('button').on('click',function(){

  })
})
