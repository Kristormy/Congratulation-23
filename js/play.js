  var miss = 0;
    var hit = 0;
        
    $(document).ready(function() {

        var play;

        $("#btnstart").click(function(){
            startplay();
        });

        function startplay() {
            $("#message").fadeOut('slow');
            $(".character").fadeOut('slow');
            $("#hit").html("0 попал");
			$("#miss").html("0 мимо");
            hit = 0;
			miss = 0;
            $("#btnstart").css("color", "#e3e3e3");
            $("#btnstart").unbind("click");
            play = setInterval(scramble, 1800);
            setTimeout(function() {
                clearInterval(play);
                $("#btnstart").css("color", "#333333");
                $("#btnstart").bind("click", startplay);

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
            }, 5000);
        }

        $(".character").click(function() {
            if ($(this).hasClass("ally")) {
                $(this).effect("bounce", {
                    times: 2,
                    direction: 'left'
                }, 300);
                $(this).slideUp("fast");
                miss++;
                $("#miss").html(miss + " мимо");
            } else {

                $(this).effect("explode", 500);
                hit++;
                $("#hit").html(hit + " в цель");
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
        }, 500);
        
        setTimeout(function() {
            $("#char"+randomId).slideUp('fast');
        }, 1500);
    }

    function moveRandom(id) {
        /* Получаем положение контейнера и размер
         * -- метод доступа: cPos.top и cPos.left */
        var cPos = $('#container').offset();
        var cHeight = $('#container').height();
        var cWidth = $('#container').width();

        // Получаем отступы прямоугольника (предполагаем, что все отступы равны)
        var pad = parseInt($('#container').css('padding-top').replace('%', ''));

        // Получаем размер перемещаемого прямоугольника
        var bHeight = $('#'+id).height();
        var bWidth = $('#'+id).width();

        // Устанавливаем максимум для положения
        maxY = cPos.top + cHeight - bHeight - pad;
        maxX = cPos.left + cWidth - bWidth - pad;

        // Устанавливаем минимум для положение
        minY = cPos.top + pad;
        minX = cPos.left + pad;

        // Устанавливаем новое положение
        newY = randomFromTo(minY, maxY);
        newX = randomFromTo(minX, maxX);

        $('#'+id).animate({
            top: newY,
            left: newX
            }, 'slow', function() {
        });
    }