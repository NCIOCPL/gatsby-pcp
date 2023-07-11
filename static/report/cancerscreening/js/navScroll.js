            $(function() {
                    /* New Scrolling nav code*/
                    var element = $('#topLevelNav'),
                    originalY = element.offset().top;
                    originalNavHeight = $("#topLevelNav").height();
                    //console.log("originalY  = " + originalY);
                    

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
                            
                            //New code to fix scenario loading with mobile nav and switching to side nav
                            if(originalY === 0)
                            {
                              originalY = $("#reportNavigation").offset().top + parseInt($("#reportNavigation").css("padding"));
                              //console.log("originalY updated to -> " + originalY);
                            }
                            
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
                       if(originalY > 0) {
                          //console.log("originalY greater than 0 -> " + originalY); 
                          resetTopLevelNavCSS();
                          originalY = 0;
                       }
                   });
                   
                   $("#closeNav").click(function(){
                       $("nav").hide();
                   });
                   
                   $(window).on("resize",  function(event) {
                        if($("#mnav").css('display') === 'none'  && $("nav").parent(".homepage").length === 0 ) //&& $("nav").css('display') === 'none'
                        {
                          $("nav").css("display","");  //$("nav").show();  //Enlarging window, make sure it's shown
                        }
                        /*else if($("#mnav").css('display') === 'none' && $("nav").css('display') === 'block' && $("nav").parent(".homepage").length === 0 ) 
                        {
                          $("nav").css("display","");  //$("nav").show();  //Enlarging window, make sure it's shown
                        }*/
                        
                       if($("#mnav").css('display') === 'none' && $("nav").css('display') === 'block' && $("nav").parent(".homepage").length === 1 ) $("nav").css("display","");  //$("nav").hide(); //make sure it's hidden on homepage.  
                       if($("#mnav").css('display') === 'block' && $("nav").css('display') === 'block' && !isNaN(parseInt($("#topLevelNav").css("top"))) && parseInt($("#topLevelNav").css("top")) !== 0) 
                        {
                            resetTopLevelNavCSS();
                            //$("nav").hide();
                        }
                    });
                    
                    function resetTopLevelNavCSS()
                    {
                           $("#topLevelNav").css("overflow","initial");
                           $("#topLevelNav").css("top","auto");
                           $("#topLevelNav").css("height","auto");
                           //console.log("topLevelNav CSS Reset "); 
                    }
                    
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
