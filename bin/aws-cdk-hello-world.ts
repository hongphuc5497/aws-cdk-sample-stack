#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkHelloWorldStack } from '../lib/aws-cdk-hello-world-stack';

const app = new cdk.App();
new AwsCdkHelloWorldStack(app, 'AwsCdkHelloWorldStack');
