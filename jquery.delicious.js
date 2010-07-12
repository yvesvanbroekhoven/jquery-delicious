/*
 * Delicious appends the latest delicious bookmarks of a user to the selector
 * Usage: $(selector).delicious('username', options);
 * @params username: Delicious username
 * @params options:
 *  
 */

(function($){
  $.fn.delicious = function(username, options){
    
    // Options
    var defaults = {
      
    }
    var settings = $.extend(defaults, options);
    
    var target = this;
    
    // Get JSON feed
    var url = 'http://feeds.delicious.com/v2/json/' + username + '?callback=?';
    $.getJSON(url, function(data){

      // Prepare the list
      var list = $('<ul>');
      
      // Fill the list with our data
      $.each(data, function(idx, value){
        
        var title       = value.d;
        var created_at  = value.dt;
        var link        = value.u;
        var tags        = value.t;
        
        var li = $('<li>');
        var a  = $('<a>');
        
        a.attr('href', link);
        a.html(title);
        a.appendTo(li);
        li.appendTo(list);
        
      });
      
      list.appendTo(target);
      
    });
    
  };
})(jQuery);