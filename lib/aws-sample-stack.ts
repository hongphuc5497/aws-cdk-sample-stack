import { Duration, Stack, StackProps, RemovalPolicy } from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class AwsCdkSampleStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // SQS
    const queue = new sqs.Queue(this, `${id}Queue`, {
      visibilityTimeout: Duration.seconds(300)
    });

    // SNS
    const topic = new sns.Topic(this, `${id}Topic`);

    // Link SNS to SQS
    topic.addSubscription(new subs.SqsSubscription(queue));

    // S3
    new s3.Bucket(this, `${id}Bucket`, {
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });
  }
}
