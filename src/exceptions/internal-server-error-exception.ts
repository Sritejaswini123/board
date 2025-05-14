import { INTERNAL_SERVER_ERROR } from "../constants/http-status-codes";
import { INTERNAL_SERVER_ERROR as INTERNAL_SERVER_ERROR_MESSAGE } from "../constants/http-status-phrases";

import BaseException from "./base-exception";

export default class InternalServerErrorException extends BaseException {
  constructor(message?: string, errData?: any) {
    super(INTERNAL_SERVER_ERROR, message || INTERNAL_SERVER_ERROR_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE, true, errData);
  }
}
