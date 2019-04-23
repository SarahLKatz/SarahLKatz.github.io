$(function() {
  // Populate Timeline
  const allEvents = [...ninetiesEvents, ...aughtsEvents, ...tensEvents]
  populateTimeline(allEvents)

  // Initial Load: Alternating Timeline
  realign()

  // BUTTONS:
  var pushed;
  var itemsVisible;
  firstClick();

  // 1 - On first click, hide all items
  function firstClick() {
    $("nav").one("click", function() {
      $("li").addClass("hide");
      onPush();
    })
  };

  // 2 - Display items for the chosen class

  $("button").click(onPush);

  function onPush() {
    var pushed = $(this).attr("id");
    $(this).toggleClass("selected")
    determineClass(pushed);
    filterItems(classChosen);
    emptyPageAlert();
  };

  // 2A - Determining the Chosen Class

  var classChosen

  function determineClass(pushed) {
    if (pushed === "mkButton") {
      classChosen = "mk"
    }

    else if (pushed === "epButton") {
      classChosen = "ep"
    }

    else if (pushed === "dhsButton") {
      classChosen = "dhs"
    }

    else if (pushed === "dakButton") {
      classChosen = "dak"
    }

    else if (pushed === "resortButton") {
      classChosen = "resort"
    }

    else if (pushed === "rDButton") {
      classChosen = "rD"
    }

    else {}
  };

  // 2B - Displaying the items

  function filterItems(category) {
    if (category === "mk") {
      $("li:has(.mk)").toggleClass("hide");
    }

    else if (category === "ep") {
      $("li:has(.ep)").toggleClass("hide");
    }

    else if (category === "dhs") {
      $("li:has(.dhs)").toggleClass("hide");
    }

    else if (category === "dak") {
      $("li:has(.dak)").toggleClass("hide");
    }

    else if (category === "resort") {
      $("li:has(.resort)").toggleClass("hide");
    }

    else if (category === "rD") {
      $("li:has(.rD)").toggleClass("hide");
    }

    else {}
 
    realign();
  }

  // BOTTOM:
  // 1- "Reset Timeline"
  $("#reset").click(function() {
    showAll();
    firstClick();
  });

  // 2 - "Return to Top"
  $("#top").click(toTop);

  function toTop(){
    scroll(0,0);
  };

  // Populate timeline function
  function populateTimeline(eventList) {
    var timeline = $(".timeline");
    eventList.forEach(event => {
      let eventHtml = `
        <li>
          <div class="timeline-badge ${event.park}">
            <i class="${event.park}-img"></i>
          </div>
          <div class="timeline-panel">
            <div class="timeline-heading">
              <h4 class="timeline-title">
                <time>${event.date}:</time>
                ${event.title}
              </h4>
            </div>
            <div class="timeline-body">
              <p>
                ${event.description}
              </p>
            </div>
          </div>
        </li>
      `;
      if (event.date) timeline.append(eventHtml);
    });
  }

  // Re-Alignment Function
  function realign() {
    // 1 - Remove "timeline-inverted" from all items
    $("li").removeClass("timeline-inverted");
    // 2 - Add "timeline-inverted" to every other visible li
    $("li:visible:odd").addClass("timeline-inverted");
  };

  // Show All Function
  function showAll() {
    $("li").removeClass("hide");
    $("button").removeClass("selected");
    $("p").hide();
    realign();
    toTop();
  }

  // More Information About Timeline Items
  // 1 - Have all additional info hidden 
  $("p").hide();

  // 2 - Display the paragraphs that are descendants of a selected item
  $('.timeline-panel').click(function() {
    $(this).find("p").toggle();
  });

  // Alert if nothing is displayed
  function emptyPageAlert() {
    var itemsVisible = $("li:visible").length;

    if (itemsVisible === 0) {
      // $(".timeline").append("<li><div class='instructions'><h4><span>Click a button above to see events related to that category. Click 'Reset Timeline' below to display all events.</span></h4></div></li>")
      // $(".timeline .instructions").show();
      showAll();
      $("button").addClass("selected");
    }
    else {
      // $(".timeline .instructions").hide();
    }
  }
});