import { MypluginExecutorSchema } from './schema';
import executor from './executor';

const options: MypluginExecutorSchema = {};

describe('Myplugin Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
