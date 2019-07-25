function validateElement(idLegend, idError, strErrorMsg) {
  if (document.getElementById(idError) !=null) {
    $("#"+idError).removeClass('hidden');
    if (top > document.getElementById(idLegend).offsetTop) {
      top = document.getElementById(idLegend).offsetTop;
    }
  } else {
    $("#"+idLegend).append('<strong style="margin-top:10px;" class="error" id="'+idError+'"><span class="label label-danger" style="text-align: left; display:block;">'+strErrorMsg+'</span></strong>');
    if (top > document.getElementById(idLegend).offsetTop) {
      top = document.getElementById(idLegend).offsetTop;
    }
  }
  return top;
}
