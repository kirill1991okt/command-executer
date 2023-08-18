import { promises } from 'fs';
import { isAbsolute, join } from 'path';

export class FileService {
  private async isExist(path: string) {
    try {
      await promises.stat(path);
    } catch {
      return false;
    }
  }

  public getFilePath(path: string, name: string, ext: string) {
    if (!isAbsolute(path)) {
      path = join(__dirname + '/' + path);
    }

    return join(path + '/' + name + '.' + ext);
  }

  async deleteFileExists(path: string) {
    if (await this.isExist(path)) {
      promises.unlink(path);
    }
  }
}
