import pkg from "../package.json";

export class Logger {
  public log(message: string, data?: any) {
    console.log(`${pkg.name} :: ${message}`, data);
  }

  public error(message: string, data?: any) {
    console.error(`ERROR! ${pkg.name} :: ${message}`, data);
  }
}
