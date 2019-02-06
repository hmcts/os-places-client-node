# os-places-client-node

Written to directly replace the deprecated [postcode-info-client-node](https://github.com/hmcts/postcodeinfo-client-node)

API Client wrapper for [Ordnance Survey Places Postcode API](https://apidocs.os.uk/docs/os-places-postcode).

[![Build Status](https://travis-ci.org/hmcts/os-places-client-node.svg?branch=master)](https://travis-ci.org/hmcts/os-places-client-node.svg?branch=master)  
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)  
[![Greenkeeper badge](https://badges.greenkeeper.io/hmcts/os-places-client-node.svg)](https://greenkeeper.io/)

# Usage

## Authentication

You will need an API key for `OS Places API - Capture and Verification`. You can get one by emailing platforms@digital.justice.gov.uk with a brief summary of:

* Who you are
* What project you're going to be using it on
* Roughly how many lookups you expect to do per day
* No. of keys required
* Product and environment type for each key
* Contact name and email address for issuing keys


## Quick start
```bash
$ yarn add @hmcts/os-places-client
```

Typescript:
```ts
import { OSPlacesClient  } from '@hmcts/os-places-client'

new OSPlacesClient('<token here>').lookupByPostcode('SN15NB')

```

- Javascript -

```js
const OSPlacesClient = require('@hmcts/os-places-client').OSPlacesClient

new OSPlacesClient('<token here>').lookupByPostcode('SN15NB')
```
