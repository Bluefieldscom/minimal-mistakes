module Jekyll

  class LeagueStoryPage < Page
    def initialize(site, base, dir, league_story)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'league-story.html')

      self.data['league_story'] = league_story
      self.data['title'] = league_story['title']
    end
  end

  class LeagueStoryGenerator < Generator
    safe true

    def generate(site)
      dir = '/leagues/stories'
      site.data['league_stories'].each do |league_story|
        name = league_story['name']
        site.pages << LeagueStoryPage.new(site, site.source, File.join(dir, name), league_story)
      end
    end
  end

end