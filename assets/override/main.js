$(document).ready(function(){
  $(".container .article").each(function(){
    $(this).parent().append("<a href='#' class='read-more'>Lire d'avantage</a>");
    $(this).addClass("short");
  });
  $(".container .read-more").click(function(){
      var $elem = $(this).parent().find(".article");
            if($elem.hasClass("short"))
            {
                $elem.removeClass("short").addClass("full");
                $(this).html("Lire moins");
            }
            else
            {
                $elem.removeClass("full").addClass("short");
                $(this).html("Lire d'avantage");

            }
            return false;
        });
  });
