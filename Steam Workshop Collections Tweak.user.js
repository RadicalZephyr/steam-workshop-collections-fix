// ==UserScript==
// @name         Steam Workshop Collections Tweak
// @namespace    http://zephyrizing.net/
// @version      0.1
// @description  Make adding items to a collection more sane.
// @author       RadicalZephyr
// @match        https://steamcommunity.com/sharedfiles/managecollection/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steamcommunity.com
// @run-at       document-idle
// @grant        unsafeWindow
// ==/UserScript==

(function() {
  'use strict';

  const $ = unsafeWindow.$;
  const jQuery = unsafeWindow.jQuery;

  const $mySub = jQuery("#MySubscribedItems");
  $mySub.height("auto");

  const selectAllId = "selectall_MySubscribedItems";
  $mySub.prepend('<div><input id="' + selectAllId + '" value="Select All" type="button"></div>');

  const baseDelay = 500;
  const randomDelay = 200;

  const $selectAll = jQuery("#"+selectAllId);
  $selectAll.on('click', function(event) {
    let delay = 0;
    $mySub.find(".itemChoice").each(function(index, el) {
      setTimeout(function() { el.click(); }, delay);
      delay += baseDelay + (randomDelay * Math.random());
    });
  });

  unsafeWindow.AddSpecifiedChildToCollection = function(elemId, childId) {
    const elem = $(elemId);
    if ( elem.hasClassName( "inCollection" ) ) { return; }

    const $form = jQuery("#AddChildItemForm"),
          formUrl = $form.attr("action"),
          id = $form.find("input[name='id']").val(),
          sessionId = $form.find("input[name='sessionid']").val(),
          activeSection = $form.find("input[name='activeSection']").val();

    jQuery.post(
      formUrl,
      { id: id, sessionid: sessionId, childid: childId, activeSection: activeSection },
      function(data) {
        var $choice = $(elemId);
        $choice.addClassName("inCollection");
        return false;
      },
      "html"
    );
    return false;
  };
})();
