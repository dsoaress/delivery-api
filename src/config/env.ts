const { JWT_SECRET_CLIENT, JWT_SECRET_DELIVERYMAN } = process.env

export const env = {
  JWT_SECRET_CLIENT: JWT_SECRET_CLIENT || 'secret_client',
  JWT_SECRET_DELIVERYMAN: JWT_SECRET_DELIVERYMAN || 'secret_deliveryman'
}
