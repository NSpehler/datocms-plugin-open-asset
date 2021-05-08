# Download Button DatoCMS plugin

A plugin to add a one-click download button to single asset fields in DatoCMS.

## Configuration

Please specify a read-only DatoCMS API key on the plugin global settings:

![Demo](https://raw.githubusercontent.com/NSpehler/datocms-plugin-download-button/master/docs/global.png)

https://www.datocms.com/docs/building-plugins/install#assigning-a-plugin-to-a-field

## Usage

To add a download button to a single asset field, choose "Download Button" as a field add-on.

![Install](https://raw.githubusercontent.com/NSpehler/datocms-plugin-download-button/master/docs/install.png)

## Development

Install all the project dependencies with:

```
yarn install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
yarn addToProject
```

Start the local development server with:

```
yarn start
```

The plugin will be served from [http://localhost:5000/](http://localhost:5000/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).

## Publishing

Before publishing this plugin, make sure:

* you've properly described any configuration parameters in this README file;
* you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/plugins/publishing/);
* you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, just run:

```
yarn publish
```
