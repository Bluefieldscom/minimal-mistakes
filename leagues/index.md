---
layout: home
excerpt:
tags:
---

<!-- HERO HEADER -->
<section class="page-section page-section--hero" data-navigation-transparent>
  <div class="screenshot-header">
    <div class="screenshot"></div>
  </div>
</section>

<!-- FEATURES -->
<section class="page-section page-section--benefit">
  <div class="row">
    <div class="block block--8 block--centered">
      <div class="headline">
        <h1 class="headline__title">{{site.data.copy.league.headline}}</h1>
        <h3 class="headline__subtitle">{{site.data.copy.league.subline}}</h3>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="block block--12">
      <div class="benefits">
        <ul class="benefits__list">
          <li class="benefits__item benefits__item--active">
              <h3>{{site.data.copy.league.benefits.autopilot.title}}</h3>
              <p>{{site.data.copy.league.benefits.autopilot.description}}</p>
              <a href="autopilot.html">{{site.data.copy.league.benefits.autopilot.link}}</a>
          </li>
          <li class="benefits__item">
              <h3>{{site.data.copy.league.benefits.messaging.title}}</h3>
              <p>{{site.data.copy.league.benefits.messaging.description}}</p>
              <a href="autopilot.html">{{site.data.copy.league.benefits.messaging.link}}</a>
          </li>
          <li class="benefits__item">
              <h3>{{site.data.copy.league.benefits.listing.title}}</h3>
              <p>{{site.data.copy.league.benefits.listing.description}}</p>
              <a href="local-sports-listing.html">{{site.data.copy.league.benefits.listing.description}}</a>
          </li>
        </ul>
        <div class="benefits__images">
          <img
            class="lazyload"
            data-src="/images/graphics/graphic--iphone-notifications.png"
            data-srcset="/images/graphics/graphic--iphone-notifications.png 1x, /images/graphics/graphic--iphone-notifications@2x.png 2x, /images/graphics/graphic--iphone-notifications@3x.png 3x"  />

          <img
            class="lazyload hide"
            data-src="/images/graphics/graphic--iphone-messaging.png"
            data-srcset="/images/graphics/graphic--iphone-messaging.png 1x, /images/graphics/graphic--iphone-messaging@2x.png 2x, /images/graphics/graphic--iphone-messaging@3x.png 3x"  />

          <img
            class="lazyload hide"
            data-src="/images/graphics/graphic--iphone-league-listing.png"
            data-srcset="/images/graphics/graphic--iphone-league-listing.png 1x, /images/graphics/graphic--iphone-league-listing@2x.png 2x, /images/graphics/graphic--iphone-league-listing@3x.png 3x"  />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NO IMPLEMENTATION -->
<section class="page-section page-section--special">
  <div class="row">
    <div class="block block--6 block--centered text-center">
      <div>
        <img
          class="lazyload"
          data-src="/images/graphics/graphic--no-integration.png"
          data-srcset="/images/graphics/graphic--no-integration.png 1x, /images/graphics/graphic--no-integration@2x.png 2x, /images/graphics/graphic--no-integration@3x.png 3x"  />
      </div>
      <h2>{{site.data.copy.league.benefits.integration.title}}</h2>
      <p>{{site.data.copy.league.benefits.integration.description}}</p>
      <p>{{site.data.copy.league.benefits.integration.description_2}}</p>
      <p><a href="/leagues/how-it-works">{{site.data.copy.league.benefits.integration.link}}</a></p>
    </div>
  </div>
</section>



<!-- EVERYTHING IN ONE PLACE -->
<section class="page-section page-section--feature">
  <div class="row">
    <div class="block block--12">
      <div class="feature feature--all-in-one-place">
        <div class="feature__image">
          <img
            class="lazyload"
            data-src="/images/graphics/graphic--all-in-one-place.png"
            data-srcset="/images/graphics/graphic--all-in-one-place.png 1x, /images/graphics/graphic--all-in-one-place@2x.png 2x, /images/graphics/graphic--all-in-one-place@3x.png 3x"  />
        </div>
        <div class="feature__content">
          <h2>{{site.data.copy.league.benefits.allinone.title}}</h2>
          <p>{{site.data.copy.league.benefits.allinone.description}}</p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- GROUP MESSAGING -->
<section class="page-section page-section--feature">
  <div class="row">
    <div class="block block--12">

      <div class="feature feature--reverse feature--messaging">
        <div class="feature__image">
          <img
            class="lazyload"
            data-src="/images/graphics/graphic--messaging.png"
            data-srcset="/images/graphics/graphic--messaging.png 1x, /images/graphics/graphic--messaging@2x.png 2x, /images/graphics/graphic--messaging@3x.png 3x"  />
        </div>
        <div class="feature__content">
          <h2>{{site.data.copy.league.benefits.team_messaging.title}}</h2>
          <p>{{site.data.copy.league.benefits.team_messaging.description}}</p>
          <p>{{site.data.copy.league.benefits.team_messaging.description_2}}</p>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- PLAYERS IN THE LOOP -->
