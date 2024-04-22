export default async function decorate(block) {
  $(block).addClass("overview").parents('.slidercards-wrapper').addClass("viewport");
  const slider = "<div id='slidercards-slider'></div>";
  const sliderHtml = $(block).parents(".slidercards-wrapper");
  $(block).parents(".slidercards-container").append(slider);
  $("#slidercards-slider").append(sliderHtml);

  $("#slidercards-slider").tinycarousel({
    interval: true
  });

}
