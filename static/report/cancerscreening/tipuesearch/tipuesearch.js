/*
Tipue Search 5.0
Copyright (c) 2015-2016 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search

Tipue Search 6.0
Copyright (c) 2016 TNG Consulting Inc.
Contributor: Michael Milette - www.tngconsulting.ca
Date: 2016-07-16
See README for details.
*/

(function($) {

     $.fn.tipuesearch = function(options) {

          var set = $.extend( {

               'show'                   : 7,
               'newWindow'              : false,
               'showURL'                : true,
               'showTitleCount'         : true,
               'minimumLength'          : 3,
               'descriptiveWords'       : 25,
               'highlightTerms'         : true,
               'highlightEveryTerm'     : false,
               'mode'                   : 'static',
               'liveDescription'        : '*',
               'liveContent'            : '*',
               'contentLocation'        : 'tipuesearch/tipuesearch_content.json',
               'queryParamName'         : 'q',
               'resultsDivID'           : '#tipue_search_content',
               'maxindex'               : 3,
               'listtype'               : 'normal',   // or 'numeric'
               'wholewordsonly'         : true,
               'allterms'               : false,
               'showDuration'           : false,
               'debug'                  : false

          }, options);

          set.input = this[0].id;
          
          return this.each(function() {

               var tipuesearch_in = {
                    pages: []
               };
               $.ajaxSetup({
                    async: false
               });
               var tipuesearch_t_c = 0;

               if (set.mode == 'live')
               {
                    for (var i = 0; i < tipuesearch_pages.length; i++)
                    {
                         $.get(tipuesearch_pages[i])
                              .done(function(html)
                              {
                                   var cont = $(set.liveContent, html).text();
                                   cont = cont.replace(/\s+/g, ' ');
                                   var desc = $(set.liveDescription, html).text();
                                   desc = desc.replace(/\s+/g, ' ');

                                   var t_1 = html.toLowerCase().indexOf('<title>');
                                   var t_2 = html.toLowerCase().indexOf('</title>', t_1 + 7);
                                   if (t_1 != -1 && t_2 != -1)
                                   {
                                        var tit = html.slice(t_1 + 7, t_2);
                                   }
                                   else
                                   {
                                        var tit = tipuesearch_string_1;
                                   }

                                   tipuesearch_in.pages.push(
                                   {
                                        "title": tit,
                                        "text": desc,
                                        "tags": cont,
                                        "url": tipuesearch_pages[i]
                                   });
                              });
                    }
               }

               if (set.mode == 'json')
               {
                    $.getJSON(set.contentLocation)
                         .done(function(json)
                         {
                              tipuesearch_in = $.extend({}, json);
                         });
               }

               if (set.mode == 'static')
               {
                    tipuesearch_in = $.extend({}, tipuesearch);
               }

               var tipue_search_w = '';
               if (set.newWindow)
               {
                    tipue_search_w = ' target="_blank"';
               }

               function getURLP(name)
               {
                    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20')) || null;
               }
               if (getURLP(set.queryParamName))
               {
                    $("#" + set.input).val(getURLP(set.queryParamName));
                    getTipueSearch(0, true);
               }

               $(this).keyup(function(event)
               {
                    if(event.keyCode == '13')
                    {
                         getTipueSearch(0, true);
                    }
               });


               function getTipueSearch(start, replace)
               {
                    $(set.resultsDivID).hide();
                    $(set.resultsDivID).html('<div class="tipue_search_spinner"><div class="tipue_search_rect1"></div><div class="tipue_search_rect2"></div><div class="rect3"></div></div>');
                    $(set.resultsDivID).show();

                    var out = '';
                    var results = '';
                    var show_replace = false;
                    var show_stop = false;
                    var c = 0;
                    found = [];

                    var d = $("#" + set.input).val().toLowerCase();

                    // Split the string using space but ignore space in quotes.
                    var re = /[^\s"]+|"([^"]*)"/gi;

                    d_w = [];
                    do
                    {
                        var match = re.exec(d);
                        if (match != null)
                        {
                            //Index 1: captured group
                            //Index 0: matching text if no captured group exists
                            d_w.push(match[1] ? $.trim(match[1]) : $.trim(match[0]));
                        }
                    }
                    while (match != null);

                    d = '';
                    // Check each term against the list of STOP words.
                    for (var i = d_w.length-1; i >= 0 ; i--)
                    {
                         var a_w = true;
                         for (var f = 0; f < tipuesearch_stop_words.length; f++)
                         {
                              d_w[i] = $.trim(d_w[i]);
                              if (d_w[i] == tipuesearch_stop_words[f])
                              {
                                   a_w = false;
                                   show_stop = true;
                              }
                         }
                         if (a_w)
                         {
                              d = d + ' ' + d_w[i];
                         }
                         else
                         {
                              d_w[i].remove;
                         }
                    }

                    if (d.length >= set.minimumLength)
                    {
                         if (replace)
                         {
                              var d_r = d;
                             // Check each term against the list of REPLACE words.
                              for (var i = 0; i < d_w.length; i++)
                              {
                                   for (var f = 0; f < tipuesearch_replace.words.length; f++)
                                   {
                                        if (d_w[i] == tipuesearch_replace.words[f].word)
                                        {
                                             d_w[i] = d_w[i].replace(d_w[i], tipuesearch_replace.words[f].replace_with);
                                             show_replace = true;
                                        }
                                   }
                              }
                         }

                         // Check each term against the list of STEM words.
                         for (var i = 0; i < d_w.length; i++)
                         {
                              for (var f = 0; f < tipuesearch_stem.words.length; f++)
                              {
                                   if (d_w[i] == tipuesearch_stem.words[f].word)
                                   {
                                        d_w[i] = d_w[i] + ' ' + tipuesearch_stem.words[f].stem;
                                   }
                              }
                         }

                         // For each page...
                         for (var i = 0; i < tipuesearch_in.pages.length; i++)
                         {
                              var score = 0;
                              var s_t = tipuesearch_in.pages[i].text;
                              allfound = true;

                              // For each term in the list of search terms...
                              for (var f = 0; f < d_w.length; f++)
                              {
                                   thisscore = 0; // Calculate score of current term.

                                   // Escaped search term so that special regex characters don't get interpreted as regular expression.
                                   var term = RegExp.escape(d_w[f]);

                                   // The following expressions are required in order to correctly handle search terms containing accented characters.
                                   // Note: \b word boundaries isn't good enough because it doesn't handle accented characters properly.
                                   var regex_pre  = '(?:^|\\s|\'|\\"|\\(|\\)|\\[|\\]|\\{|\\<|#|\\^|\\$|_|-|\\.|\\,|\\+|`|\\||\\@|\\$|\\%|“|\\¿|\\¡)';
                                   var regex_post = '(?:$|\\s|\'|\\"|\\(|\\)|\\[|\\]|\\{|\\<|#|\\^|\\$|_|-|\\.|\\,|\\+|`|\\||\\@|\\$|\\%|”|\\?|\\!)';

                                   if (set.wholewordsonly)
                                   {
                                       // If word has leading asterisk.
                                       if (term.substring(0,2) == '\\*')
                                       {
                                           // Don't try to detect leading word boundary.
                                           regex_pre = '';
                                       }

                                       // If word has trailing asterisk.
                                       if (term.substring(term.length-2) == '\\*')
                                       {
                                           // Don't try to detect trailing word boundary.
                                           regex_post = '';
                                       }
                                   }

                                   // Strip asterisks from string and replace question mark with period (single character wildcard).
                                   var pat = new RegExp(regex_pre + term.replace(/\\\*/g, '').replace(/\\\?/g, '.') + regex_post, 'gi');

                                   // Calculate search score.

                                   // In Title...
                                   if (tipuesearch_in.pages[i].title.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].title.match(pat).length;
                                        thisscore += (20 * m_c);
                                   }

                                   // In content text...
                                   if (tipuesearch_in.pages[i].text.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].text.match(pat).length;
                                        thisscore += (20 * m_c);
                                   }

                                   // In tags...
                                   if (tipuesearch_in.pages[i].tags.search(pat) != -1)
                                   {
                                        var m_c = tipuesearch_in.pages[i].tags.match(pat).length;
                                        thisscore += (10 * m_c);
                                   }

                                   // And in URL but only if found above...
                                   if (tipuesearch_in.pages[i].url.search(pat) != -1)
                                   {
                                        thisscore += 20;
                                   }

                                   // Apply additional weight to specified pages...
                                   if (thisscore != 0)
                                   {
                                        for (var e = 0; e < tipuesearch_weight.weight.length; e++)
                                        {
                                             if (tipuesearch_in.pages[i].url == tipuesearch_weight.weight[e].url)
                                             {
                                                  thisscore += tipuesearch_weight.weight[e].score;
                                             }
                                        }
                                   }

                                   // If search term was prefixed by a dash, remove it from search results.
                                   if (thisscore && term.match('^-'))
                                   {
                                        pat = new RegExp(term.substring(1), 'i');
                                        if (tipuesearch_in.pages[i].title.search(pat) != -1 || tipuesearch_in.pages[i].text.search(pat) != -1 || tipuesearch_in.pages[i].tags.search(pat) != -1)
                                        {
                                             thisscore = 0;
                                        }
                                   }

                                   // Highlight each term if found in page titles.
                                   if (thisscore && set.highlightTerms)
                                   {
                                        if (set.highlightEveryTerm)
                                        {
                                             var patr = new RegExp('(' + regex_pre + term.replace(/\\\*/g, '').replace(/\\\?/g, '.') + regex_post + ')', 'gi');
                                        }
                                        else
                                        {
                                             var patr = new RegExp('(' + regex_pre + term.replace(/\*/g, '').replace(/\\\?/g, '.') + regex_post + ')', 'i');
                                        }

                                        s_t = s_t.replace(/&amp;/ig, '&');
                                        s_t = s_t.replace(/&nbsp;/ig, '');
                                        s_t = s_t.replace(patr, '<span class="h01">$1</span>');
                                        s_t = s_t.replace(eval("//g"), '');
                                        s_t = s_t.replace(eval("//g"), '&nbsp;');

                                        tipuesearch_in.pages[i].title = tipuesearch_in.pages[i].title.replace(/&amp;/ig, '&');
                                        tipuesearch_in.pages[i].title = tipuesearch_in.pages[i].title.replace(/&nbsp;/ig, '');
                                        tipuesearch_in.pages[i].title = tipuesearch_in.pages[i].title.replace(patr, '<span class="h01">$1</span>');
                                        tipuesearch_in.pages[i].title = tipuesearch_in.pages[i].title.replace(eval("//g"), '');
                                        tipuesearch_in.pages[i].title = tipuesearch_in.pages[i].title.replace(eval("//g"), '&nbsp;');
                                   }

                                   // If we only want results containing all terms, eliminate those that do not.
                                   if (set.allterms && thisscore == 0 && allfound)
                                   {
                                       // Skip rest of search terms if any term failed to be a match.
                                       score = 0;
                                       break;
                                   }
                                   score += thisscore;
                              }

                              if (score != 0)
                              {
                                   found.push(
                                   {
                                        "score": score,
                                        "title": tipuesearch_in.pages[i].title,
                                        "desc": s_t,
                                        "url": tipuesearch_in.pages[i].url
                                   });
                                   c++;
                              }
                         }

                         // If there are pages found...
                         if (c != 0)
                         {
                              if (set.showTitleCount && tipuesearch_t_c == 0)
                              {
                                   var title = document.title;
                                   document.title = '(' + c + ') ' + title;
                                   tipuesearch_t_c++;
                              }

                              if (show_replace == 1)
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_2 + ' ' + d + '. ' + tipuesearch_string_3 + ' <a id="tipue_search_replaced">' + d_r + '</a></div>';
                              }

                              // Display search results count.
                              if (c == 1)
                              {
                                   out += '<div id="tipue_search_results_count">' + tipuesearch_string_4 + '</div>';
                              }
                              else
                              {
                                   // Also display total number of pages if more than one page.
                                   c_c = c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                   var totalpages = Math.ceil(c / set.show);
                                   out += '<div id="tipue_search_results_count">' + c_c + ' ' + tipuesearch_string_5 + ' - ' + totalpages + ' ' + tipuesearch_string_16 + '</div>';
                              }

                              // Sort results by score.
                              found.sort(function(a, b) { return b.score - a.score } );

                              var l_o = 0;
                              for (var i = 0; i < found.length; i++)
                              {
                                   if (l_o >= start && l_o < set.show + start)
                                   {
                                        listnum = (set.listtype == 'numeric' ? '<strong>' + (l_o + 1) + '.</strong>&nbsp;' : '');
                                        out += '<div class="tipue_search_content_title"><a href="' + found[i].url + location.search + '"' + tipue_search_w + '>' + listnum + found[i].title + '</a></div>';

                                        if (set.debug)
                                        {
                                             // The word "Score:" is no longer hard coded.
                                             out += '<div class="tipue_search_content_debug">' + tipuesearch_string_17 + ' ' + found[i].score + '</div>';
                                        }

                                        if (set.showURL)
                                        {
                                             var s_u = found[i].url.toLowerCase();
                                             if(s_u.indexOf('http://') == 0)
                                             {
                                                  s_u = s_u.slice(7);
                                             }
                                             out += '<div class="tipue_search_content_url"><a href="' + found[i].url + location.search + '"' + tipue_search_w + '>' + s_u + '</a></div>';
                                        }

                                        if (found[i].desc)
                                        {
                                             var t = found[i].desc;
                                             // Trim almost everything before the first highlighted term so that it
                                             // appears in the content context portion of the search results.
                                             firstterm = t.indexOf('<span class="h01"')
                                             if (firstterm > 30)
                                             {
                                                  t = '...' + t.substring(firstterm - 30);
                                             }

                                             var t_d = '';
                                             var t_w = t.split(' ');
                                             if (t_w.length < set.descriptiveWords)
                                             {
                                                  t_d = t;
                                             }
                                             else
                                             {
                                                  for (var f = 0; f < set.descriptiveWords; f++)
                                                  {
                                                       t_d += t_w[f] + ' ';
                                                  }
                                             }
                                             t_d = $.trim(t_d);
                                             if (t_d.charAt(t_d.length - 1) != '.')
                                             {
                                                  t_d += ' ...';
                                             }
                                             out += '<div class="tipue_search_content_text">' + t_d + '</div>';
                                        }
                                   }
                                   l_o++;
                              }

                              if (c > set.show)
                              {
                                   var pages = Math.ceil(c / set.show);

                                   // Display up to specified number of page boxes, first, previous, next and last buttons.
                                   // Links now also work correctly in the keyboard tab order of the page.

                                   // If there is more than one page.
                                   if (pages > 1)
                                   {
                                        var page = (start / set.show);
                                        out += '<div id="tipue_search_foot"><ul id="tipue_search_foot_boxes">';

                                        if (start > 0)
                                        {
                                            // First button.
                                            out += '<li><a href="#" class="tipue_search_foot_box" id="0_' + replace + '">' + tipuesearch_string_14 + '</a></li>';
                                            // Previous button.
                                            out += '<li><a href="#" class="tipue_search_foot_box" id="' + (start - set.show) + '_' + replace + '">' + tipuesearch_string_6 + '</a></li>';
                                        }

                                        // Set range for list of pages.
                                        lowerLimit = page - Math.floor(set.maxindex / 2);
                                        upperLimit = page + Math.floor(set.maxindex / 2);
                                        if (lowerLimit < 0 )
                                        {
                                            upperLimit -= lowerLimit;
                                            lowerLimit = 0;
                                        }

                                        if (upperLimit > pages)
                                        {
                                            lowerLimit -= (upperLimit - pages);
                                            upperLimit = pages;
                                        }

                                        if (lowerLimit < 0)
                                        {
                                            lowerLimit = 0;
                                        }

                                        // Output list of pages, if any.
                                        for (var i = lowerLimit; i < upperLimit; i++)
                                        {
                                            if (i == page)
                                            {
                                                out += '<li class="current">' + (i + 1) + '</li> ';
                                            }
                                            else
                                            {
                                                out += '<li><a href="#" class="tipue_search_foot_box" id="' + (i * set.show) + '_' + replace + '">' + (i + 1) + '</a></li>';
                                            }
                                        }

                                        if (page + 1 != pages)
                                        {
                                            // Next button.
                                            out += '<li><a href="#" class="tipue_search_foot_box" id="' + (start + set.show) + '_' + replace + '">' + tipuesearch_string_7 + '</a></li>';
                                            // Last button.
                                            out += '<li><a href="#" class="tipue_search_foot_box" id="' + Math.floor((pages-1) * set.show) + '">' + tipuesearch_string_15 + '</a></li>';
                                        }

                                        out += '</ul></div>';
                                   }
                              }
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_8 + '</div>';
                         }
                    }
                    else
                    {
                         if (show_stop)
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_8 + '. ' + tipuesearch_string_9 + '</div>';
                         }
                         else
                         {
                              out += '<div id="tipue_search_warning">' + tipuesearch_string_10 + '</div>';
                              if (set.minimumLength == 1)
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_11 + '</div>';
                              }
                              else
                              {
                                   out += '<div id="tipue_search_warning">' + tipuesearch_string_12 + ' ' + set.minimumLength + ' ' + tipuesearch_string_13 + '</div>';
                              }
                         }
                    }

                    // Calculate duration of search.
                    if (set.showDuration)
                    {   // Note: "startTime" is defined in tipuesearch_set.js
                        var endTime = new Date().getTime();
                        var duration = (endTime - startTime)/1000;
                        out += '<p class="tipue_search_duration">' + tipuesearch_string_18.replace('$1', +duration.toFixed(3)) + '</p>';
                    }

                    $(set.resultsDivID).hide();
                    $(set.resultsDivID).html(out);
                    $(set.resultsDivID).slideDown(200);

                    $('#tipue_search_replaced').click(function()
                    {
                         getTipueSearch(0, false);
                    });

                    $('.tipue_search_foot_box').click(function()
                    {
                         var id_v = $(this).attr('id');
                         var id_a = id_v.split('_');

                         getTipueSearch(parseInt(id_a[0]), id_a[1]);
                    });
               }

          });
     };

})(jQuery);

