---
layout: home
excerpt: "A minimal Jekyll theme for your blog by designer Michael Rose."
tags: [Jekyll, theme, responsive, blog, template]
---


<section class="header header--home">
  <div class="row header__content">
    <div class="block block--8 block--centered">
      <div class="headline headline--home">
        <h1 class="headline__title">
          <img
          class="lazyload"
          data-src="/images/logos/logo--header.png"
          data-srcset="/images/logos/logo--header.png 1x, /images/logos/logo--header@2x.png 2x, /images/logos/logo--header@3x.png 3x"  />
        </h1>
        <!-- <h3 class="headline__subtitle">{{site.data.copy.home.subline}}</h3> -->
      </div>
    </div>
  </div>
</section>

<section class="page-section page-section--app-presentation">
  <div class="row">



    <div class="block block--6">
      <div class="app app--team">
        <img
            class="app__icon lazyload"
            data-src="/images/app-icons/app-icon--team.png"
            data-srcset="/images/app-icons/app-icon--team.png 1x, /images/app-icons/app-icon--team@2x.png 2x, /images/app-icons/app-icon--team@3x.png 3x"  />
        <h2 class="app__name">{{site.data.copy.home.team.title}}</h2>
        <p class="app__description">
          {{site.data.copy.home.team.description}}
        </p>
        <a href="/leagues" class="app__download-button button button--big">Learn more</a>
      </div>
    </div>

    <div class="block block--6">
      <div class="app app--search">
          <img
            class="app__icon lazyload"
            data-src="/images/app-icons/app-icon--search.png"
            data-srcset="/images/app-icons/app-icon--search.png 1x, /images/app-icons/app-icon--search@2x.png 2x, /images/app-icons/app-icon--search@3x.png 3x"  />
        <h2 class="app__name">{{site.data.copy.home.search.title}}</h2>
        <p class="app__description">
          {{site.data.copy.home.search.description}}
        </p>
        <a class="app__download-button" href="{{site.data.copy.home.search.link.appstore}}" target="_blank">
          <img
            class="app__icon lazyload"
            data-src="/images/buttons/button--appstore.png"
            data-srcset="/images/buttons/button--appstore.png 1x, /images/buttons/button--appstore@2x.png 2x, /images/buttons/app-icon--appstore@3x.png 3x"  />
        </a>
        <a class="app__download-button" href="{{site.data.copy.home.search.link.playstore}}" target="_blank">
          <img
            class="app__icon lazyload"
            data-src="/images/buttons/button--playstore.png"
            data-srcset="/images/buttons/button--playstore.png 1x, /images/buttons/button--playstore@2x.png 2x, /images/buttons/app-icon--playstore@3x.png 3x"  />
        </a>
      </div>
    </div>

  </div>
</section>
