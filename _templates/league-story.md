---
layout: home
excerpt:
tags:
---

<section class="header header--story">
  <div class="story story--header story--{{page.league_story.tone}}" style="background-image: url('/images/story-backgrounds/story-background--{{ page.league_story.name }}.jpg')">
    <div class="row header__content">
      <div class="block block--12">
        <div class="story__content">
          <h4 class="story__league-name">
            <img class="lazyload story__league-logo" data-src="/images/story-logos/story-logo--{{ page.league_story.name }}.png" data-srcset="/images/story-logos/story-logo--{{ page.league_story.name }}.png 1x, /images/story-logos/story-logo--{{ page.league_story.name }}@2x.png 2x, /images/story-logos/story-logo--{{ page.league_story.name }}@3x.png 3x" />
            {% if page.league_story.showtitle == true %}<span class="story__league-title">{{ page.league_story.title }}</span>{% endif %}
          </h4>
          <p class="story__problem">{{ page.league_story.problem }}</p>
          <div class="story__quote">
            <div class="quote quote--big">
              <h2 class="quote__text">{{ page.league_story.quote }}</h2>
              <p class="quote__owner">— {{ page.league_story.admin }}<span class="quote__owner__role">, {{ page.league_story.role }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="page-section page-section--league-story-info">
  <div class="row">
    <div class="block block--4">
      <h2 class="page-section__title">About</h2>
      <p class="page-section__text">
        {{ page.league_story.about}}
      </p>
    </div>
    <div class="block block--2">
      <h2 class="page-section__title">Sports</h2>
      <ul class="page-section__text">
        {% for sport in page.league_story.sports%}
          <li>{{sport}}</li>
        {% endfor %}
      </ul>
    </div>
    <div class="block block--6">
      <h2 class="page-section__title">Locations</h2>
      <img class="story__map" src="https://maps.googleapis.com/maps/api/staticmap?
    &size=470x300
    &maptype=roadmap
    {% for location in page.league_story.locations%}&markers=color:black%7Clabel:C%7C{{location}}{% endfor %}&key=AIzaSyDhd-b1uEVX9WRziK4ymfKxBo129UTJcHk" >
    </div>
  </div>
</section>
{% include _row-cta.html %}