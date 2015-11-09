#!/usr/bin/env bash
jekyll build --config _config.yml && rsync -avz -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" --progress _site/ ubuntu@52.33.126.220:/srv/www/more.mitoo.co/httpdocs