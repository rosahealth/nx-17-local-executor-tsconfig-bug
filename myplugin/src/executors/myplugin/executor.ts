import { MypluginExecutorSchema } from './schema';

export default async function runExecutor(options: MypluginExecutorSchema) {
  console.log('Executor ran for Myplugin, works on Nx16, crashes on Nx17', options);
  return {
    success: true,
  };
}
