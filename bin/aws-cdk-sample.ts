#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkSampleStack } from '../lib/aws-sample-stack';

const app = new cdk.App();
let STACK_NAME = 'AwsSampleStack';
new AwsCdkSampleStack(app, STACK_NAME);
