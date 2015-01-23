
define(['jquery', '../app/logic'], function($, logic) {
        
    return {
    	draw: function draw(container) {
    		var wrapper = $('<div id="input"></div>')

    		wrapper.append('<textarea id="user_input"></textarea>')
    		wrapper.append($('<a href="#">eteenp&#228;in</a>').click(function(event) {
    			logic.process_input($('#user_input').val())
                event.preventDefault()
    		}))

    		$(container).empty();
    		$(container).append(wrapper)
    	}
    }

});