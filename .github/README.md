# Experimental Devcontainer

Use Nginx to create load balancer and use content from different services.

If you want to test:
- open new terminal and hit `composer dev`
- open another terminal `npm dev`

and you can check `http://localhost:8080` and `http://localhost:3333` urls but
you can see both responses on `http://localhost:8000` after refresh the page -
the load balancer is working properly.

Do some effort and check an example:
- `cd app`
- `pnpm install`
- `pnpm dev`

open link in the browser and refresh the page. You can see the message at the
bottom is changing after page ahs been refreshed.

Quick check: https://youtu.be/CCJU2p6gQ2c
