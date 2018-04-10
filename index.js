#!/bin/env node

const { CloudFormation } = require('aws-sdk');

const describeStack = async (cf, StackName) => {
  const { Stacks } = await cf.describeStacks({ StackName }).promise();
  const { Outputs } = Stacks.pop();
  return Outputs.reduce((outputs, { OutputKey, OutputValue }) => {
    outputs[OutputKey] = OutputValue;
    return outputs;
  }, {});
};

(async () => {
  const stackName = process.argv[process.argv.length - 2];
  const output = process.argv[process.argv.length - 1];
  const cf = new CloudFormation();
  const Outputs = await describeStack(cf, stackName);
  console.log(Outputs[output]);
})();
