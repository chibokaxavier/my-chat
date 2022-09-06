import { Logger } from "./../services/logger.service";
import { LogUser } from "./../services/logUser.service";
import { AuthService } from "./../services/auth.service";
import React from "react";
import { selectCount } from "./../store/slices/counter";
export class ServiceProvider {
  public logger: Logger;
  public logUser: LogUser;
  public authService: AuthService
  constructor(
    logger: Logger,
    logUser: LogUser,
    auth: AuthService
  ) {
    this.logger = logger;
    this.logUser = logUser;
    this.authService = auth
  }
}
export const ServiceContext = React.createContext({
  logger: {},
  logUser: {
    displayCount: () => {},
  },
  authService: {
    saveUser: (user) => {}
  }
});
