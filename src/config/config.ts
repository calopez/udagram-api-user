export const config = {
  'username': process.env.UDC_POSTGRES_USERNAME,
  'password': process.env.UDC_POSTGRES_PASSWORD,
  'database': process.env.UDC_POSTGRES_DB,
  'host': process.env.UDC_POSTGRES_HOST,
  'dialect': 'postgres',
  'aws_region': process.env.UDC_AWS_REGION,
  'aws_profile': process.env.UDC_AWS_PROFILE,
  'url': process.env.UDC_URL,
  'jwt': {
    'secret': process.env.UDC_JWT_SECRET,
  },
};