<section class="page-section page-section--feature">
  <div class="row">
    <div class="block block--12">
      <div class="feature feature--notifications">
        <div class="feature__image">
          <img
            class="lazyload"
            data-src="/images/graphics/graphic--notifications.png"
            data-srcset="/images/graphics/graphic--notifications.png 1x, /images/graphics/graphic--notifications@2x.png 2x, /images/graphics/graphic--notifications@3x.png 3x"  />
        </div>
        <div class="feature__content">
          <h2>{{site.data.copy.league.benefits.notifications.title}}</h2>
          <p>{{site.data.copy.league.benefits.notifications.description}}</p>
          <p>{{site.data.copy.league.benefits.notifications.description_2}}</p>
        </div>
      </div>
    </div>
  </div>
</section>


<!-- OUR LEAGUES -->
<section class="page-section">
  <div class="row">
    <div class="block block--12">
      <h2 class="text-center">Our most valued leagues</h2>
      <ul class="league-grid">
        {% for league in site.data.league_logos %}
          <li class="league-grid__league">
            <img
              class="lazyload"
              data-src="/images/league-logos/league-logo--{{league.name}}.png"
              data-srcset="/images/league-logos/league-logo--{{league.name}}.png 1x, /images/league-logos/league-logo--{{league.name}}@2x.png 2x, /images/league-logos/league-logo--{{league.name}}@3x.png 3x"  />
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>


<!-- League stories -->
<section class="page-section">
  <div class="row">
    <h2>League Stories</h2>
    <ul class="storie-grid">
      <li class="storie-grid__story storie-grid__story--social-leagues">
        <a href="/leagues/stories/game-attendance.html">
          <img
            class="lazyload"
            data-src="/images/league-logos/league-logo--social-leagues.png"
            data-srcset="/images/league-logos/league-logo--social-leagues.png 1x, /images/league-logos/league-logo--social-leagues@2x.png 2x, /images/league-logos/league-logo--social-leagues@3x.png 3x"  />
          <h4>Social Leagues</h4>
          <p>How to reduces drop-outs and improve game attendance</p>
        </a>
      </li>
      <li class="storie-grid__story storie-grid__story--social-waka storie-grid__story--black-text">
        <a href="/leagues/stories/brand-engagement.html">
          <img
            class="lazyload"
            data-src="/images/league-logos/league-logo--waka.png"
            data-srcset="/images/league-logos/league-logo--waka.png 1x, /images/league-logos/league-logo--waka@2x.png 2x, /images/league-logos/league-logo--waka@3x.png 3x"  />
          <h4>WAKA</h4>
          <p>Are players engaged around your brand</p>
        </a>
      </li>
      <li class="storie-grid__story storie-grid__story--grand-rapids storie-grid__story--black-text">
        <a href="/leagues/stories/save-time-messaging.html">
          <img
            class="lazyload"
            data-src="/images/league-logos/league-grand-rapids.png"
            data-srcset="/images/league-logos/league-logo--grand-rapids.png 1x, /images/league-logos/league-logo--grand-rapids@2x.png 2x, /images/league-logos/league-logo--grand-rapids@3x.png 3x"  />
          <h4>Grand Rapids</h4>
          <p>Save time getting key messages to captains and players</p>
        </a>
      </li>
      <li class="storie-grid__story storie-grid__story--player-soccer-miami">
        <a href="/leagues/stories/save-time-game-updates.html">
          <img
            class="lazyload"
            data-src="/images/league-logos/league-logo--player-soccer-miami.png"
            data-srcset="/images/league-logos/league-logo--player-soccer-miami.png 1x, /images/league-logos/league-logo--player-soccer-miami@2x.png 2x, /images/league-logos/league-logo--player-soccer-miami@3x.png 3x"  />
          <h4>Play Soccer Miami</h4>
          <p>Save time keeping player up-to-date with game changes</p>
        </a>
      </li>
      <li class="storie-grid__story storie-grid__story--premier-social-sports storie-grid__story--black-text">
        <a href="/leagues/stories/access-schedules.html">
          <img
            class="lazyload"
            data-src="/images/league-logos/league-logo--premier-social-sports.png"
            data-srcset="/images/league-logos/league-logo--premier-social-sports.png 1x, /images/league-logos/league-logo--premier-social-sports@2x.png 2x, /images/league-logos/league-logo--premier-social-sports@3x.png 3x"  />
          <h4>Premier Sport &amp; Social</h4>
          <p>do players alway have access to the schedules and standings</p>
        </a>
      </li>
    </ul>
  </div>
</section>

<section class="page-section">
  <div class="row">
    <h2>Sports messenger is <b>free</b> for leagues of any size</h2>
    <a href="/leagues/try-it-now.html">Try it now</a>
    <small>We have an VIP package</small>
  </div>
</section>

<section class="page-section">
  <div class="row">
    <h2>Players love us</h2>

    ***** "The UI is beautiful. Very easy to use."
    ***** "Awesome app!!!!! This app is kickass. Very useful to get in the loop for sports events."
    ***** "Our team finally talks! I'm impressed by the functionality of this app. Straightforward, easy to use, easy to integrate. Kudos for the great product, recommending it."

  </div>
</section>