// import dayjs from "dayjs";
// import { UsersTokensRepository } from "../users/repositories/implementations/UsersTokensRepository";

// class GenerateRefreshToken {
//   async execute(userId: string){
//     const expiresIn = dayjs().add(30,'second').unix();
//     const generateRefreshToken = await this.UsersTokensRepository.create({
//       data: {
//         userId,
//         expiresIn
//       }
//     })
//   }
// }

// export{ GenerateRefreshToken };