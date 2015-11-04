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
              <h3>Watch your league grow with happy players</h3>
              <p>Your league will grow as players. Players will also find your league easier through our listings</p>
              <a href="local-sports-listing.html">Learn how to grow your league</a>
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
      <h2>Works with your league tool</h2>
      <p>Mitoo keeps track of changes <b>on your existing tools</b>. Any tool or website works! There's nothing new to learn.</p>
      <p>Setup is easy, within a few days your players can be using our app for your league. Need any help? we're available on the phone and email.</p>
      <p><a href="/leagues/how-it-works">Learn how it works</a></p>
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
          <h2>Players have one place for everything.</h2>
          <p>From game times, locations and standings to messages from the team and league, players have one place to look to know what's going on.</p>
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
          <h2>Group messaging for the whole team.</h2>
          <p>Team chats are setup automatically—so all the players are involved. Even players without the app receive email updates.</p>
          <p>It's great for captains who need to make sure players turn-up on time. And great for sharing team photos and bringing players together off-the-field.</p>
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
          <h2>Players always up-to-date.</h2>
          <p>Players are notified about important changes in real-time as they are made. Saving your staff time and keeping players organised.</p>
          <p>Players customize their notifications to their liking.</p>
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
    <ul>
      <li><a href="/leagues/stories/game-attendance.html">Social Leagues: How to reduces drop-outs and improve game attendance</a></li>
      <li><a href="/leagues/stories/brand-engagement.html">WAKA: Are players engaged around your brand</a></li>
      <li><a href="/leagues/stories/save-time-messaging.html">Grand Rapids: Save time getting key messages to captains and players</a></li>
      <li><a href="/leagues/stories/save-time-game-updates.html">Play Soccer Miami: Save time keeping player up-to-date with game changes</a></li>
      <li><a href="/leagues/stories/access-schedules.html">Premier Sport &amp; Social: do players alway have access to the schedules and standings</a></li>
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