
import serverless from 'serverless-http';
import { APIGatewayProxyHandler } from 'aws-lambda';

import app from './app';

const serverlessApp = serverless(app);

export const handler: APIGatewayProxyHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = true;

  const response = await serverlessApp(event, context);

  return response;
}