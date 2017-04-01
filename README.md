# cardstack-demo

This is the app I demonstrated during my talk at EmberConf 2017.

Since the cardstack addons are namespaced, and since npm/yarn seem to have a lot of bugs with namespaced packages, you may need to clone https://github.com/cardstack/cardstack and symlink its `packages` directory as `node_modules/@cardstack`.

To run the Cardstack Hub, you need Elasticsearch 5.x. Set an environment variable like `ELASTICSEARCH=http://localhost:9200` to point at Elasticsearch.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (Cardstack Hub requires Node 7)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd cardstack-demo`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
