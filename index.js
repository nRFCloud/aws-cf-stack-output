#!/usr/bin/env node

const { CloudFormation } = require('aws-sdk');

const describeStack = (cf, StackName) => cf.describeStacks({ StackName }).promise()
  .then(({ Stacks }) => Stacks.pop())
  .then(({ Outputs }) => Outputs.reduce((outputs, { OutputKey, OutputValue }) => {
    outputs[OutputKey] = OutputValue;
    return outputs;
  }, {}));

const stackName = process.argv[process.argv.length - 2];
const output = process.argv[process.argv.length - 1];
const cf = new CloudFormation();
describeStack(cf, stackName)
  .then(Outputs => {
    console.log(Outputs[output]);
  });
