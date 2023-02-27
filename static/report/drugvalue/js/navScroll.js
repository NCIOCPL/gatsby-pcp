            $(function() {
                    /* New Scrolling nav code*/
                    var element = $('#topLevelNav'),
                    originalY = element.offset().top;
                    originalNavHeight = $("#topLevelNav").height();

                    // Space between element and top of screen (when scrolling)
                    var topMargin = 20;

                    // Should probably be set in CSS; but here just for emphasis
                    element.css('position', 'relative');
                    
                    //on load, check nav height vs window.
                    if($("#topLevelNav").height()>$(window.top).height())
                        {
                           $("#topLevelNav").css("overflow","auto");
                        }else $("#topLevelNav").css("overflow","initial");
                    
                    $(window).on('scroll', function(event) {
                        var scrollTop = $(window).scrollTop();
                        var isMobile = false;
                        if($("#mnav").css('display') !== 'none') isMobile = true;
                        
                        if(!isMobile){
                            element.stop(false, false).animate({
                                top: scrollTop < originalY
                                        ? 0
                                        : scrollTop - originalY + topMargin
                            }, 0,'easeOutQuad'); 

                            if($("#topLevelNav").height()>=$(window.top).height())
                            {
                               $("#topLevelNav").height($(window.top).height());
                               $("#topLevelNav").css("overflow","auto");
                               //console.log("$(window.top).height() = " + $(window.top).height());
                            }else{ 
                                    $("#topLevelNav").css("overflow","initial");

                                if($("#topLevelNav").offset().top+50+$("#topLevelNav").height()>$(".footer-container").offset().top)
                                {
                                    //console.log("Nav cut off! Need to make scrollable!");
                                    $("#topLevelNav").height($(".footer-container").offset().top-$("#topLevelNav").offset().top-40);
                                    $("#topLevelNav").css("overflow","auto");

                                }else{
                                   if(originalNavHeight > 0)$("#topLevelNav").height(originalNavHeight);
                                   //console.log("turning overflow off");
                                   $("#topLevelNav").css("overflow","initial");
                                }
                            }
                        }
                        
                        
                    });
                    
                   //mobile nav code
                   $("#mnav").click(function(){
                       $("nav").toggle();
                   });
                   
                   $("#closeNav").click(function(){
                       $("nav").hide();
                   });
                   
                   $(window).on("resize",  function(event) {
                        if($("#mnav").css('display') === 'none' && $("nav").css('display') === 'none') $("nav").show();
                    });
                    
                    /*$(window).on("resize",  function(event) {
                        if($("#topLevelNav").height()>=$(window.top).height()-30)
                        {
                           $("#topLevelNav").height($(window.top).height()-40);
                           $("#topLevelNav").css("overflow","auto");
                        }else
                        {
                             $("#topLevelNav").height(originalNavHeight);
                             $("#topLevelNav").css("overflow","initial");
                        }
                    });*/

                   
             });
