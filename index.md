---
layout: home
excerpt: "A minimal Jekyll theme for your blog by designer Michael Rose."
tags: [Jekyll, theme, responsive, blog, template]
---


<section class="page-section page-section--header">
  <div class="row">
    <div class="block block--8 block--centered">
      <div class="headline">
        <h1 class="headline__title">MITOO</h1>
        <h3 class="headline__subtitle">something swaggish</h3>
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
          <span class="app__name">{{site.data.copy.apps.search.title}}</span>
        </h2>
        <p class="app__description">
          {{site.data.copy.apps.search.description}}
        </p>
        <ul class="app__feature-list">
          {% for feature in site.data.copy.apps.search.features%}
            <li>{{feature}}</li>
          {% endfor %}
        </ul>
        <a href="{{site.data.copy.apps.search.link}}" class="app__download-button button button--big">Download</a>
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
          <span class="app__name">{{site.data.copy.apps.team.title}}</span>
        </h2>
        <p class="app__description">
          {{site.data.copy.apps.team.description}}
        </p>
        <ul class="app__feature-list">
          {% for feature in site.data.copy.apps.team.features%}
            <li>{{feature}}</li>
          {% endfor %}
        </ul>
        <a href="{{site.data.copy.apps.team.link}}" class="app__download-button button button--big">Download</a>
      </div>
    </div>

    <div class="block block--4">
      Screenshot of team app
    </div>
  </div>
</section>