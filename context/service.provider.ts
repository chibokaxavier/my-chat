import { Logger } from "./../services/logger.service";
import { LogUser } from "./../services/logUser.service";
import React from "react";
import { selectCount } from "./../store/slices/counter";
export class ServiceProvider {
  public logger: Logger;
  public logUser: LogUser;
  constructor(
    logger: Logger,
    logUser: LogUser
  ) {
    this.logger = logger;
    this.logUser = logUser;
  }
}
export const ServiceContext = React.createContext({
  logger: {},
  logUser: {
    displayCount: () => {},
  },
});
