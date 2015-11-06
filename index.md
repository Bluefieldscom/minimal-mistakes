---
layout: home
excerpt: "A minimal Jekyll theme for your blog by designer Michael Rose."
tags: [Jekyll, theme, responsive, blog, template]
---


<section class="page-section page-section--header page-section--center-content">
  <div class="row content-center">
    <div class="block block--8 block--centered">
      <div class="headline headline--home">
        <h1 class="headline__title">
          <img
          class="lazyload"
          data-src="/images/logos/logo--header.png"
          data-srcset="/images/logos/logo--header.png 1x, /images/logos/logo--header@2x.png 2x, /images/logos/logo--header@3x.png 3x"  />
        </h1>
        <h3 class="headline__subtitle">{{site.data.copy.home.subline}}</h3>
      </div>
    </div>
  </div>
</section>

<section class="page-section page-section--app-presentation">
  <div class="row">
    <div class="block block--4">
      Screenshot of search app
    </div>
    <div class="block block--8">

      <div class="app app--search">
        <h2>
          <img
            class="app__icon lazyload"
            data-src="/images/app-icons/app-icon--search.png"
            data-srcset="/images/app-icons/app-icon--search.png 1x, /images/app-icons/app-icon--search@2x.png 2x, /images/app-icons/app-icon--search@3x.png 3x"  />
          <span class="app__name">{{site.data.copy.home.search.title}}</span>
        </h2>
        <p class="app__description">
          {{site.data.copy.home.search.description}}
        </p>
        <ul class="app__feature-list">
          {% for feature in site.data.copy.home.search.features%}
            <li>{{feature}}</li>
          {% endfor %}
        </ul>
        <a href="{{site.data.copy.home.search.link}}" class="app__download-button button button--big">Download</a>
      </div>
    </div>
  </div>
</section>


<section class="page-section page-section--app-presentation">
  <div class="row">

    <div class="block block--8">
      <div class="app app--team">
        <h2>
          <img
            class="app__icon lazyload"
            data-src="/images/app-icons/app-icon--team.png"
            data-srcset="/images/app-icons/app-icon--team.png 1x, /images/app-icons/app-icon--team@2x.png 2x, /images/app-icons/app-icon--team@3x.png 3x"  />
          <span class="app__name">{{site.data.copy.home.team.title}}</span>
        </h2>
        <p class="app__description">
          {{site.data.copy.home.team.description}}
        </p>
        <ul class="app__feature-list">
          {% for feature in site.data.copy.home.team.features%}
            <li>{{feature}}</li>
          {% endfor %}
        </ul>
        <a href="{{site.data.copy.home.team.link}}" class="app__download-button button button--big">Download</a>
      </div>
    </div>

    <div class="block block--4">
      Screenshot of team app
    </div>
  </div>
</section>