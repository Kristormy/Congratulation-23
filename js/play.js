   var hit = 0;
  var miss = 0;
    
        
    $(document).ready(function() {

        var play;

        $("#start").click(function(){
            startplay();
        });

        function startplay() {
            $("#message").fadeOut('slow');
            $(".character").fadeOut('slow');
            $("#hit").html("0 попал");
			$("#miss").html("0 мимо");
           
			hit = 0;
			miss = 0;
            
			$("#start").css("color", "#e3e3e3");
            $("#start").unbind("click");
            
			play = setInterval(scramble, 2000);
            setTimeout(function() {
                clearInterval(play);
                $("#start").css("color", "#333333");
                $("#start").bind("click", startplay);

                // Выводим финальное сообщение
                var containerPos = $('#container').offset();
                $("#message").animate({
                    top: containerPos.top,
                    left: containerPos.left
                    }, 'fast', function() {
                        setTimeout(function() {
                            $("#message").fadeIn('slow');                           
                        }, 500);
                });
            }, 15000);
        }

        $(".character").click(function() {
            if ($(this).hasClass("animals")) {
                $(this).effect("bounce", {
                    times: 3,
                    direction: 'left'
                }, 300);
                $(this).slideUp("fast");
                miss++;
                $("#miss").html(miss + " мимо");
            } 
			else {

                $(this).effect("explode", 500);
                hit++;
                $("#hit").html(hit + " попал");
            }
        });
    });

    function randomFromTo(from, to){
        return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function scramble() {
        var children = $('#container').children();

        var randomId = randomFromTo(1, children.length);
        moveRandom('char'+randomId);
        
		setTimeout(function(){
            $("#char"+randomId).slideDown('fast');            
        }, 100);
        
        setTimeout(function() {
            $("#char"+randomId).slideUp('fast');
        }, 1500);
    }

    function moveRandom(id) {
        /* Получаем положение контейнера и размер
         * -- метод доступа: SizePos.top и SizePos.left */
        var SizePos = $('#container').offset();
        var SizeHeight = $('#container').height();
        var SizeWidth = $('#container').width();

        // Получаем отступы прямоугольника (предполагаем, что все отступы равны)
        var pad = parseInt($('#container').css('padding-top').replace('%', ''));

        // Получаем размер перемещаемого прямоугольника
        var newHeight = $('#'+id).height();
        var newWidth = $('#'+id).width();

        // Устанавливаем максимум для положения
        maxY = SizePos.top + SizeHeight - newHeight - pad;
        maxX = SizePos.left + SizeWidth - newWidth - pad;

        // Устанавливаем минимум для положение
        minY = SizePos.top + pad;
        minX = SizePos.left + pad;

        // Устанавливаем новое положение
        newY = randomFromTo(minY, maxY);
        newX = randomFromTo(minX, maxX);

        $('#'+id).animate({
            top: newY,
            left: newX
            }, 'slow', function() {
        });
    }
