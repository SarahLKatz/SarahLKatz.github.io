var events = [
  {
    park: "dhs",
    date: "June 30th, 2018",
    title: "Toy Story Land Opens",
    description:
      "Themed to the popular Pixar film series <em>Toy Story</em>, this new land at Disney's Hollywood Studios features two new attractions, Slinky Dog Dash and Alien Swirling Saucers, joining the already open Toy Story Midway Mania."
  }
];

$(function() {
  var timeline = $(".timeline");
  events.forEach(event => {
    let eventHtml = `<li><div class="timeline-badge ${event.park}">
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
      </li>`;
    if (event.date) timeline.append(eventHtml);
  });
});