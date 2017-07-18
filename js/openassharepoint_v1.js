/**
Open As SharePoint
by Laurent FARGUES (laurent.fargues@gmail.com)

first try...

*/
var listOffice = 'extensions: .doc .dot .wbk .docx .docm .docb .xls .xlsx .xlm .xltx .xlw .xll .xlam .xlsb .ppt .pot .pps .pptx .pptm .potx .potm .ppam .accdb .accde .accdt .accdr .ub .xps';
$(document).ready(function(){
  $('#content').delegate('#fileList', 'fileActionsReady',function(ev){
    var $fileList = ev.fileList.$fileList;
    $fileList.find('tr').filterAttr('data-type','file').each(function(){
      var ext = $(this).find('td.filename').find('a.name').find('span.nametext').find('span.extension').html();
      var link = $(this).find('td.filename').find('a.name');
      //console.log(ext+listOffice.indexOf(ext));
      if (listOffice.indexOf(ext)>0){
        link.attr('onclick',"new ActiveXObject('SharePoint.OpenDocuments.3').EditDocument('"+window.location.protocol+"//"+window.location.host+link.attr('href')+"');return false;");
      }
    });
  });
});
