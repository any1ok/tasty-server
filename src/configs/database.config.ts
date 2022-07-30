import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db-server-01.cdjp0eqjbmed.ap-northeast-2.rds.amazonaws.com',
  port: 5432,
  database: 'board-app',
  username: 'postgres',
  password: 'tasty13579',
  entities: [__dirname + '/../**/*.entity.{js,ts}'], // 엔티티 이용해서 테이블 생성 파일 위치
  synchronize: true, //테이블 모두 드롭된후 다시생성
};
