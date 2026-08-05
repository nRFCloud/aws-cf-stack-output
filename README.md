# aws-cf-stack-output [![npm version](https://img.shields.io/npm/v/@nrfcloud/aws-cf-stack-output.svg)](https://www.npmjs.com/package/@nrfcloud/aws-cf-stack-output)  

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Echos the value of an AWS CloudFormation stack output

Usage: 

    npx @nrfcloud/aws-cf-stack-output <stackName> <outputName>

## Setup
To run the script, you need to configure access to your AWS account. 
The recommended way is to [set up a shared credentials file 
`.aws\credentials`](https://docs.aws.amazon.com/de_de/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html) 
and [set the environment variable 
`AWS_REGION`](https://docs.aws.amazon.com/de_de/sdk-for-javascript/v2/developer-guide/setting-region.html#setting-region-environment-variable) 
to the value `us-east-1`.

## Node & NPM

This project requires Node.js `>=12.0.0` and npm `>=12.0.2 <13` (enforced via
`check-node-version` on `npm install` and `npm ci`).

The check is skipped during `npm publish` and `npm pack`, because
`semantic-release` bundles its own npm (`@semantic-release/npm` depends on
`npm@^11.6.2`) and runs the publish with that version rather than the one
installed in CI.
