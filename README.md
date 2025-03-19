## AWS Amplify Next.js (App Router) Starter Template

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

# First, clear credentials to avoid the warning
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
unset AWS_SESSION_TOKEN
export AWS_PROFILE=AmplifyUser

# Then run the pipeline-deploy with required arguments
npx ampx pipeline-deploy --branch dev --app-id d11vs26nehi3qm

# You can also add optional arguments for more control:
npx ampx pipeline-deploy \
  --branch dev \
  --app-id d11vs26nehi3qm \
  --debug \
  --outputs-format json \
  --outputs-version 1.3

# First, delete any existing sandbox
npx ampx sandbox delete

# Start a new sandbox (this will deploy to local environment)
npx ampx sandbox --profile AmplifyUser

# Or for one-time deployment to sandbox
npx ampx sandbox --profile AmplifyUser --once

# Deploy to devusing pipeline-deploy command
npx ampx pipeline-deploy dev d11vs26nehi3qm

# Get information about your deployed backend
npx ampx info

# After deployment, update your .env.local with the values from npx ampx info:

NEXT_PUBLIC_API_URL=https://2vxbolc3dzg4zd5gvivuxfuvia.appsync-api.us-east-2.amazonaws.com/graphql
NEXT_PUBLIC_API_KEY=da2-daovzhsuwjc53bmblwoxkpyvt4NEXT_PUBLIC_AWS_REGION=us-east-2
NEXT_PUBLIC_AWS_REGION=us-east-2

# Clear Next.js cache
rm -rf .next

# Restart the development server
yarn dev

# Generate post-deployment artifacts
npx ampx generate

# Get deployment information
npx ampx info

# Development Process:
1. Create feature branch from dev
2. Make changes
3. Create PR to dev
4. Automated tests run
5. Review and merge to dev
6. Automatic deployment to dev environment

# Production Deployment:
1. Create PR from dev to main
2. Final review
3. Merge to main
4. Automatic deployment to production