// ===================================================
// Support for Per_Page and All vs. Any term options.
// ===================================================

// Description: Polyfill for RegExp.escape
// Copyright CC0 1.0 Universal Benjamin Gruenbaum 2015
// Ref: https://github.com/benjamingr/RegExp.escape
if(!RegExp.escape){
    RegExp.escape = function(s){
        return String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    };
}
// Retrieves the value of a the specified key from the parameters in the URL.
function getUrlParam(key){
    var value = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return value && unescape(value[1]) || ""; 
}

// Get the number of pages to display for the page navigation at the bottom of the page.
// Default is 10 pages.
var tipue_per_page = getUrlParam('per_page');
if (tipue_per_page != '') {
    tipue_per_page = parseInt(tipue_per_page);
    $("#tipue_per_page").val(tipue_per_page);
}
// Determine whether we should search for All or just Any of the search terms.
var tipue_match_type = (getUrlParam('matchtype') == 1);
if (tipue_match_type) {
    $('#all').prop('checked', true);
} else {
    $('#any').prop('checked', true);
}

$(document).ready(function() {
    // ===================================================
    // Support for Search Help popup.
    // ===================================================

    function deselect(e) {
        $('.tipue_search_pop').slideFadeToggle(function() {
            e.removeClass('selected');
        });
    }

    // Description: Shows and hides Search Help dialogue box.
    $('#help').on('click', function() {
        if($(this).hasClass('selected')) {
            deselect($(this));
        } else {
            $(this).addClass('selected');
            $('.tipue_search_pop').slideFadeToggle();
        }
        return false;
    });

    // Description: Closes the Search Help dialogue box.
    $('.close').on('click', function() {
        deselect($('#help'));
        return false;
    });

    // Description: Animates the opening and closing of the Help dialogue box.
    $.fn.slideFadeToggle = function(easing, callback) {
      return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
    };
    
});