/**
Open As SharePoint
by Laurent FARGUES (laurent.fargues@gmail.com)

first try...

*/
var listOffice = 'extensions: .doc .dot .wbk .docx .docm .docb .xls .xlsx .xlsm .xltx .xlw .xll .xlam .xlsb .ppt .pot .pps .pptx .pptm .potx .potm .ppam .accdb .accde .accdt .accdr .ub .xps';
var docOffice = [
  {'ext':'.doc'  ,url:'ms-word:ofe|u|'},
  {'ext':'.docx' ,url:'ms-word:ofe|u|'},
  {'ext':'.xls'  ,url:'ms-excel:ofe|u|'},
  {'ext':'.xlsx' ,url:'ms-excel:ofe|u|'},
  {'ext':'.pps'  ,url:'ms-powerpoint::ofe|u|'},
  {'ext':'.ppt'  ,url:'ms-powerpoint::ofe|u|'},
  {'ext':'.ppts'  ,url:'ms-powerpoint::ofe|u|'},      
];
$(document).ready(function(){
  $('#content').delegate('#fileList', 'fileActionsReady',function(ev){
    var $fileList = ev.fileList.$fileList;
    $fileList.find('tr').filterAttr('data-type','file').each(function(){
      var ext = $(this).find('td.filename').find('a.name').find('span.nametext').find('span.extension').html();
      var link = $(this).find('td.filename').find('a.name');
        
      if (detectIE()==11){
        if (listOffice.indexOf(ext)>0){
          link.attr('onclick',"new ActiveXObject('SharePoint.OpenDocuments.3').EditDocument('"+window.location.protocol+"//"+window.location.host+link.attr('href')+"');return false;");
        }
      }else{
        if (type = docOffice.find(function(e){
          if (e.ext === ext) return e;
        })){
          //if (type = docOffice.find(o=>o.ext === ext)){ 
          console.log(type.url);
          console.log(type.url+window.location.hostname+link.attr('href'));
          //link.attr('href',type.url+'http://'+window.location.hostname+link.attr('href'));
          link.attr('href',type.url+window.location.protocol+'//'+window.location.hostname+link.attr('href'));
        }

      }
    });
  });
});

function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}