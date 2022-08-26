import { Logger } from "./logger.service";
export class LogUser {
  public count;
  constructor(count: number) {
    this.count = count
  }

  displayCount(){
    console.log(this.count)
  }

}
