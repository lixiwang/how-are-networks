# how-are-networks

> A Vue.js component,
> My connection is ok, bat I cannot access some sites, ( github.com, npmjs.com, mavenresp, etc...)
> There are more and more problems about networks.
> The project would help me to test the status and tell me why.

## Install Dependences

```bash
# you have created your vue project.

# install dependencies
npm i how-are-networks -s

```

## Use It

```bash
# use it global in your project
# insert lines in main.js(default)
import han from 'how-are-networks'
Vue.use(han)

# or, use it local
#insert inside <script> of your-need.vue
import { Main as howAreNetworks} from 'how-are-networks'
...
components: [howAreNetworks]

# insert inside <template> of your-need.vue
<how-are-networks>
</how-are-networks>

# serve with hot reload at localhost:8080
npm run dev

```

For detailed explanation on how things work, consult the [docs for how-are-networks](https://github.com/lixiwang/how-are-networks).
