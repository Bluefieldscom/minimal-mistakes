---
layout: home
title: Request an Invite
excerpt:
tags:
---

<section class="page-section page-section--try-it-now">
  <div class="row">
    <div class="block block--6 block--centered">
      <h2 class="page-section__title text-center">Get an invite for your league</h2>
      <p class="page-section__text text-center">Fill out the form below and we'll get back to you.</p>
      <form id="league-request" data-success="Request sent!" data-error="Something wrong happened!">
        <label>Name</label>
        <input name="name" class="input--big" type="text" placeholder="Jon doe" required />
        <label>Email</label>
        <input name="email" class="input--big" type="email" placeholder="john@doe.email" required />
        <label>League name</label>
        <input name="leauge_name" class="input--big" type="text" placeholder="Your league name" required />
        <label>Phone Number</label>
        <input name="phone" class="input--big" type="tel" placeholder="Your phone number" />
        <input type="hidden" name="_subject" value="New League Invite Request!" />
        <input type="hidden" name="_next" value="/" />

        <label>You are a</label>
        <div class="select-container">
          <select class="input input--big" name="role" required>
              <option>League admin</option>
            <option>Team captain</option>
            <option>Player</option>
          </select>
        </div>
        <button class="button button--big button--full-width" type="submit">Request Invite</button>
      </form>
    </div>
  </div>
</section>