import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const s3Bucket = new s3.Bucket(this, 'avatars-bucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // 👇 Get access to the CfnBucket resource
    const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;

    // 👇 Override the bucket's logical ID
    cfnBucket.overrideLogicalId('myLogicalId');
  }
}
