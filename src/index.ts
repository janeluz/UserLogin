import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { User } from './modules/users/model/user'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1210',
  database: 'login',
  synchronize: true,
  logging: true,
  entities: [User],

  migrations: []
})

export function createConnection(host = 'localhost'): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize()
}
